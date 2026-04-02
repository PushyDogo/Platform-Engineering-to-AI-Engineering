// ============================================================
// ROADMAP TRACKER — Main Application Logic
// State is persisted in localStorage under 'ai-roadmap-v1'
// ============================================================

const STORAGE_KEY = 'ai-roadmap-v1';
const STORAGE_VERSION = 1;

// ── State ───────────────────────────────────────────────────
let appState = {
  selectedNodeId: null,
  userState: loadUserState(),
};

// ── localStorage Helpers ────────────────────────────────────
function loadUserState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createDefaultUserState();
    const parsed = JSON.parse(raw);
    if (parsed.version !== STORAGE_VERSION) return createDefaultUserState();
    return parsed;
  } catch {
    return createDefaultUserState();
  }
}

function createDefaultUserState() {
  return { version: STORAGE_VERSION, nodes: {} };
}

function saveUserState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.userState));
}

function getNodeState(nodeId) {
  return appState.userState.nodes[nodeId] || {
    status: 'not-started',
    notes: '',
    lastUpdated: new Date().toISOString()
  };
}

function setNodeStatus(nodeId, status) {
  const current = getNodeState(nodeId);
  appState.userState.nodes[nodeId] = { ...current, status, lastUpdated: new Date().toISOString() };
  saveUserState();
  refreshNodeCard(nodeId);
  refreshProgressBars();
  // Update panel header if this node is open
  if (appState.selectedNodeId === nodeId) {
    updatePanelStatusButtons(status);
  }
}

let notesDebounceTimer = null;
function setNodeNotes(nodeId, notes) {
  const current = getNodeState(nodeId);
  appState.userState.nodes[nodeId] = { ...current, notes, lastUpdated: new Date().toISOString() };
  clearTimeout(notesDebounceTimer);
  notesDebounceTimer = setTimeout(() => {
    saveUserState();
    showSavedIndicator();
  }, 300);
}

// ── Progress Calculation ────────────────────────────────────
function getAllNodes() {
  const nodes = [];
  for (const phase of ROADMAP_DATA.phases) {
    if (phase.granularity === 'week') {
      for (const week of phase.weeks) {
        for (const node of week.nodes) nodes.push(node);
      }
    } else {
      for (const month of phase.months) {
        for (const node of month.nodes) nodes.push(node);
      }
    }
  }
  return nodes;
}

function getPhaseNodes(phaseId) {
  const phase = ROADMAP_DATA.phases.find(p => p.id === phaseId);
  if (!phase) return [];
  const nodes = [];
  if (phase.granularity === 'week') {
    for (const week of phase.weeks) {
      for (const node of week.nodes) nodes.push(node);
    }
  } else {
    for (const month of phase.months) {
      for (const node of month.nodes) nodes.push(node);
    }
  }
  return nodes;
}

function calcProgress(nodes) {
  const total = nodes.length;
  const completed = nodes.filter(n => getNodeState(n.id).status === 'completed').length;
  const inProgress = nodes.filter(n => getNodeState(n.id).status === 'in-progress').length;
  return { total, completed, inProgress, pct: total ? Math.round((completed / total) * 100) : 0 };
}

// ── Icon Helpers ─────────────────────────────────────────────
const RESOURCE_ICONS = {
  video: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm-2 14.5V5.5l7 4.5-7 4.5z"/></svg>`,
  article: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4V4zm0 4h12v2H4V8zm0 4h8v2H4v-2z"/><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
  book: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4 7.962 7.962 0 0010 4.804v8.392A7.967 7.967 0 0014.5 12c.79 0 1.546.115 2.25.33V5.332A5.97 5.97 0 0014.5 5c-1.17 0-2.27.331-3.2.904L11 6.04V14.5a7.962 7.962 0 00-1-.196V4.804z"/></svg>`,
  course: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z"/></svg>`,
  tool: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`,
  github: `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`
};

const STATUS_CONFIG = {
  'not-started': { label: 'Not Started', color: 'text-gray-400', bg: 'bg-gray-700', border: 'border-gray-600', dot: 'bg-gray-500' },
  'in-progress': { label: 'In Progress', color: 'text-blue-300', bg: 'bg-blue-900/40', border: 'border-blue-600', dot: 'bg-blue-500' },
  'completed':   { label: 'Completed',   color: 'text-green-300', bg: 'bg-green-900/40', border: 'border-green-600', dot: 'bg-green-500' }
};

// ── Render Helpers ───────────────────────────────────────────
function renderStatusDot(status) {
  const cfg = STATUS_CONFIG[status];
  if (status === 'completed') {
    return `<div class="w-5 h-5 rounded-full flex items-center justify-center ${cfg.dot}">
      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
    </div>`;
  }
  if (status === 'in-progress') {
    return `<div class="w-5 h-5 rounded-full flex items-center justify-center ${cfg.dot}">
      <div class="w-2 h-2 rounded-full bg-white animate-pulse"></div>
    </div>`;
  }
  return `<div class="w-5 h-5 rounded-full border-2 border-gray-500"></div>`;
}

function renderProgressBar(pct, colorClass = 'bg-blue-500') {
  return `<div class="h-1.5 bg-gray-700 rounded-full overflow-hidden flex-1">
    <div class="${colorClass} h-full rounded-full transition-all duration-500" style="width:${pct}%"></div>
  </div>`;
}

function renderProgressRing(pct, size = 48, stroke = 4) {
  const r = (size - stroke * 2) / 2;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;
  const color = pct === 100 ? '#16a34a' : pct > 0 ? '#2563eb' : '#4b5563';
  return `<svg width="${size}" height="${size}" class="transform -rotate-90">
    <circle cx="${size/2}" cy="${size/2}" r="${r}" stroke="#374151" stroke-width="${stroke}" fill="none"/>
    <circle cx="${size/2}" cy="${size/2}" r="${r}" stroke="${color}" stroke-width="${stroke}" fill="none"
      stroke-dasharray="${dash} ${c}" stroke-linecap="round" class="transition-all duration-500"/>
  </svg>`;
}

function renderCostBadge(cost) {
  const map = {
    'free': 'bg-green-900/60 text-green-300 border border-green-700',
    'paid': 'bg-red-900/60 text-red-300 border border-red-700',
    'free-tier': 'bg-yellow-900/60 text-yellow-300 border border-yellow-700'
  };
  const labels = { 'free': 'Free', 'paid': 'Paid', 'free-tier': 'Free Tier' };
  return `<span class="text-xs px-1.5 py-0.5 rounded ${map[cost] || ''}">${labels[cost] || cost}</span>`;
}

function renderResourceTypeLabel(type) {
  const map = {
    video: 'text-red-400',
    article: 'text-sky-400',
    book: 'text-purple-400',
    course: 'text-orange-400',
    tool: 'text-teal-400',
    github: 'text-gray-300'
  };
  return `<span class="${map[type] || 'text-gray-400'}">${RESOURCE_ICONS[type] || ''}</span>`;
}

// ── Node Card Rendering ─────────────────────────────────────
function renderNodeCard(node) {
  const state = getNodeState(node.id);
  const { status } = state;
  const cfg = STATUS_CONFIG[status];
  const isSelected = appState.selectedNodeId === node.id;
  const isProject = node.isProject;

  const borderColor = isProject
    ? (status === 'completed' ? 'border-l-green-500' : status === 'in-progress' ? 'border-l-blue-500' : 'border-l-amber-500')
    : (status === 'completed' ? 'border-l-green-500' : status === 'in-progress' ? 'border-l-blue-500' : 'border-l-gray-600');

  const bgColor = isSelected
    ? (isProject ? 'bg-amber-950/40' : 'bg-gray-700/60')
    : cfg.bg;

  const ringClass = isSelected ? 'ring-2 ring-white/20' : '';

  return `<div
    id="node-${node.id}"
    class="node-card border-l-4 ${borderColor} ${bgColor} ${ringClass} rounded-r-lg px-4 py-3 cursor-pointer transition-all duration-200 hover:brightness-110 select-none"
    onclick="selectNode('${node.id}')"
    data-node-id="${node.id}"
  >
    <div class="flex items-center gap-3">
      ${renderStatusDot(status)}
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 flex-wrap">
          ${isProject ? `<span class="text-xs font-bold text-amber-400 uppercase tracking-wider">Project #${node.projectNumber}</span>` : node.dayLabel ? `<span class="text-xs text-gray-500 font-mono">${node.dayLabel}</span>` : ''}
        </div>
        <div class="text-sm font-medium text-gray-100 truncate">${node.shortTitle}</div>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        ${node.resources && node.resources.length > 0 ? `<span class="text-xs text-gray-500">${node.resources.length} res</span>` : ''}
        <svg class="w-4 h-4 text-gray-500 transition-transform duration-200 ${isSelected ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </div>
    </div>
  </div>`;
}

function refreshNodeCard(nodeId) {
  const el = document.getElementById(`node-${nodeId}`);
  if (!el) return;
  const node = findNode(nodeId);
  if (!node) return;
  el.outerHTML = renderNodeCard(node);
}

function findNode(nodeId) {
  for (const phase of ROADMAP_DATA.phases) {
    if (phase.granularity === 'week') {
      for (const week of phase.weeks) {
        for (const node of week.nodes) if (node.id === nodeId) return node;
      }
    } else {
      for (const month of phase.months) {
        for (const node of month.nodes) if (node.id === nodeId) return node;
      }
    }
  }
  return null;
}

// ── Week Group Rendering ────────────────────────────────────
function renderWeekGroup(week) {
  const nodes = week.nodes;
  const { pct, completed, total } = calcProgress(nodes);
  const progressColor = pct === 100 ? 'bg-green-500' : 'bg-blue-500';

  return `<div class="week-group mb-3">
    <div class="flex items-center gap-3 mb-2 px-1">
      <div class="flex flex-col gap-0.5 flex-1">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">${week.title}</span>
          <span class="text-xs text-gray-500">${week.days}</span>
          <span class="text-xs text-gray-600 ml-auto">${completed}/${total}</span>
        </div>
        ${renderProgressBar(pct, progressColor)}
      </div>
    </div>
    <div class="space-y-1.5 pl-0" id="week-nodes-${week.id}">
      ${nodes.map((node, i) => `
        <div class="relative">
          ${i < nodes.length - 1 ? '<div class="absolute left-[14px] top-[40px] w-0.5 h-[calc(100%+6px)] bg-gray-700/60 z-0"></div>' : ''}
          <div class="relative z-10">${renderNodeCard(node)}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

// ── Month Group Rendering ───────────────────────────────────
function renderMonthGroup(month) {
  const nodes = month.nodes;
  const { pct, completed, total } = calcProgress(nodes);
  const isExpanded = true; // all expanded by default

  return `<div class="month-group mb-3" id="month-${month.id}">
    <div class="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <button
        class="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-gray-750 transition-colors"
        onclick="toggleMonth('${month.id}')"
      >
        <div class="flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-sm font-semibold text-gray-200">${month.title}</span>
            <span class="text-xs text-gray-400">— ${month.subtitle}</span>
          </div>
          <div class="flex items-center gap-2 mt-1.5">
            ${renderProgressBar(pct, pct === 100 ? 'bg-green-500' : 'bg-blue-500')}
            <span class="text-xs text-gray-500 flex-shrink-0">${completed}/${total}</span>
          </div>
        </div>
        <svg id="month-chevron-${month.id}" class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
      <div id="month-content-${month.id}" class="${isExpanded ? '' : 'hidden'} px-3 pb-3 space-y-1.5">
        ${nodes.map((node, i) => `
          <div class="relative">
            ${i < nodes.length - 1 ? '<div class="absolute left-[14px] top-[40px] w-0.5 h-[calc(100%+6px)] bg-gray-700/60 z-0"></div>' : ''}
            <div class="relative z-10">${renderNodeCard(node)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>`;
}

function toggleMonth(monthId) {
  const content = document.getElementById(`month-content-${monthId}`);
  const chevron = document.getElementById(`month-chevron-${monthId}`);
  content.classList.toggle('hidden');
  chevron.classList.toggle('rotate-90');
}

// ── Phase Section Rendering ─────────────────────────────────
function renderPhaseSection(phase) {
  const nodes = getPhaseNodes(phase.id);
  const { pct, completed, total } = calcProgress(nodes);
  const phaseColors = {
    'phase-1': { ring: '#3b82f6', text: 'text-blue-400', badge: 'bg-blue-900/40 text-blue-300 border-blue-700' },
    'phase-2': { ring: '#8b5cf6', text: 'text-purple-400', badge: 'bg-purple-900/40 text-purple-300 border-purple-700' }
  };
  const colors = phaseColors[phase.id] || phaseColors['phase-1'];

  let childrenHtml = '';
  if (phase.granularity === 'week') {
    childrenHtml = phase.weeks.map(w => renderWeekGroup(w)).join('');
  } else {
    childrenHtml = phase.months.map(m => renderMonthGroup(m)).join('');
  }

  return `<div class="phase-section mb-10" id="${phase.id}">
    <div class="flex items-start gap-4 mb-4">
      <div class="relative flex-shrink-0">
        ${renderProgressRing(pct, 52, 4)}
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-xs font-bold ${colors.text}">${pct}%</span>
        </div>
      </div>
      <div class="flex-1 pt-1">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-xs font-bold uppercase tracking-wider border rounded px-2 py-0.5 ${colors.badge}">${phase.title}</span>
          <h2 class="text-lg font-bold text-white">${phase.subtitle}</h2>
        </div>
        <p class="text-sm text-gray-400 mt-0.5">${phase.description}</p>
        <div class="flex items-center gap-2 mt-2">
          ${renderProgressBar(pct, pct === 100 ? 'bg-green-500' : phase.id === 'phase-2' ? 'bg-purple-500' : 'bg-blue-500')}
          <span class="text-xs text-gray-500 flex-shrink-0">${completed}/${total} completed</span>
        </div>
      </div>
    </div>
    <div class="pl-0">
      ${childrenHtml}
    </div>
  </div>`;
}

// ── Detail Panel ─────────────────────────────────────────────
function renderDetailPanel(node) {
  if (!node) return '';
  const state = getNodeState(node.id);
  const { status, notes } = state;

  // Group resources by type
  const typeOrder = ['course', 'video', 'article', 'book', 'tool', 'github'];
  const grouped = {};
  for (const type of typeOrder) {
    const items = (node.resources || []).filter(r => r.type === type);
    if (items.length) grouped[type] = items;
  }
  const typeLabels = { course: 'Courses', video: 'Videos', article: 'Articles & Docs', book: 'Books', tool: 'Tools', github: 'GitHub Repos' };

  const resourcesHtml = Object.keys(grouped).length === 0
    ? `<p class="text-sm text-gray-500 italic">No resources yet — add links to data.js to populate this section.</p>`
    : Object.entries(grouped).map(([type, items]) => `
        <div class="mb-4">
          <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">${typeLabels[type]}</h4>
          <div class="space-y-2">
            ${items.map(r => `
              <a href="${r.url}" target="_blank" rel="noopener noreferrer"
                class="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 transition-colors group">
                <span class="${getResourceTypeColor(r.type)} mt-0.5 flex-shrink-0">${RESOURCE_ICONS[r.type] || ''}</span>
                <div class="flex-1 min-w-0">
                  <div class="text-sm text-gray-200 group-hover:text-white transition-colors leading-snug">${r.title}</div>
                  <div class="flex items-center gap-2 mt-1 flex-wrap">
                    ${r.author ? `<span class="text-xs text-gray-500">${r.author}</span>` : ''}
                    ${r.duration ? `<span class="text-xs text-gray-600">· ${r.duration}</span>` : ''}
                    ${renderCostBadge(r.cost)}
                    ${r.note ? `<span class="text-xs text-amber-400/80 italic">★ ${r.note}</span>` : ''}
                  </div>
                </div>
                <svg class="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('');

  return `
    <div class="flex flex-col h-full">
      <!-- Panel Header -->
      <div class="flex-shrink-0 border-b border-gray-700 p-4">
        <div class="flex items-start justify-between gap-2 mb-3">
          <div class="flex-1">
            ${node.isProject ? `<div class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Project #${node.projectNumber}</div>` : node.dayLabel ? `<div class="text-xs font-mono text-gray-500 mb-1">${node.dayLabel}</div>` : ''}
            <h3 class="text-base font-bold text-white leading-snug">${node.title}</h3>
          </div>
          <button onclick="closePanel()" class="text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0 mt-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <!-- Status Toggle -->
        <div class="flex gap-1.5" id="status-buttons">
          ${['not-started', 'in-progress', 'completed'].map(s => {
            const cfg = STATUS_CONFIG[s];
            const isActive = status === s;
            return `<button
              onclick="setNodeStatus('${node.id}', '${s}')"
              class="flex-1 text-xs py-1.5 px-2 rounded-lg font-medium transition-all duration-150 border ${isActive ? cfg.bg + ' ' + cfg.color + ' ' + cfg.border : 'bg-gray-800 text-gray-500 border-gray-700 hover:bg-gray-750'}"
              data-status="${s}"
            >${cfg.label}</button>`;
          }).join('')}
        </div>
      </div>

      <!-- Scrollable content -->
      <div class="flex-1 overflow-y-auto p-4 space-y-5">

        <!-- Description -->
        <p class="text-sm text-gray-300 leading-relaxed">${node.description}</p>

        <!-- Key Concepts -->
        ${node.concepts && node.concepts.length > 0 ? `
          <div>
            <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Key Concepts</h4>
            <ul class="space-y-1.5">
              ${node.concepts.map(c => `
                <li class="flex items-start gap-2 text-sm text-gray-300">
                  <span class="text-blue-400 mt-1 flex-shrink-0">›</span>
                  <span>${c}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Practice Prompt -->
        ${node.practicePrompt ? `
          <div class="bg-amber-950/30 border border-amber-800/50 rounded-lg p-3">
            <div class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5">Practice Exercise</div>
            <p class="text-sm text-amber-100/80">${node.practicePrompt}</p>
          </div>
        ` : ''}

        <!-- Resources -->
        <div>
          <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Resources</h4>
          ${resourcesHtml}
        </div>

        <!-- Notes -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs font-bold text-gray-500 uppercase tracking-wider">Personal Notes</h4>
            <span id="notes-saved" class="text-xs text-green-400 opacity-0 transition-opacity duration-300">Saved ✓</span>
          </div>
          <textarea
            id="notes-textarea"
            class="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-500 resize-none h-32"
            placeholder="Write your notes here… reminders, key takeaways, questions to revisit…"
            oninput="setNodeNotes('${node.id}', this.value)"
          >${notes || ''}</textarea>
        </div>
      </div>
    </div>
  `;
}

function getResourceTypeColor(type) {
  const map = {
    video: 'text-red-400', article: 'text-sky-400', book: 'text-purple-400',
    course: 'text-orange-400', tool: 'text-teal-400', github: 'text-gray-400'
  };
  return map[type] || 'text-gray-400';
}

function showSavedIndicator() {
  const el = document.getElementById('notes-saved');
  if (!el) return;
  el.style.opacity = '1';
  setTimeout(() => { el.style.opacity = '0'; }, 1500);
}

function updatePanelStatusButtons(activeStatus) {
  const container = document.getElementById('status-buttons');
  if (!container) return;
  container.querySelectorAll('button').forEach(btn => {
    const s = btn.dataset.status;
    const cfg = STATUS_CONFIG[s];
    const isActive = s === activeStatus;
    btn.className = `flex-1 text-xs py-1.5 px-2 rounded-lg font-medium transition-all duration-150 border ${isActive ? cfg.bg + ' ' + cfg.color + ' ' + cfg.border : 'bg-gray-800 text-gray-500 border-gray-700 hover:bg-gray-750'}`;
  });
}

// ── Interaction ──────────────────────────────────────────────
function selectNode(nodeId) {
  const prev = appState.selectedNodeId;
  appState.selectedNodeId = nodeId;

  // Update previously selected card
  if (prev && prev !== nodeId) refreshNodeCard(prev);
  // Update current card
  refreshNodeCard(nodeId);

  const node = findNode(nodeId);
  const panel = document.getElementById('detail-panel');
  const panelContent = document.getElementById('detail-panel-content');

  panelContent.innerHTML = renderDetailPanel(node);
  panel.classList.remove('translate-x-full');
  panel.classList.add('translate-x-0');

  // On mobile, prevent body scroll
  if (window.innerWidth < 768) {
    document.body.style.overflow = 'hidden';
  }
}

function closePanel() {
  const prev = appState.selectedNodeId;
  appState.selectedNodeId = null;
  if (prev) refreshNodeCard(prev);

  const panel = document.getElementById('detail-panel');
  panel.classList.remove('translate-x-0');
  panel.classList.add('translate-x-full');
  document.body.style.overflow = '';
}

// ── Progress Bar Refresh ─────────────────────────────────────
function refreshProgressBars() {
  // Re-render the entire roadmap isn't ideal for large pages,
  // instead we update just the progress elements
  const allNodes = getAllNodes();
  const { pct: overallPct, completed, total } = calcProgress(allNodes);

  const overallBar = document.getElementById('overall-progress-bar');
  const overallLabel = document.getElementById('overall-progress-label');
  const overallPctEl = document.getElementById('overall-progress-pct');
  if (overallBar) overallBar.style.width = `${overallPct}%`;
  if (overallLabel) overallLabel.textContent = `${completed}/${total}`;
  if (overallPctEl) overallPctEl.textContent = `${overallPct}%`;

  // Re-render phases to update rings and sub-bars
  for (const phase of ROADMAP_DATA.phases) {
    const phaseEl = document.getElementById(phase.id);
    if (phaseEl) phaseEl.outerHTML = renderPhaseSection(phase);
  }
}

// ── Reset Progress ───────────────────────────────────────────
function resetProgress() {
  if (!confirm('Reset all progress and notes? This cannot be undone.')) return;
  appState.userState = createDefaultUserState();
  saveUserState();
  closePanel();
  init();
}

// ── Overall Progress Render ──────────────────────────────────
function renderTopNav() {
  const allNodes = getAllNodes();
  const { pct, completed, total } = calcProgress(allNodes);

  return `
    <div class="flex items-center justify-between gap-4 flex-wrap">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
          </div>
          <div>
            <div class="text-sm font-bold text-white">${ROADMAP_DATA.meta.title}</div>
            <div class="text-xs text-gray-400">${ROADMAP_DATA.meta.subtitle}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-3 flex-1 max-w-xs">
        <div class="flex-1">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs text-gray-400">Overall Progress</span>
            <span id="overall-progress-label" class="text-xs text-gray-400">${completed}/${total}</span>
          </div>
          <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div id="overall-progress-bar" class="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500" style="width:${pct}%"></div>
          </div>
        </div>
        <span id="overall-progress-pct" class="text-sm font-bold text-white w-10 text-right">${pct}%</span>
      </div>
      <button onclick="resetProgress()" class="text-xs text-gray-600 hover:text-gray-400 transition-colors px-2 py-1 rounded border border-gray-700 hover:border-gray-600">Reset</button>
    </div>
  `;
}

// ── Keyboard Navigation ──────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && appState.selectedNodeId) closePanel();
});

// ── Init ─────────────────────────────────────────────────────
function init() {
  // Render nav
  document.getElementById('top-nav').innerHTML = renderTopNav();

  // Render all phases
  const roadmapContainer = document.getElementById('roadmap-container');
  roadmapContainer.innerHTML = ROADMAP_DATA.phases.map(renderPhaseSection).join('');
}

// Boot
document.addEventListener('DOMContentLoaded', init);
