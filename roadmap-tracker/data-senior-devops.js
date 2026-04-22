// ============================================================
// ROADMAP DATA — MLOps Engineering
// Node IDs prefixed with "do-" to avoid collision with the AI Engineering roadmap
// ============================================================

window.ROADMAP_DATA_DEVOPS = {
  id: "senior-devops-mlops",
  meta: {
    title: "MLOps Engineering",
    subtitle: "Platform & Production ML Roadmap",
    description: "Practical MLOps engineering roadmap covering Kubernetes, IaC/GitOps, observability/SRE, platform engineering, and production ML/LLM infrastructure. The first 30 days are narrowed to the skills current senior roles screen for most often.",
    version: "1.1"
  },
  phases: [
    // ========================================================
    // PHASE 1: 30-DAY ADVANCED PLAN
    // ========================================================
    {
      id: "do-phase-1",
      title: "Phase 1",
      subtitle: "30-Day Core Plan",
      description: "A focused, senior-level sprint across the four pillars companies are actually hiring for today: Kubernetes/platform engineering, IaC/GitOps delivery, observability/SRE, and production MLOps/LLMOps. Nice-to-haves and interview extension topics are pushed after the first 30 days.",
      granularity: "week",
      weeks: [
        // -------------------------------------------------
        // WEEK 1: Kubernetes & Cloud-Native Mastery
        // -------------------------------------------------
        {
          id: "do-week-1",
          title: "Week 1",
          subtitle: "Kubernetes & Cloud-Native Mastery",
          days: "Days 1–7",
          goal: "Understand Kubernetes internals deeply, master scheduling/security/networking, and know how to run K8s at scale cost-effectively",
          nodes: [
            {
              id: "do-w1-day1-2",
              type: "day",
              title: "Day 1–2: Kubernetes Architecture Deep Dive",
              shortTitle: "K8s Architecture",
              dayLabel: "Day 1–2",
              description: "Go beyond 'I can write a Deployment YAML.' Understand how the control plane, nodes, networking, and storage truly work — this is interview table-stakes for senior roles and foundation for everything that follows.",
              concepts: [
                "Control plane: kube-apiserver, etcd, kube-scheduler, kube-controller-manager, cloud-controller-manager",
                "Node components: kubelet, kube-proxy, container runtime (containerd, CRI-O)",
                "The reconciliation loop — the heart of Kubernetes",
                "etcd: the consistent key-value store, quorum, Raft consensus",
                "CNI (Container Network Interface): Calico, Cilium, Flannel — how pod networking actually works",
                "CRI (Container Runtime Interface) and CSI (Container Storage Interface)",
                "Why kubectl is just an HTTP client for the API server",
                "Watch API, informers, list/watch pattern"
              ],
              resources: [
                {
                  id: "kthw",
                  title: "Kubernetes the Hard Way",
                  url: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
                  type: "github",
                  cost: "free",
                  author: "Kelsey Hightower",
                  note: "The definitive way to understand K8s components — set up a cluster from scratch without automation"
                },
                {
                  id: "k8s-components-docs",
                  title: "Kubernetes Components (official docs)",
                  url: "https://kubernetes.io/docs/concepts/overview/components/",
                  type: "article",
                  cost: "free",
                  author: "Kubernetes"
                },
                {
                  id: "programming-k8s",
                  title: "Programming Kubernetes",
                  url: "https://www.oreilly.com/library/view/programming-kubernetes/9781492047094/",
                  type: "book",
                  cost: "paid",
                  author: "Michael Hausenblas & Stefan Schimanski",
                  note: "The internals book — informers, client-go, controller patterns"
                },
                {
                  id: "tgik",
                  title: "TGIK — VMware weekly K8s deep dives",
                  url: "https://www.youtube.com/playlist?list=PL7bmigfV0EqQzxcNpmcdTJ9eFRPBe-iZa",
                  type: "video",
                  cost: "free",
                  author: "Joe Beda & team",
                  note: "Long-form deep dives by a K8s co-creator"
                },
                {
                  id: "etcd-docs",
                  title: "etcd — Learning section",
                  url: "https://etcd.io/docs/latest/learning/",
                  type: "article",
                  cost: "free",
                  note: "Understand Raft, WAL, quorum — asked in every senior interview"
                }
              ],
              practicePrompt: "Draw the K8s architecture from memory — control plane, nodes, what flows through the API server when you `kubectl apply -f deploy.yaml`. Then bootstrap a cluster with kubeadm without any Helm charts or managed services."
            },
            {
              id: "do-w1-day3-4",
              type: "day",
              title: "Day 3–4: Advanced Workloads, Scheduling & Autoscaling",
              shortTitle: "Workloads & Scheduling",
              dayLabel: "Day 3–4",
              description: "Master the scheduling and autoscaling primitives that separate junior K8s users from senior operators. This is where cost, reliability, and performance are decided.",
              concepts: [
                "Pod scheduling: nodeAffinity, podAffinity/antiAffinity, taints & tolerations, topology spread constraints",
                "Workload types: Deployment, StatefulSet, DaemonSet, Job, CronJob — when to use which",
                "Resource requests/limits, QoS classes (Guaranteed/Burstable/BestEffort)",
                "Horizontal Pod Autoscaler (HPA) — CPU, memory, custom metrics via Prometheus Adapter",
                "Vertical Pod Autoscaler (VPA) — updater, recommender, admission controller",
                "KEDA — event-driven autoscaling from Kafka, SQS, Prometheus, cron",
                "Cluster Autoscaler vs Karpenter — node provisioning strategies",
                "Pod Disruption Budgets and graceful node drains"
              ],
              resources: [
                {
                  id: "k8s-patterns-book",
                  title: "Kubernetes Patterns",
                  url: "https://www.redhat.com/en/engage/kubernetes-containers-architecture-s-201910240918",
                  type: "book",
                  cost: "free",
                  author: "Bilgin Ibryam & Roland Huß",
                  note: "Free from Red Hat — the canonical pattern catalog"
                },
                {
                  id: "keda-docs",
                  title: "KEDA Documentation",
                  url: "https://keda.sh/docs/latest/",
                  type: "article",
                  cost: "free",
                  note: "Event-driven autoscaling for K8s"
                },
                {
                  id: "karpenter",
                  title: "Karpenter — Node Provisioning",
                  url: "https://karpenter.sh/",
                  type: "tool",
                  cost: "free",
                  author: "AWS / CNCF",
                  note: "Faster, more flexible than Cluster Autoscaler"
                },
                {
                  id: "k8s-resource-management",
                  title: "Managing Resources for Containers (K8s docs)",
                  url: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/",
                  type: "article",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-w1-day5",
              type: "day",
              title: "Day 5: Kubernetes Security, RBAC & Admission Control",
              shortTitle: "K8s Security & RBAC",
              dayLabel: "Day 5",
              description: "Lock down clusters properly. RBAC, Pod Security Standards, admission webhooks, and runtime security — the controls every senior must be able to design and audit.",
              concepts: [
                "RBAC: Roles, ClusterRoles, RoleBindings, ServiceAccounts, least-privilege design",
                "Pod Security Standards (Restricted / Baseline / Privileged) — replacement for PSPs",
                "Admission controllers: mutating vs validating webhooks, order of execution",
                "Policy engines: OPA/Gatekeeper vs Kyverno — tradeoffs",
                "Network Policies — default deny, namespace isolation, egress controls",
                "Secrets: External Secrets Operator, SOPS, sealed-secrets, CSI secret drivers",
                "Image security: Trivy/Grype scanning, cosign signing, admission-time enforcement",
                "Runtime security: Falco for anomaly detection, seccomp/AppArmor profiles"
              ],
              resources: [
                {
                  id: "cis-k8s",
                  title: "CIS Kubernetes Benchmark",
                  url: "https://www.cisecurity.org/benchmark/kubernetes",
                  type: "article",
                  cost: "free",
                  note: "The industry-standard hardening checklist"
                },
                {
                  id: "kubernetes-security-book",
                  title: "Kubernetes Security and Observability",
                  url: "https://www.oreilly.com/library/view/kubernetes-security-and/9781098107093/",
                  type: "book",
                  cost: "paid",
                  author: "Brendan Creane & Amit Gupta"
                },
                {
                  id: "kyverno",
                  title: "Kyverno — Policy Engine",
                  url: "https://kyverno.io/",
                  type: "tool",
                  cost: "free",
                  note: "YAML-native policies, simpler than OPA/Rego"
                },
                {
                  id: "gatekeeper",
                  title: "OPA Gatekeeper",
                  url: "https://open-policy-agent.github.io/gatekeeper/website/docs/",
                  type: "tool",
                  cost: "free",
                  note: "Rego-based policies, industry standard"
                },
                {
                  id: "falco",
                  title: "Falco — Runtime Security",
                  url: "https://falco.org/",
                  type: "tool",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "external-secrets",
                  title: "External Secrets Operator",
                  url: "https://external-secrets.io/",
                  type: "tool",
                  cost: "free",
                  note: "Sync secrets from Vault, AWS SM, GCP SM into K8s"
                }
              ]
            },
            {
              id: "do-w1-day6",
              type: "day",
              title: "Day 6: Service Networking, Ingress & Gateway API",
              shortTitle: "Networking & Gateway API",
              dayLabel: "Day 6",
              description: "Current senior DevOps and platform roles care heavily about production networking: ingress, service exposure, policy boundaries, and modern traffic control. Gateway API is increasingly replacing annotation-heavy ingress patterns and is worth learning before deep operator work.",
              concepts: [
                "Service types: ClusterIP, NodePort, LoadBalancer, ExternalName — how traffic actually enters the cluster",
                "Ingress vs Gateway API — why Gateway API is the more expressive long-term direction",
                "GatewayClass, Gateway, HTTPRoute, TLSRoute — the core Gateway API mental model",
                "North-south vs east-west traffic, ingress controllers, cloud load balancers",
                "DNS, TLS termination, cert-manager, external-dns, and operational failure modes",
                "How service networking choices affect cost, resilience, and platform self-service",
                "When you still need a service mesh and when Gateway API is enough"
              ],
              resources: [
                {
                  id: "gateway-api-docs",
                  title: "Gateway API",
                  url: "https://kubernetes.io/docs/concepts/services-networking/gateway/",
                  type: "article",
                  cost: "free",
                  author: "Kubernetes",
                  note: "Current Kubernetes direction for service networking and traffic policy"
                },
                {
                  id: "gateway-api-blog",
                  title: "Gateway API 1.4: New Features",
                  url: "https://kubernetes.io/blog/2025/11/06/gateway-api-v1-4/",
                  type: "article",
                  cost: "free",
                  author: "Kubernetes",
                  note: "Good signal that Gateway API is still actively evolving and worth learning"
                },
                {
                  id: "cert-manager-docs",
                  title: "cert-manager Documentation",
                  url: "https://cert-manager.io/docs/",
                  type: "article",
                  cost: "free",
                  note: "TLS automation is a practical must-have for real clusters"
                },
                {
                  id: "external-dns-docs",
                  title: "ExternalDNS Documentation",
                  url: "https://kubernetes-sigs.github.io/external-dns/latest/",
                  type: "article",
                  cost: "free",
                  note: "Useful for DNS automation in production clusters"
                }
              ]
            },
            {
              id: "do-w1-day7",
              type: "day",
              title: "Day 7: Cost Optimization, Multi-cluster & FinOps",
              shortTitle: "Cost & Multi-cluster",
              dayLabel: "Day 7",
              description: "Senior DevOps own cloud spend. Master node-level cost optimization, multi-cluster strategies, and the FinOps practices that make companies keep you.",
              concepts: [
                "Right-sizing: VPA recommendations, Goldilocks, actual vs requested resources",
                "Spot/preemptible instances — interruption handling, diversification strategies",
                "Karpenter consolidation, Cluster Autoscaler — picking the cheapest fit",
                "KubeCost & OpenCost — per-namespace, per-deployment cost attribution",
                "Multi-cluster patterns: hub-and-spoke, mesh, federation",
                "Cluster API — K8s-native cluster lifecycle management",
                "Karmada / Open Cluster Management for multi-cluster workload scheduling",
                "FinOps framework and showback/chargeback models"
              ],
              resources: [
                {
                  id: "opencost",
                  title: "OpenCost — Open-source cost monitoring",
                  url: "https://www.opencost.io/",
                  type: "tool",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "kubecost",
                  title: "KubeCost",
                  url: "https://www.kubecost.com/",
                  type: "tool",
                  cost: "free-tier",
                  note: "Commercial OpenCost distribution with more features"
                },
                {
                  id: "cluster-api",
                  title: "Cluster API (CAPI)",
                  url: "https://cluster-api.sigs.k8s.io/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "finops-foundation",
                  title: "FinOps Foundation — Framework",
                  url: "https://www.finops.org/framework/",
                  type: "article",
                  cost: "free",
                  note: "The cloud financial management discipline"
                }
              ]
            },
            {
              id: "do-w1-project1",
              type: "project",
              title: "Project #1 — Production-Grade Kubernetes Platform",
              shortTitle: "Production K8s Platform",
              dayLabel: "Days 1–7",
              isProject: true,
              projectNumber: 1,
              description: "Build a reference multi-tenant Kubernetes platform — the kind senior engineers design in their first 90 days at a new company. This becomes your portfolio anchor piece.",
              concepts: [
                "Multi-node cluster (kind / k3d / real cloud) with ingress, cert-manager, external-dns",
                "Karpenter for node autoscaling + spot instances",
                "RBAC per namespace with ServiceAccount tokens federated to cloud IAM (IRSA/Workload Identity)",
                "Kyverno or Gatekeeper policies enforcing image signing, resource limits, Pod Security",
                "Prometheus Operator + Grafana + Loki observability stack",
                "KubeCost for cost visibility",
                "ArgoCD managing everything via GitOps (see Week 2)",
                "README with architecture diagram and trade-off decisions"
              ],
              resources: []
            }
          ]
        },
        // -------------------------------------------------
        // WEEK 2: IaC, GitOps & Platform Engineering
        // -------------------------------------------------
        {
          id: "do-week-2",
          title: "Week 2",
          subtitle: "IaC, GitOps & Platform Engineering",
          days: "Days 8–14",
          goal: "Master advanced Infrastructure as Code, GitOps delivery, and the Platform Engineering discipline that underpins every modern DevOps org",
          nodes: [
            {
              id: "do-w2-day8-9",
              type: "day",
              title: "Day 8–9: Advanced Terraform & IaC Patterns",
              shortTitle: "Advanced Terraform",
              dayLabel: "Day 8–9",
              description: "Move from 'I can write main.tf' to designing IaC at organizational scale — module libraries, remote state strategy, policy-as-code, and drift management.",
              concepts: [
                "Module composition, versioning, and a private module registry",
                "Remote state backends: S3+DynamoDB locking, Terraform Cloud, state encryption",
                "Terragrunt for DRY configurations across envs/accounts/regions",
                "Policy as code: OPA/Conftest, Sentinel, Checkov, tfsec",
                "terraform import & terraform state operations for legacy adoption",
                "Drift detection — driftctl, Terraform Cloud drift detection, scheduled plans",
                "Workspaces vs directory-per-env — tradeoffs",
                "Testing IaC: Terratest, native terraform test (HCL-based)"
              ],
              resources: [
                {
                  id: "terraform-up-running",
                  title: "Terraform: Up & Running (3rd Edition)",
                  url: "https://www.terraformupandrunning.com/",
                  type: "book",
                  cost: "paid",
                  author: "Yevgeniy Brikman",
                  note: "The definitive Terraform book"
                },
                {
                  id: "terragrunt",
                  title: "Terragrunt Documentation",
                  url: "https://terragrunt.gruntwork.io/docs/",
                  type: "article",
                  cost: "free",
                  author: "Gruntwork"
                },
                {
                  id: "checkov",
                  title: "Checkov — IaC security scanning",
                  url: "https://www.checkov.io/",
                  type: "tool",
                  cost: "free",
                  author: "Bridgecrew / Prisma"
                },
                {
                  id: "tfsec",
                  title: "tfsec — Static analysis for Terraform",
                  url: "https://github.com/aquasecurity/tfsec",
                  type: "github",
                  cost: "free"
                },
                {
                  id: "terratest",
                  title: "Terratest — Go-based IaC testing",
                  url: "https://terratest.gruntwork.io/",
                  type: "tool",
                  cost: "free",
                  author: "Gruntwork"
                }
              ]
            },
            {
              id: "do-w2-day10",
              type: "day",
              title: "Day 10: GitHub Actions, OIDC & Runner Strategy",
              shortTitle: "GitHub Actions & OIDC",
              dayLabel: "Day 10",
              description: "Modern senior platform roles are increasingly centered on GitHub Actions, OIDC federation, and secure release automation. This is higher-value in the first 30 days than surveying every IaC alternative.",
              concepts: [
                "GitHub Actions as CI/CD control plane: reusable workflows, matrices, protected environments",
                "OIDC federation to AWS, GCP, Azure, or Vault — eliminate long-lived deploy credentials",
                "Actions Runner Controller (ARC) — autoscaled self-hosted runners on Kubernetes",
                "Runner isolation, ephemeral runners, and supply-chain implications",
                "Artifact provenance, branch protection, and secure deployment approvals",
                "Where GitHub Actions fits relative to GitLab CI, Jenkins, and Argo Workflows"
              ],
              resources: [
                {
                  id: "github-actions-docs-devops",
                  title: "Understanding GitHub Actions",
                  url: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions",
                  type: "article",
                  cost: "free",
                  author: "GitHub"
                },
                {
                  id: "github-oidc-docs",
                  title: "Configuring OpenID Connect in Cloud Providers",
                  url: "https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-cloud-providers",
                  type: "article",
                  cost: "free",
                  author: "GitHub",
                  note: "A current must-have pattern for secure cloud deployments"
                },
                {
                  id: "github-arc-docs",
                  title: "Use Actions Runner Controller",
                  url: "https://docs.github.com/en/actions/how-tos/manage-runners/use-actions-runner-controller",
                  type: "article",
                  cost: "free",
                  author: "GitHub",
                  note: "Relevant for platform teams standardizing CI at scale on Kubernetes"
                }
              ]
            },
            {
              id: "do-w2-day11-12",
              type: "day",
              title: "Day 11–12: GitOps & Progressive Delivery",
              shortTitle: "GitOps & Progressive Delivery",
              dayLabel: "Day 11–12",
              description: "GitOps is the dominant delivery model for Kubernetes in 2026. Master ArgoCD/Flux patterns and progressive delivery with Argo Rollouts/Flagger.",
              concepts: [
                "GitOps principles — declarative, versioned, pulled, continuously reconciled (OpenGitOps)",
                "ArgoCD: Applications, AppProjects, ApplicationSets, app-of-apps pattern",
                "Sync waves, hooks, pruning strategies, self-healing",
                "Flux CD — GitOps Toolkit, Kustomize + Helm integration",
                "Progressive delivery: canary, blue-green, A/B testing",
                "Argo Rollouts — traffic shifting with Istio/SMI/Gateway API",
                "Flagger — automated canary analysis with Prometheus metrics",
                "Multi-cluster GitOps — pull model at scale"
              ],
              resources: [
                {
                  id: "opengitops",
                  title: "OpenGitOps Principles",
                  url: "https://opengitops.dev/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "argocd-docs",
                  title: "ArgoCD Documentation",
                  url: "https://argo-cd.readthedocs.io/en/stable/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "flux-docs",
                  title: "Flux CD Documentation",
                  url: "https://fluxcd.io/flux/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "argo-rollouts",
                  title: "Argo Rollouts",
                  url: "https://argoproj.github.io/argo-rollouts/",
                  type: "article",
                  cost: "free",
                  note: "Canary + blue-green for K8s"
                },
                {
                  id: "flagger",
                  title: "Flagger — Progressive Delivery Operator",
                  url: "https://flagger.app/",
                  type: "article",
                  cost: "free",
                  author: "Flux / CNCF"
                }
              ]
            },
            {
              id: "do-w2-day13",
              type: "day",
              title: "Day 13: CI/CD Advanced Patterns",
              shortTitle: "CI/CD Advanced",
              dayLabel: "Day 13",
              description: "Beyond basic pipelines — ephemeral environments, buildpack-based image creation, self-hosted runners, and CI security. Senior engineers shape the whole developer experience.",
              concepts: [
                "GitHub Actions advanced: matrix, reusable workflows, OIDC federation to AWS/GCP, self-hosted runners (ARC)",
                "GitLab CI, Jenkins X, Tekton, Argo Workflows — pros and cons",
                "Cloud Native Buildpacks (CNB) — reproducible images without Dockerfiles",
                "Multi-stage Docker builds, layer caching, BuildKit, distroless images",
                "Ephemeral preview environments per PR (vcluster, Okteto, GitHub Codespaces)",
                "CI security: signed commits, protected branches, hermetic builds, provenance",
                "CI observability: build metrics, flaky test detection"
              ],
              resources: [
                {
                  id: "buildpacks",
                  title: "Cloud Native Buildpacks",
                  url: "https://buildpacks.io/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "tekton",
                  title: "Tekton Pipelines",
                  url: "https://tekton.dev/docs/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "arc",
                  title: "Actions Runner Controller (ARC)",
                  url: "https://github.com/actions/actions-runner-controller",
                  type: "github",
                  cost: "free",
                  note: "Self-hosted GitHub runners on K8s"
                },
                {
                  id: "distroless",
                  title: "Distroless container images",
                  url: "https://github.com/GoogleContainerTools/distroless",
                  type: "github",
                  cost: "free",
                  author: "Google"
                },
                {
                  id: "vcluster",
                  title: "vcluster — Virtual K8s clusters",
                  url: "https://www.vcluster.com/",
                  type: "tool",
                  cost: "free-tier",
                  note: "Cheap ephemeral environments"
                }
              ]
            },
            {
              id: "do-w2-day14",
              type: "day",
              title: "Day 14: Platform Engineering & Internal Developer Platforms",
              shortTitle: "Platform Engineering & IDPs",
              dayLabel: "Day 14",
              description: "Platform Engineering is the fastest-growing DevOps discipline of 2026. Learn to build Internal Developer Platforms, golden paths, and treat your platform as a product.",
              concepts: [
                "Platform as a Product mindset — users, JTBD, paved roads",
                "Golden paths / paved roads — opinionated defaults that reduce cognitive load",
                "Team Topologies: stream-aligned, platform, enabling, complicated-subsystem teams",
                "Backstage — service catalog, software templates, TechDocs, plugins",
                "Port, Cortex, Humanitec — managed IDP platforms",
                "Developer experience (DX) metrics: SPACE, DORA",
                "Self-service infra via Crossplane + Backstage",
                "CNOE (Cloud Native Operational Excellence) reference patterns"
              ],
              resources: [
                {
                  id: "team-topologies",
                  title: "Team Topologies",
                  url: "https://teamtopologies.com/book",
                  type: "book",
                  cost: "paid",
                  author: "Matthew Skelton & Manuel Pais",
                  note: "Foundational reading for any platform team"
                },
                {
                  id: "platform-eng-org",
                  title: "platformengineering.org",
                  url: "https://platformengineering.org/",
                  type: "article",
                  cost: "free",
                  note: "Community hub, maturity model, newsletter"
                },
                {
                  id: "backstage",
                  title: "Backstage Documentation",
                  url: "https://backstage.io/docs/overview/what-is-backstage",
                  type: "article",
                  cost: "free",
                  author: "Spotify / CNCF"
                },
                {
                  id: "backstage-templates",
                  title: "Backstage Software Templates",
                  url: "https://backstage.io/docs/features/software-templates/",
                  type: "article",
                  cost: "free",
                  note: "Critical for building real golden paths and self-service workflows"
                },
                {
                  id: "cnoe",
                  title: "CNOE — Cloud Native Operational Excellence",
                  url: "https://cnoe.io/",
                  type: "article",
                  cost: "free",
                  note: "Reference IDP built on OSS by AWS/Nike/Autodesk/Twilio"
                },
                {
                  id: "space-framework",
                  title: "The SPACE Framework for Developer Productivity",
                  url: "https://queue.acm.org/detail.cfm?id=3454124",
                  type: "article",
                  cost: "free",
                  author: "Forsgren et al.",
                  note: "Why DORA alone isn't enough"
                }
              ]
            },
            {
              id: "do-w2-project2",
              type: "project",
              title: "Project #2 — Internal Developer Platform (IDP)",
              shortTitle: "Internal Developer Platform",
              dayLabel: "Days 8–14",
              isProject: true,
              projectNumber: 2,
              description: "Deploy a working IDP with Backstage, ArgoCD, Terraform modules and Crossplane — the exact setup senior platform engineers build in 2026.",
              concepts: [
                "Backstage with TechDocs, software templates, and catalog discovery",
                "Self-service 'spin up a new microservice' template that provisions: repo + pipeline + K8s namespace + monitoring",
                "ArgoCD syncing everything declared in Git",
                "Crossplane Compositions exposing 'Database', 'Bucket', 'Queue' as XRDs",
                "Terraform modules published to a private module registry",
                "Progressive delivery with Argo Rollouts built into the template",
                "Document the golden path and SLO commitments"
              ],
              resources: []
            }
          ]
        },
        // -------------------------------------------------
        // WEEK 3: Observability, Security & SRE
        // -------------------------------------------------
        {
          id: "do-week-3",
          title: "Week 3",
          subtitle: "Observability, Security & SRE",
          days: "Days 15–21",
          goal: "Become fluent in OpenTelemetry, Prometheus-at-scale, SRE practice, incident ownership, and supply-chain security — the reliability pillars current senior roles expect",
          nodes: [
            {
              id: "do-w3-day15-16",
              type: "day",
              title: "Day 15–16: Observability — Metrics, Logs, Traces & OpenTelemetry",
              shortTitle: "Observability & OTel",
              dayLabel: "Day 15–16",
              description: "The three pillars plus OpenTelemetry as the vendor-neutral standard. Understand cardinality limits, trace sampling, and how to scale Prometheus beyond a single instance.",
              concepts: [
                "Three pillars: metrics, logs, traces (plus profiling — the emerging fourth)",
                "OpenTelemetry — the standard: SDKs, OTLP protocol, Collector, auto-instrumentation",
                "Prometheus at scale: Thanos, Cortex, Mimir, VictoriaMetrics — federation patterns",
                "Log aggregation: Loki (grep-style, cheap), ELK (indexed, expensive), Vector for shipping",
                "Distributed tracing: Tempo, Jaeger, sampling strategies (head-based vs tail-based)",
                "Cardinality explosion — why labels kill Prometheus",
                "PromQL mastery: rate, histogram_quantile, aggregations, recording rules",
                "Grafana dashboards, alerting rules, Alertmanager routing"
              ],
              resources: [
                {
                  id: "observability-engineering",
                  title: "Observability Engineering (O'Reilly)",
                  url: "https://www.oreilly.com/library/view/observability-engineering/9781492076438/",
                  type: "book",
                  cost: "paid",
                  author: "Charity Majors, Liz Fong-Jones, George Miranda",
                  note: "The modern observability bible"
                },
                {
                  id: "otel-docs",
                  title: "OpenTelemetry Documentation",
                  url: "https://opentelemetry.io/docs/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "prometheus-docs",
                  title: "Prometheus Documentation",
                  url: "https://prometheus.io/docs/introduction/overview/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "robust-perception",
                  title: "Robust Perception Blog (Brian Brazil)",
                  url: "https://www.robustperception.io/blog/",
                  type: "article",
                  cost: "free",
                  note: "Prometheus co-creator's blog — deep PromQL content"
                },
                {
                  id: "honeycomb-blog",
                  title: "Honeycomb Blog",
                  url: "https://www.honeycomb.io/blog",
                  type: "article",
                  cost: "free",
                  author: "Charity Majors & team",
                  note: "High-cardinality observability done right"
                },
                {
                  id: "thanos-docs",
                  title: "Thanos — Long-term Prometheus",
                  url: "https://thanos.io/tip/thanos/quick-tutorial.md/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "otel-collector",
                  title: "OpenTelemetry Collector",
                  url: "https://opentelemetry.io/docs/collector/",
                  type: "article",
                  cost: "free",
                  author: "OpenTelemetry",
                  note: "The current vendor-neutral backbone for telemetry pipelines"
                }
              ]
            },
            {
              id: "do-w3-day17",
              type: "day",
              title: "Day 17: SRE Fundamentals — SLO, Error Budgets & Toil",
              shortTitle: "SRE Fundamentals",
              dayLabel: "Day 17",
              description: "Google invented SRE and published the playbook for free. Internalize SLI/SLO/SLA, error budgets, toil tracking, and the reliability-velocity tradeoff every senior must defend.",
              concepts: [
                "SLI (Service Level Indicator), SLO (Objective), SLA (Agreement) — precise definitions",
                "Error budgets — the math, the politics, budget burn-rate alerts",
                "Toil — the formal definition, tracking, and reduction",
                "The four golden signals: latency, traffic, errors, saturation",
                "RED method (Rate/Errors/Duration) and USE method (Utilization/Saturation/Errors)",
                "Incident command system: IC, SME, comms lead",
                "Blameless postmortems — the cultural prerequisite",
                "On-call health: rotation, paging policy, psychological safety"
              ],
              resources: [
                {
                  id: "sre-book",
                  title: "Site Reliability Engineering (Google SRE Book)",
                  url: "https://sre.google/sre-book/table-of-contents/",
                  type: "book",
                  cost: "free",
                  author: "Google",
                  note: "The original — free online"
                },
                {
                  id: "sre-workbook",
                  title: "The Site Reliability Workbook",
                  url: "https://sre.google/workbook/table-of-contents/",
                  type: "book",
                  cost: "free",
                  author: "Google",
                  note: "Practical exercises — free online"
                },
                {
                  id: "sre-ops",
                  title: "Building Secure and Reliable Systems",
                  url: "https://sre.google/books/building-secure-reliable-systems/",
                  type: "book",
                  cost: "free",
                  author: "Google",
                  note: "The security x SRE book — also free"
                },
                {
                  id: "slo-alerting",
                  title: "Implementing SLO-based alerting (Google Cloud)",
                  url: "https://sre.google/workbook/alerting-on-slos/",
                  type: "article",
                  cost: "free",
                  note: "The canonical guide to multi-window burn-rate alerts"
                }
              ]
            },
            {
              id: "do-w3-day18",
              type: "day",
              title: "Day 18: Incident Response, RCA & Postmortems",
              shortTitle: "Incident Response & RCA",
              dayLabel: "Day 18",
              description: "Current senior DevOps job descriptions repeatedly call out incident ownership, postmortems, RCA quality, and MTTR reduction. This belongs in the 30-day core before chaos specialization.",
              concepts: [
                "Incident roles: incident commander, operations lead, communications lead, subject-matter expert",
                "Detection → triage → mitigation → communication → recovery → follow-through",
                "Root cause analysis versus symptom explanation",
                "Write postmortems that produce concrete preventive work, not vague action items",
                "MTTR, recurrence rate, alert quality, and toil reduction as operational metrics",
                "How to lead incidents calmly across application, platform, and security boundaries"
              ],
              resources: [
                {
                  id: "sre-workbook-incident",
                  title: "The Site Reliability Workbook",
                  url: "https://sre.google/workbook/table-of-contents/",
                  type: "book",
                  cost: "free",
                  author: "Google",
                  note: "Use the incident response and postmortem chapters here"
                },
                {
                  id: "google-postmortem",
                  title: "Postmortem Culture: Learning from Failure",
                  url: "https://sre.google/sre-book/postmortem-culture/",
                  type: "article",
                  cost: "free",
                  author: "Google"
                }
              ]
            },
            {
              id: "do-w3-day19-20",
              type: "day",
              title: "Day 19–20: DevSecOps & Supply Chain Security",
              shortTitle: "DevSecOps & Supply Chain",
              dayLabel: "Day 19–20",
              description: "Supply chain attacks (SolarWinds, Log4j, 3CX) made this a board-level concern. Know SBOM, SLSA, Sigstore and zero-trust identity — the modern defense stack.",
              concepts: [
                "Software Bill of Materials (SBOM) — SPDX, CycloneDX formats",
                "SLSA framework — levels, attestations, provenance",
                "Sigstore: cosign (signing), rekor (transparency log), fulcio (ephemeral certs)",
                "Admission-time signature verification (Kyverno, Connaisseur)",
                "Dependency scanning: Trivy, Grype, Snyk, Dependabot, OSV Scanner",
                "Secrets management: HashiCorp Vault, SOPS, cloud KMS integration",
                "Zero-trust identity: SPIFFE/SPIRE for workload identity",
                "Policy as code for security: Conftest, OPA in CI",
                "Runtime security with Falco + custom rules"
              ],
              resources: [
                {
                  id: "slsa-dev",
                  title: "SLSA.dev — Supply-chain Levels for Software Artifacts",
                  url: "https://slsa.dev/",
                  type: "article",
                  cost: "free",
                  author: "OpenSSF"
                },
                {
                  id: "sigstore",
                  title: "Sigstore Documentation",
                  url: "https://docs.sigstore.dev/",
                  type: "article",
                  cost: "free",
                  author: "OpenSSF"
                },
                {
                  id: "vault-docs",
                  title: "HashiCorp Vault Documentation",
                  url: "https://developer.hashicorp.com/vault/docs",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "spiffe-spire",
                  title: "SPIFFE / SPIRE",
                  url: "https://spiffe.io/",
                  type: "article",
                  cost: "free",
                  author: "CNCF",
                  note: "Zero-trust workload identity"
                },
                {
                  id: "cncf-tag-security",
                  title: "CNCF TAG Security — Cloud Native Security Whitepapers",
                  url: "https://github.com/cncf/tag-security",
                  type: "github",
                  cost: "free"
                },
                {
                  id: "trivy",
                  title: "Trivy — All-in-one scanner",
                  url: "https://trivy.dev/",
                  type: "tool",
                  cost: "free",
                  author: "Aqua Security"
                }
              ]
            },
            {
              id: "do-w3-day21",
              type: "day",
              title: "Day 21: Platform Leadership, ADRs & Developer Enablement",
              shortTitle: "Leadership & Enablement",
              dayLabel: "Day 21",
              description: "Senior roles are not just deeper technical versions of mid-level roles. They also require clear technical writing, platform-as-a-product thinking, mentoring, and the ability to remove friction for other teams.",
              concepts: [
                "Architecture Decision Records (ADRs) and RFCs as senior engineering artifacts",
                "Platform as a product: user feedback loops, paved roads, and reducing cognitive load",
                "Cross-team collaboration and trade-off communication",
                "Mentoring and review standards that raise platform quality across teams",
                "How to prioritize work that reduces toil and accelerates delivery organization-wide"
              ],
              resources: [
                {
                  id: "space-framework-day21",
                  title: "The SPACE Framework for Developer Productivity",
                  url: "https://queue.acm.org/detail.cfm?id=3454124",
                  type: "article",
                  cost: "free",
                  author: "Forsgren et al."
                },
                {
                  id: "team-topologies-day21",
                  title: "Team Topologies",
                  url: "https://teamtopologies.com/book",
                  type: "book",
                  cost: "paid",
                  author: "Matthew Skelton & Manuel Pais",
                  note: "Useful for the human systems side of platform work"
                },
                {
                  id: "platform-engineering-org-day21",
                  title: "platformengineering.org",
                  url: "https://platformengineering.org/",
                  type: "article",
                  cost: "free",
                  note: "Current platform engineering community hub and maturity content"
                }
              ]
            },
            {
              id: "do-w3-project3",
              type: "project",
              title: "Project #3 — Zero-Trust, SLO-Driven Platform",
              shortTitle: "Zero-Trust Observable Platform",
              dayLabel: "Days 15–21",
              isProject: true,
              projectNumber: 3,
              description: "Layer on security + observability + reliability to your Week 1 platform. This is the kind of reference stack that gets you past senior interview loops.",
              concepts: [
                "Full OpenTelemetry stack: OTel Collector → Prometheus/Tempo/Loki → Grafana",
                "SLOs defined per service with multi-window burn-rate alerts",
                "Sigstore signing + Kyverno enforcement blocking unsigned images",
                "Vault for secrets with K8s auth method",
                "Cilium CNI with L7 network policies and Hubble dashboards",
                "Run structured incident drills and alert-quality reviews against your SLOs",
                "Falco runtime security alerts routed to Slack",
                "README with threat model and SLO error-budget policy"
              ],
              resources: []
            }
          ]
        },
        // -------------------------------------------------
        // WEEK 4: MLOps Deep Dive
        // -------------------------------------------------
        {
          id: "do-week-4",
          title: "Week 4",
          subtitle: "MLOps Deep Dive",
          days: "Days 22–30",
          goal: "Master the high-signal MLOps and LLMOps stack current senior roles ask for most: pipelines, registry/versioning, serving, monitoring, GPU utilization, and LLM infrastructure",
          nodes: [
            {
              id: "do-w4-day22",
              type: "day",
              title: "Day 22: MLOps Foundations & Maturity",
              shortTitle: "MLOps Foundations",
              dayLabel: "Day 22",
              description: "MLOps isn't just DevOps for ML. Data and models add new dimensions of drift, lineage, and governance. Understand the maturity model and what 'production ML' actually means.",
              concepts: [
                "Why MLOps ≠ DevOps: data, models, and code all change independently",
                "The full ML lifecycle: data → features → train → validate → deploy → monitor → retrain",
                "Google's MLOps maturity levels (0/1/2) — where most orgs actually are",
                "Training-serving skew — the #1 silent killer of ML systems",
                "Offline vs online, batch vs real-time, shadow vs canary for ML",
                "Model governance: reproducibility, auditability, approval workflows",
                "Hidden technical debt in ML systems (Sculley et al., NeurIPS 2015)"
              ],
              resources: [
                {
                  id: "ml-engineering-burkov",
                  title: "Machine Learning Engineering",
                  url: "http://www.mlebook.com/",
                  type: "book",
                  cost: "free",
                  author: "Andriy Burkov",
                  note: "Free to read online"
                },
                {
                  id: "designing-ml-systems",
                  title: "Designing Machine Learning Systems",
                  url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
                  type: "book",
                  cost: "paid",
                  author: "Chip Huyen",
                  note: "The definitive ML systems book for 2026"
                },
                {
                  id: "google-mlops-guide",
                  title: "Google — MLOps: Continuous delivery and automation pipelines in ML",
                  url: "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning",
                  type: "article",
                  cost: "free",
                  author: "Google Cloud"
                },
                {
                  id: "hidden-debt-paper",
                  title: "Hidden Technical Debt in Machine Learning Systems",
                  url: "https://papers.nips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html",
                  type: "article",
                  cost: "free",
                  author: "Sculley et al. (Google)",
                  note: "Seminal paper — cited in every senior MLOps interview"
                },
                {
                  id: "chip-mlops-blog",
                  title: "Chip Huyen's blog — MLOps articles",
                  url: "https://huyenchip.com/blog/",
                  type: "article",
                  cost: "free",
                  author: "Chip Huyen"
                }
              ]
            },
            {
              id: "do-w4-day23",
              type: "day",
              title: "Day 23: ML Pipelines & Orchestration",
              shortTitle: "ML Pipelines & Orchestration",
              dayLabel: "Day 23",
              description: "ML training and batch inference need orchestration. Know the landscape: Kubeflow (K8s-native heavy), Metaflow (opinionated, Netflix), Dagster/Prefect (modern Python), Airflow (still everywhere).",
              concepts: [
                "Kubeflow Pipelines — K8s-native, heavyweight, enterprise-ready",
                "Metaflow — Netflix's framework, great DX, AWS-native",
                "Dagster — software-defined assets, excellent observability",
                "Prefect — Airflow but modern, Python-first",
                "Airflow — still dominant in data engineering, DAG-based",
                "MLflow Projects vs full pipeline orchestrators",
                "Argo Workflows for K8s-native step-function-style pipelines",
                "DAG design, idempotency, retries, backfills"
              ],
              resources: [
                {
                  id: "kubeflow-pipelines",
                  title: "Kubeflow Pipelines Documentation",
                  url: "https://www.kubeflow.org/docs/components/pipelines/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "metaflow-docs",
                  title: "Metaflow Documentation",
                  url: "https://docs.metaflow.org/",
                  type: "article",
                  cost: "free",
                  author: "Netflix"
                },
                {
                  id: "dagster-docs",
                  title: "Dagster Documentation",
                  url: "https://docs.dagster.io/",
                  type: "article",
                  cost: "free-tier"
                },
                {
                  id: "prefect-docs",
                  title: "Prefect Documentation",
                  url: "https://docs.prefect.io/",
                  type: "article",
                  cost: "free-tier"
                },
                {
                  id: "argo-workflows",
                  title: "Argo Workflows",
                  url: "https://argo-workflows.readthedocs.io/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                }
              ]
            },
            {
              id: "do-w4-day24",
              type: "day",
              title: "Day 24: Model/Data Versioning, Validation & Promotion",
              shortTitle: "Versioning & Validation",
              dayLabel: "Day 24",
              description: "Current MLOps roles more consistently demand model versioning, validation gates, reproducibility, and promotion workflows than full feature-store depth. Keep feature stores as a later specialization unless your target companies are explicitly feature-heavy.",
              concepts: [
                "Data and model versioning: DVC, LakeFS, artifact stores, immutable releases",
                "Validation gates before promotion: offline metrics, regression checks, schema/data quality checks",
                "Reproducibility across code, data, environment, model artifacts, and seeds",
                "Promotion workflows: staging → shadow → canary → production",
                "Training-serving skew and data contracts without overcommitting to feature-store complexity"
              ],
              resources: [
                {
                  id: "dvc-docs",
                  title: "DVC — Data Version Control",
                  url: "https://dvc.org/doc",
                  type: "tool",
                  cost: "free"
                },
                {
                  id: "lakefs",
                  title: "LakeFS — Git-like data lakes",
                  url: "https://docs.lakefs.io/",
                  type: "tool",
                  cost: "free-tier"
                },
                {
                  id: "evidently-intro",
                  title: "Evidently Documentation",
                  url: "https://docs.evidentlyai.com/introduction",
                  type: "article",
                  cost: "free",
                  note: "Useful for validation and monitoring workflows before and after deployment"
                }
              ]
            },
            {
              id: "do-w4-day25",
              type: "day",
              title: "Day 25: Model Registry, Experiment Tracking & Lineage",
              shortTitle: "Registry & Tracking",
              dayLabel: "Day 25",
              description: "Without a model registry, you can't answer 'what's in prod?' or 'can we reproduce this?' These are compliance and debugging essentials — and interview favorites.",
              concepts: [
                "Model registry — versioned, staged (dev/staging/prod), with approvals",
                "MLflow Tracking + Model Registry — the open-source workhorse",
                "Weights & Biases — tracking + viz, hosted",
                "Neptune, Comet — tracking alternatives",
                "Model cards — documentation standard for responsible AI",
                "Lineage: data → features → training run → model → deployment",
                "Artifact stores: S3/GCS + metadata DB",
                "Reproducibility: code + data + env + seed pinning"
              ],
              resources: [
                {
                  id: "mlflow-docs",
                  title: "MLflow Documentation",
                  url: "https://mlflow.org/docs/latest/index.html",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "wandb-docs",
                  title: "Weights & Biases Documentation",
                  url: "https://docs.wandb.ai/",
                  type: "article",
                  cost: "free-tier"
                },
                {
                  id: "model-cards-paper",
                  title: "Model Cards for Model Reporting (Mitchell et al.)",
                  url: "https://arxiv.org/abs/1810.03993",
                  type: "article",
                  cost: "free",
                  note: "The responsible AI documentation standard"
                },
                {
                  id: "neptune-ai",
                  title: "neptune.ai — Experiment tracking",
                  url: "https://docs.neptune.ai/",
                  type: "article",
                  cost: "free-tier"
                }
              ]
            },
            {
              id: "do-w4-day26-27",
              type: "day",
              title: "Day 26–27: Model Serving at Scale",
              shortTitle: "Model Serving at Scale",
              dayLabel: "Day 26–27",
              description: "Serving production ML on Kubernetes — the area where DevOps skills most directly apply. KServe, Triton, Ray Serve, BentoML, and the GPU scheduling patterns that make it work.",
              concepts: [
                "KServe (formerly KFServing) — K8s-native serverless inference",
                "Seldon Core — advanced deployment graphs, explainers",
                "BentoML — Python-first, framework-agnostic",
                "Ray Serve — for heterogeneous, multi-model pipelines",
                "NVIDIA Triton Inference Server — highest throughput, multi-framework",
                "Model optimization: ONNX Runtime, TensorRT, quantization (INT8/FP16)",
                "GPU scheduling on K8s: NVIDIA GPU Operator, MIG, time-slicing, fractional GPUs",
                "Batching strategies: dynamic batching, continuous batching (vLLM)",
                "Cold starts, model caching, model-per-replica vs shared"
              ],
              resources: [
                {
                  id: "kserve-docs",
                  title: "KServe Documentation",
                  url: "https://kserve.github.io/website/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "seldon-core",
                  title: "Seldon Core Documentation",
                  url: "https://docs.seldon.io/projects/seldon-core/en/latest/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "bentoml-docs",
                  title: "BentoML Documentation",
                  url: "https://docs.bentoml.com/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "triton-docs",
                  title: "NVIDIA Triton Inference Server",
                  url: "https://docs.nvidia.com/deeplearning/triton-inference-server/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "ray-serve",
                  title: "Ray Serve Documentation",
                  url: "https://docs.ray.io/en/latest/serve/index.html",
                  type: "article",
                  cost: "free",
                  author: "Anyscale"
                },
                {
                  id: "nvidia-gpu-operator",
                  title: "NVIDIA GPU Operator",
                  url: "https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/overview.html",
                  type: "article",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-w4-day28",
              type: "day",
              title: "Day 28: Model Monitoring & Drift Detection",
              shortTitle: "Model Monitoring & Drift",
              dayLabel: "Day 28",
              description: "Prod models degrade silently. You must detect data drift, concept drift, and performance regression — and have playbooks for retraining.",
              concepts: [
                "Data drift: input distribution changes (KS test, PSI, Chi-square)",
                "Concept drift: relationship between inputs and outputs changes",
                "Prediction drift: output distribution shifts",
                "Ground-truth lag — when you don't know performance for days/weeks",
                "Evidently, Arize, WhyLabs, Fiddler, Aporia — the monitoring landscape",
                "Shadow mode deployments — compare new model to old silently",
                "Champion/challenger and A/B testing for ML",
                "Automated retraining triggers — drift-based vs schedule-based"
              ],
              resources: [
                {
                  id: "evidently-docs",
                  title: "Evidently AI — Open-source ML monitoring",
                  url: "https://docs.evidentlyai.com/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "arize-blog",
                  title: "Arize AI Blog — ML Observability",
                  url: "https://arize.com/blog/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "whylabs-docs",
                  title: "WhyLabs — whylogs open-source",
                  url: "https://docs.whylabs.ai/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "aporia-blog",
                  title: "Aporia — ML Observability blog",
                  url: "https://www.aporia.com/blog/",
                  type: "article",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-w4-day29",
              type: "day",
              title: "Day 29: LLMOps in Production",
              shortTitle: "LLMOps in Production",
              dayLabel: "Day 29",
              description: "The hottest subfield. GPU infrastructure, high-throughput serving, semantic caching, cost tracking, and model gateways are now common asks in senior ML platform roles.",
              concepts: [
                "GPU infrastructure: A100/H100/L4/L40S selection, spot vs reserved",
                "vLLM — continuous batching, PagedAttention, the production default",
                "TGI (Text Generation Inference) — HuggingFace's server",
                "SGLang — increasingly relevant for high-performance LLM and VLM serving",
                "TensorRT-LLM — highest throughput via NVIDIA optimization",
                "Semantic caching (GPTCache, Redis) — huge cost wins for chat traffic",
                "Prompt versioning, A/B testing prompts in prod",
                "Multi-tenancy: per-tenant rate limits, quotas, cost tracking",
                "Fine-tuning infra: QLoRA training clusters, Unsloth, Axolotl",
                "LLM gateway pattern: Portkey, LiteLLM, Helicone"
              ],
              resources: [
                {
                  id: "vllm-docs",
                  title: "vLLM Documentation",
                  url: "https://docs.vllm.ai/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "tgi",
                  title: "Text Generation Inference (TGI)",
                  url: "https://huggingface.co/docs/text-generation-inference/",
                  type: "article",
                  cost: "free",
                  author: "HuggingFace"
                },
                {
                  id: "sglang-docs",
                  title: "SGLang Documentation",
                  url: "https://docs.sglang.ai/",
                  type: "article",
                  cost: "free",
                  note: "Shows up increasingly in LLM infrastructure job requirements"
                },
                {
                  id: "tensorrt-llm",
                  title: "TensorRT-LLM",
                  url: "https://github.com/NVIDIA/TensorRT-LLM",
                  type: "github",
                  cost: "free",
                  author: "NVIDIA"
                },
                {
                  id: "anyscale-blog",
                  title: "Anyscale Blog — Ray + LLM infra",
                  url: "https://www.anyscale.com/blog",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "litellm",
                  title: "LiteLLM — LLM gateway & proxy",
                  url: "https://docs.litellm.ai/",
                  type: "tool",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-w4-project4",
              type: "project",
              title: "Project #4 — End-to-End MLOps Platform",
              shortTitle: "End-to-End MLOps Platform",
              dayLabel: "Days 22–29",
              isProject: true,
              projectNumber: 4,
              description: "Capstone: a full MLOps platform on top of Weeks 1–3. This is the portfolio project senior MLOps candidates are asked to walk through in every onsite.",
              concepts: [
                "Data ingestion pipeline (Airflow/Dagster/Argo) with versioned datasets and validation checks",
                "Training pipeline (Kubeflow/Metaflow) with MLflow tracking + model registry",
                "Model promotion workflow: staging → shadow → production via ArgoCD",
                "KServe (or Triton) serving with GPU autoscaling via Karpenter",
                "Evidently drift monitoring with alerts tied to retraining triggers",
                "Cost tracking per model/tenant via OpenCost labels",
                "Full OTel telemetry + SLOs (p99 latency, error rate, drift score)",
                "Write a production runbook and architecture doc"
              ],
              resources: []
            }
          ]
        },
        // -------------------------------------------------
        // WEEK 5: Optional Post-30-Day Interview Readiness
        // -------------------------------------------------
        {
          id: "do-week-5",
          title: "Week 5",
          subtitle: "Optional Interview Extension",
          days: "After Day 30",
          goal: "Optional extension after the 30-day core: close interview-critical gaps in Linux troubleshooting, live-coding, system design, and behavioral/negotiation prep.",
          nodes: [
            {
              id: "do-w5-day30",
              type: "day",
              title: "Day 30: Linux Internals, Performance & Troubleshooting",
              shortTitle: "Linux Troubleshooting",
              dayLabel: "Day 30",
              description: "Almost every senior SRE/DevOps loop has a 'the service is slow, debug it live' round. You need fluency with the Linux performance toolkit AND a mental framework (USE/RED/TSA) that tells you which tool to reach for first. This day drills both.",
              concepts: [
                "Methodologies: USE (Utilization/Saturation/Errors) for resources, RED (Rate/Errors/Duration) for services, TSA (Thread State Analysis) for process-level",
                "Brendan Gregg's 60-second performance checklist — uptime, dmesg, vmstat, mpstat, pidstat, iostat, free, sar, top in order",
                "CPU tools: top, htop, mpstat, pidstat, perf top, perf record/report, flamegraphs",
                "Memory tools: free, vmstat, pmap, smem, /proc/meminfo, OOM killer logs, THP (transparent huge pages) gotchas, swappiness",
                "I/O tools: iostat -xz 1, iotop, biosnoop (eBPF), fio for benchmarking, understanding disk queue depth",
                "Network tools: ss -tunap (modern netstat), tcpdump filters, conntrack -L, iptables -L vs nftables, mtr, dig, openssl s_client",
                "Tracing: strace -p, ltrace, perf trace, bpftrace one-liners (every senior should know 10 cold)",
                "Container internals: Linux namespaces (PID, net, mnt, ipc, uts, user, cgroup), cgroups v2, how runc actually works",
                "systemd deep dive: units, targets, timers, journalctl filters, systemctl edit, drop-ins, slices",
                "File systems: ext4 vs XFS vs ZFS tradeoffs, page cache, dirty_ratio, fsync semantics, rotational vs SSD considerations",
                "Drill scenario: 'p99 latency spiked 10x, the service is hot, you have 10 minutes' — run through which commands you type first and why"
              ],
              practicePrompt: "Set a timer for 10 minutes. Given only SSH access to a VM, figure out why a Go service is eating 95% CPU. Script yourself a runbook: which tools do you run in what order, and what do you look for in each output?",
              resources: [
                {
                  id: "systems-performance-gregg",
                  title: "Systems Performance (2nd Edition)",
                  url: "https://www.brendangregg.com/systems-performance-2nd-edition-book.html",
                  type: "book",
                  cost: "paid",
                  author: "Brendan Gregg",
                  note: "The definitive book. Read chapters 2, 6, 7, 8, 10 minimum"
                },
                {
                  id: "bpf-performance-tools",
                  title: "BPF Performance Tools",
                  url: "http://www.brendangregg.com/bpf-performance-tools-book.html",
                  type: "book",
                  cost: "paid",
                  author: "Brendan Gregg"
                },
                {
                  id: "gregg-blog",
                  title: "Brendan Gregg's blog + Linux performance tools map",
                  url: "https://www.brendangregg.com/linuxperf.html",
                  type: "article",
                  cost: "free",
                  note: "The famous 'Linux Performance Observability Tools' diagram lives here"
                },
                {
                  id: "netflix-60s",
                  title: "Linux Performance Analysis in 60 seconds (Netflix)",
                  url: "https://netflixtechblog.com/linux-performance-analysis-in-60-000-milliseconds-accc10403c55",
                  type: "article",
                  cost: "free",
                  author: "Brendan Gregg / Netflix",
                  note: "Memorize this checklist verbatim"
                },
                {
                  id: "tlpi",
                  title: "The Linux Programming Interface",
                  url: "https://man7.org/tlpi/",
                  type: "book",
                  cost: "paid",
                  author: "Michael Kerrisk",
                  note: "Syscall-level reference — the internals bible"
                },
                {
                  id: "julia-evans",
                  title: "Julia Evans' zines (debugging, Linux, networking)",
                  url: "https://wizardzines.com/",
                  type: "article",
                  cost: "paid",
                  author: "Julia Evans",
                  note: "Approachable PDFs; many are free on the blog"
                },
                {
                  id: "bpftrace-onliners",
                  title: "bpftrace One-Liners",
                  url: "https://github.com/iovisor/bpftrace/blob/master/docs/tutorial_one_liners.md",
                  type: "github",
                  cost: "free",
                  note: "Learn 10 of these cold"
                },
                {
                  id: "container-internals",
                  title: "Container Internals Deep Dive (Ivan Velichko)",
                  url: "https://iximiuz.com/en/series/container-networking-from-scratch/",
                  type: "article",
                  cost: "free",
                  note: "How namespaces + cgroups + runc actually compose a container"
                },
                {
                  id: "flamegraph",
                  title: "Flamegraphs — Brendan Gregg",
                  url: "https://www.brendangregg.com/flamegraphs.html",
                  type: "article",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-w5-day31",
              type: "day",
              title: "Day 31: Scripting Mastery — Bash, Python & Go",
              shortTitle: "Scripting Drills",
              dayLabel: "Day 31",
              description: "Live-coding rounds at senior DevOps/MLOps interviews test whether you can write production-quality scripts under time pressure. This is where candidates who 'know about' tools fail; muscle memory wins. Drill actual problems, not tutorials.",
              concepts: [
                "Bash: strict mode (set -euo pipefail), trap handlers for cleanup on signals, proper quoting, IFS handling",
                "Bash: parameter expansion (${var:-default}, ${var:?error}, ${var#prefix}, ${var%suffix})",
                "Bash: arrays (indexed + associative), process substitution, here-strings, mktemp, flock for locking",
                "Bash: awk for aggregations (not just column printing), sed with safe escaping, xargs -P for parallelism",
                "Python: argparse/click/typer for CLIs, pathlib over os.path, subprocess with timeout+check_output",
                "Python: concurrent.futures for parallel API calls, asyncio (async def / await / gather) for I/O-bound work",
                "Python: boto3 paginators, error handling (ClientError), exponential backoff with tenacity",
                "Python: structured logging (not print), type hints + mypy strict, pytest + moto/freezegun/responses",
                "Python: packaging with pyproject.toml, uv or poetry for dependency management",
                "Go: structure (packages, exports), goroutines/channels/select, sync.WaitGroup, sync.Mutex basics",
                "Go: error wrapping (%w, errors.Is/As), context for cancellation + timeouts, HTTP client timeouts (the stdlib trap)",
                "Go: reading a K8s controller — Reconcile pattern, client-go, informers; enough to debug an operator",
                "Go: building a small CLI with Cobra, table-driven tests, go test -race",
                "The canonical interview prompts: parse log stream → aggregate errors by service; poll an API, retry with backoff, emit Prometheus metrics; watch K8s pods and alert when any enters CrashLoopBackOff"
              ],
              practicePrompt: "Pick ONE problem and implement it three times — once in Bash, once in Python, once in Go: tail a JSON-lines log file, maintain a rolling 1-minute error rate per service, and POST a Slack alert when it crosses 1%. Each version must handle SIGINT cleanly and unit-test the rate calculation. Time yourself — target: Bash 25 min, Python 35 min, Go 45 min.",
              resources: [
                {
                  id: "pure-bash-bible",
                  title: "Pure Bash Bible",
                  url: "https://github.com/dylanaraps/pure-bash-bible",
                  type: "github",
                  cost: "free",
                  note: "37K stars — pure-Bash alternatives to external tools"
                },
                {
                  id: "google-bash-style",
                  title: "Google's Shell Style Guide",
                  url: "https://google.github.io/styleguide/shellguide.html",
                  type: "article",
                  cost: "free",
                  author: "Google"
                },
                {
                  id: "shellcheck",
                  title: "ShellCheck — static analysis for shell scripts",
                  url: "https://www.shellcheck.net/",
                  type: "tool",
                  cost: "free",
                  note: "Run it on every script you write. Always."
                },
                {
                  id: "defensive-bash",
                  title: "Defensive BASH Programming",
                  url: "https://frippertronics.com/posts/defensive_bash_programming.html",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "fluent-python",
                  title: "Fluent Python (2nd Ed)",
                  url: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/",
                  type: "book",
                  cost: "paid",
                  author: "Luciano Ramalho",
                  note: "The book that turns good Python into senior Python"
                },
                {
                  id: "python-concurrency",
                  title: "Python Concurrency with asyncio",
                  url: "https://www.manning.com/books/python-concurrency-with-asyncio",
                  type: "book",
                  cost: "paid",
                  author: "Matthew Fowler"
                },
                {
                  id: "real-python",
                  title: "Real Python — CLI & asyncio tutorials",
                  url: "https://realpython.com/",
                  type: "article",
                  cost: "free-tier",
                  note: "Highest-quality free Python articles"
                },
                {
                  id: "gopl-book",
                  title: "The Go Programming Language",
                  url: "https://www.gopl.io/",
                  type: "book",
                  cost: "paid",
                  author: "Donovan & Kernighan",
                  note: "The canonical Go book"
                },
                {
                  id: "learning-go",
                  title: "Learning Go (2nd Ed)",
                  url: "https://www.oreilly.com/library/view/learning-go-2nd/9781098139285/",
                  type: "book",
                  cost: "paid",
                  author: "Jon Bodner",
                  note: "Modernized for 1.21+ with generics"
                },
                {
                  id: "go-by-example",
                  title: "Go by Example",
                  url: "https://gobyexample.com/",
                  type: "article",
                  cost: "free",
                  note: "Fastest way to get syntax reps"
                },
                {
                  id: "sample-controller-go",
                  title: "Kubernetes sample-controller (read it)",
                  url: "https://github.com/kubernetes/sample-controller",
                  type: "github",
                  cost: "free",
                  note: "Read 'controller.go' carefully — it teaches the reconcile pattern"
                },
                {
                  id: "exercism",
                  title: "Exercism — Bash, Python, Go tracks",
                  url: "https://exercism.org/",
                  type: "course",
                  cost: "free",
                  note: "Daily reps with mentor feedback"
                }
              ]
            },
            {
              id: "do-w5-day32",
              type: "day",
              title: "Day 32: System Design — Platform & DevOps Prompts",
              shortTitle: "System Design (Platform)",
              dayLabel: "Day 32",
              description: "You will face a 45-minute whiteboard system design round at every senior+ loop. These are the 8 canonical DevOps/Platform prompts. Prepare all 8 at a 'can talk through for 45 min' depth. The framework matters as much as the content.",
              concepts: [
                "The 45-minute framework: (1) Clarify — functional + non-functional reqs (2) Capacity estimate — one back-of-envelope calculation out loud (3) High-level diagram: 5-7 boxes with arrows (4) Deep-dive on 2 components (interviewer picks) (5) 2-3 explicit tradeoffs (6) Failure modes + monitoring",
                "Prompt 1: Multi-tenant CI/CD platform for 500 services — queue sharding, runner pools (ephemeral vs persistent), secrets isolation, artifact caching, per-team quotas, cost attribution",
                "Prompt 2: Multi-region HA Kubernetes deployment — active-active vs active-passive, data replication (RPO/RTO), DNS failover (Route53 health checks, GSLB), control plane per region, stateful workload patterns",
                "Prompt 3: Log aggregation pipeline handling 1M events/sec — collection (fluentbit/Vector), buffering (Kafka), parsing, hot/warm/cold storage (Loki/OpenSearch/S3+Athena), query SLOs, cost controls",
                "Prompt 4: Prometheus-at-scale metrics platform — sharded scrape, remote write, long-term storage (Thanos/Mimir), cardinality control, downsampling, federated queries",
                "Prompt 5: Centralized secrets management — Vault topology, unseal strategy, auth methods (K8s SA, OIDC), dynamic secrets vs static, rotation, audit to SIEM, break-glass",
                "Prompt 6: Incident management + on-call platform (PagerDuty-like) — alert routing, escalation ladders, on-call schedules, paging fatigue tracking, postmortem workflow",
                "Prompt 7: Feature flag service at 100K QPS — evaluation engine, targeting rules, sticky-user vs per-request consistency, client SDK design, kill-switches, audit trail",
                "Prompt 8: Rate limiter for a multi-tenant API gateway — algorithm tradeoffs (token bucket vs sliding window), Redis vs local+sync, fairness, burst handling, quota per tenant",
                "Back-of-envelope numbers every senior must know cold: ~100K req/s is 'big', 1 KB avg message, disk seek ~10ms, SSD read ~100μs, RAM read ~100ns, 1 Gbps = 125 MB/s, cross-region RTT ~60-150ms",
                "Red flags to avoid: jumping to diagram before clarifying, naming tools without justifying, ignoring cost, forgetting to mention monitoring/alerting"
              ],
              practicePrompt: "Pick 2 prompts from the list and do a 45-min whiteboard session for each (use excalidraw.com). Record yourself on video. Play it back — where did you hand-wave? Where were you too slow? Redo weak sections.",
              resources: [
                {
                  id: "sys-design-vol1",
                  title: "System Design Interview Volume 1",
                  url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF",
                  type: "book",
                  cost: "paid",
                  author: "Alex Xu",
                  note: "The canonical book for ALL system design interviews"
                },
                {
                  id: "sys-design-vol2",
                  title: "System Design Interview Volume 2",
                  url: "https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119",
                  type: "book",
                  cost: "paid",
                  author: "Alex Xu",
                  note: "Advanced — distributed systems, payment systems, feed"
                },
                {
                  id: "bytebytego-newsletter",
                  title: "ByteByteGo Newsletter",
                  url: "https://blog.bytebytego.com/",
                  type: "article",
                  cost: "free-tier",
                  author: "Alex Xu"
                },
                {
                  id: "system-design-primer",
                  title: "The System Design Primer (250K stars)",
                  url: "https://github.com/donnemartin/system-design-primer",
                  type: "github",
                  cost: "free",
                  note: "Canonical free resource, covers all fundamentals"
                },
                {
                  id: "high-scalability",
                  title: "High Scalability blog — real case studies",
                  url: "http://highscalability.com/",
                  type: "article",
                  cost: "free",
                  note: "How Uber/Netflix/Stripe/etc actually built their systems"
                },
                {
                  id: "uber-eng",
                  title: "Uber Engineering Blog",
                  url: "https://www.uber.com/blog/engineering/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "netflix-tech",
                  title: "Netflix Tech Blog",
                  url: "https://netflixtechblog.com/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "stripe-eng",
                  title: "Stripe Engineering Blog",
                  url: "https://stripe.com/blog/engineering",
                  type: "article",
                  cost: "free",
                  note: "Exceptional technical writing — reliability posts are gold"
                },
                {
                  id: "aosa",
                  title: "The Architecture of Open Source Applications",
                  url: "https://aosabook.org/",
                  type: "book",
                  cost: "free",
                  note: "Free book explaining 25+ real systems (nginx, Mercurial, etc.)"
                },
                {
                  id: "excalidraw",
                  title: "Excalidraw — the whiteboard interviewers use",
                  url: "https://excalidraw.com/",
                  type: "tool",
                  cost: "free",
                  note: "Practice diagramming here, not Miro"
                },
                {
                  id: "hired-in-tech",
                  title: "Hired In Tech — System Design Course",
                  url: "https://www.hiredintech.com/system-design",
                  type: "course",
                  cost: "free",
                  note: "The RESHADED framework explained clearly"
                }
              ]
            },
            {
              id: "do-w5-day33",
              type: "day",
              title: "Day 33: System Design — MLOps & ML Systems Prompts",
              shortTitle: "System Design (MLOps)",
              dayLabel: "Day 33",
              description: "ML system design is the single biggest differentiator for senior MLOps roles in 2026. These 6 prompts cover 90% of what gets asked. The training-serving skew question in particular gets asked in every serious MLOps loop.",
              concepts: [
                "Prompt 1: ML training platform for 200 data scientists — shared GPU scheduling (K8s + Volcano/Kueue), Jupyter vs job submission, experiment tracking (MLflow), artifact store, fairness/quotas, cost attribution per team",
                "Prompt 2: Online feature store at 50K QPS, p99 < 10ms — online DB choice (Redis vs DynamoDB vs Cassandra), offline → online backfill, point-in-time correctness, schema evolution, streaming feature writes, eventual consistency tradeoffs",
                "Prompt 3: Model serving platform for 100+ models — multi-model hosting (Triton or KServe ModelMesh), request routing, autoscaling per model, cold starts, GPU sharing (MIG, time-slicing), canary + shadow deployments, A/B testing infra",
                "Prompt 4: Real-time ML monitoring + automated retraining — feature/prediction/performance drift signals, ground-truth delay handling, alert thresholds, automated retraining triggers, human-in-the-loop approval gates",
                "Prompt 5: Multi-tenant LLM application platform — model routing (simple → expensive), semantic caching, prompt versioning + A/B, per-tenant cost guardrails, rate limiting, PII/PHI scrubbing, observability (latency/quality/cost), fine-tuning infra",
                "Prompt 6: Recommendation system serving 100M users — candidate generation (vector search at scale, ANN), ranking (lightweight model), feature retrieval from online store, caching strategy, cold-start handling, offline eval harness",
                "Training-serving skew — the #1 MLOps question: point-in-time features, same transformation code path, feature store as single source of truth",
                "Model promotion workflow: offline eval → shadow deploy → canary → full rollout → monitor → rollback criteria",
                "The ML-specific tradeoffs: batch vs online, managed (SageMaker/Vertex) vs self-hosted, build vs buy feature store, realtime ML vs near-realtime ML"
              ],
              practicePrompt: "Pick Prompts 2 and 3. Do a 45-min whiteboard session for each. For the feature store, specifically address: how do you guarantee training-serving skew is impossible? For model serving, specifically address: how do you handle a request that needs a model currently cold on disk?",
              resources: [
                {
                  id: "ml-system-design-book",
                  title: "Machine Learning System Design Interview",
                  url: "https://www.amazon.com/Machine-Learning-System-Design-Interview/dp/1736049127",
                  type: "book",
                  cost: "paid",
                  author: "Ali Aminian & Alex Xu",
                  note: "Indispensable for MLOps interviews"
                },
                {
                  id: "dmls-book",
                  title: "Designing Machine Learning Systems",
                  url: "https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/",
                  type: "book",
                  cost: "paid",
                  author: "Chip Huyen",
                  note: "Re-read with interview framing — every chapter maps to a design prompt"
                },
                {
                  id: "ml-interviews-book",
                  title: "ml-interviews-book (Chip Huyen, free)",
                  url: "https://github.com/chiphuyen/ml-interviews-book",
                  type: "github",
                  cost: "free",
                  author: "Chip Huyen"
                },
                {
                  id: "eugene-yan-blog",
                  title: "Eugene Yan's blog — real ML case studies",
                  url: "https://eugeneyan.com/",
                  type: "article",
                  cost: "free",
                  note: "Case studies from Amazon, Toyota, etc. with architecture depth"
                },
                {
                  id: "applied-ml",
                  title: "applied-ml (curated papers & blog posts)",
                  url: "https://github.com/eugeneyan/applied-ml",
                  type: "github",
                  cost: "free",
                  note: "Curated real-world ML case studies from tech companies"
                },
                {
                  id: "stanford-mlsys",
                  title: "Stanford MLSys Seminar — YouTube",
                  url: "https://www.youtube.com/@StanfordMLSys",
                  type: "video",
                  cost: "free",
                  note: "Weekly talks on how companies build ML platforms"
                },
                {
                  id: "mlops-community-podcast",
                  title: "MLOps Community Podcast",
                  url: "https://mlops.community/podcast/",
                  type: "article",
                  cost: "free",
                  note: "Treat episode descriptions as case study summaries"
                },
                {
                  id: "uber-michelangelo",
                  title: "Uber's Michelangelo ML platform (multi-part posts)",
                  url: "https://www.uber.com/blog/michelangelo-machine-learning-platform/",
                  type: "article",
                  cost: "free",
                  author: "Uber",
                  note: "Read the original + all follow-ups — canonical reference architecture"
                },
                {
                  id: "netflix-metaflow-blog",
                  title: "Netflix — Metaflow & ML infrastructure posts",
                  url: "https://netflixtechblog.com/tagged/machine-learning",
                  type: "article",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-w5-day34",
              type: "day",
              title: "Day 34: Behavioral, Negotiation & Portfolio",
              shortTitle: "Behavioral & Negotiation",
              dayLabel: "Day 34",
              description: "The last 10% that determines whether you get the offer you want. At senior+ levels, behavioral is scored as rigorously as technical rounds. Negotiation pays for itself — 30 minutes of prep typically yields 10-30% more total comp. This is not optional work.",
              concepts: [
                "Behavioral framework: every answer in STAR+ format (Situation / Task / Action / Result / + Reflection — what you learned, what you'd do differently)",
                "Prepare 8 stories covering: (1) Cross-team technical initiative driven without formal authority (2) Major outage — leading response, decisions, postmortem follow-through (3) Disagreement with VP/senior — your position, how you escalated, outcome (4) Mentoring a mid → senior engineer over 6+ months (5) A wrong technical call + what you learned (6) Influencing a team to adopt a better practice (7) Prioritizing when 4 things are on fire (8) A political win — navigating org dynamics to ship",
                "Every story should have quantified impact: MTTR reduced from X to Y, cost saved $N, toil hours/week reduced, SLO error budget preserved",
                "Rehearse stories aloud (not in your head) — record yourself, play back, trim each to 3 minutes",
                "Rule: every answer ends with 'and here's what I learned / what we kept'",
                "Negotiation — golden rules: never give a number first; get everything in writing before negotiating; total comp framing (base + equity over 4yr + signon + target bonus); multi-offer as leverage is powerful (ethical — only if real); 7-day rule — don't respond to verbal offers",
                "Know your market number: levels.fyi + Blind + H1B data; calibrate by level, location, company stage, domain (AI premium applies in 2026)",
                "The recruiter dynamic: they're paid to close, not to maximize your comp. Push back on 'this is our final offer' — it's almost never final for senior+",
                "Portfolio essentials: GitHub pinned with 4 capstone projects (each with architecture diagram, README, demo GIF); LinkedIn headline with DevOps + MLOps keywords; 2 blog posts written from capstones; 1 meaningful PR to a CNCF project (visible forever)",
                "Process tactics: ask for interview panel names + roles to prep per-interviewer; elevator pitch 'tell me about yourself' ≤90 sec; every round ends with 2 great questions (not about comp) showing architectural thinking; thank-you note within 24h with one follow-up thought",
                "Target companies in 2026 for your stack: AI infra (Anthropic, OpenAI, Anyscale, Modal, Together AI, RunPod), hyperscalers (AWS/GCP/Azure platform teams), ML-heavy SaaS (Databricks, HuggingFace, Weights & Biases), AI-native startups (Cursor, Perplexity, Harvey), enterprises building AI platforms internally"
              ],
              practicePrompt: "Write 8 STAR+ stories in a doc. Record yourself delivering each one — timer to 3 minutes. Listen back. Cut filler. Do it again. Then have a friend ask you the behavioral questions from the Staff Engineer's Path book and answer cold.",
              resources: [
                {
                  id: "haseeb-negotiation",
                  title: "Ten Rules for Negotiating a Job Offer",
                  url: "https://haseebq.com/how-not-to-bomb-your-offer-negotiation/",
                  type: "article",
                  cost: "free",
                  author: "Haseeb Qureshi",
                  note: "THE canonical negotiation guide. Read twice before any offer conversation"
                },
                {
                  id: "patio11-negotiation",
                  title: "Salary Negotiation: Make More Money, Be More Valued",
                  url: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/",
                  type: "article",
                  cost: "free",
                  author: "Patrick McKenzie (patio11)",
                  note: "The second-best negotiation essay ever written for engineers"
                },
                {
                  id: "staff-eng-path",
                  title: "The Staff Engineer's Path",
                  url: "https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/",
                  type: "book",
                  cost: "paid",
                  author: "Tanya Reilly",
                  note: "For behavioral depth at senior+ levels — many directly-askable questions"
                },
                {
                  id: "will-larson-staff",
                  title: "Staff Engineer — Leadership Beyond the Management Track",
                  url: "https://staffeng.com/book",
                  type: "book",
                  cost: "paid",
                  author: "Will Larson"
                },
                {
                  id: "staffeng-stories",
                  title: "StaffEng — stories from real staff engineers",
                  url: "https://staffeng.com/stories/",
                  type: "article",
                  cost: "free",
                  note: "Each story reads like a behavioral answer. Study the structure"
                },
                {
                  id: "elegant-puzzle",
                  title: "An Elegant Puzzle: Systems of Engineering Management",
                  url: "https://press.stripe.com/an-elegant-puzzle",
                  type: "book",
                  cost: "paid",
                  author: "Will Larson",
                  note: "Staff-level org context — helps you speak the leadership language"
                },
                {
                  id: "levels-fyi",
                  title: "levels.fyi — Compensation data",
                  url: "https://www.levels.fyi/",
                  type: "article",
                  cost: "free",
                  note: "Know your market numbers by level, location, and company"
                },
                {
                  id: "blind-teamblind",
                  title: "Blind — anonymous compensation + intel",
                  url: "https://www.teamblind.com/",
                  type: "article",
                  cost: "free-tier",
                  note: "Search company names for recent offer data + interview experiences"
                },
                {
                  id: "candor",
                  title: "Candor — Offer negotiation coaching",
                  url: "https://candor.co/",
                  type: "tool",
                  cost: "free-tier"
                },
                {
                  id: "interview-kickstart",
                  title: "Cracking the Coding Interview — Behavioral section",
                  url: "https://www.crackingthecodinginterview.com/",
                  type: "book",
                  cost: "paid",
                  author: "Gayle McDowell",
                  note: "Old standby — the behavioral section is still the tightest summary of expectations"
                }
              ]
            }
          ]
        }
      ]
    },
    // ========================================================
    // PHASE 2: CONTINUED MASTERY
    // ========================================================
    {
      id: "do-phase-2",
      title: "Phase 2",
      subtitle: "Continued Mastery (Months 2–6+)",
      description: "After the 30-day sprint, go deep. Distributed systems theory, data engineering at scale, FinOps, and the leadership/architecture skills that turn a senior into a staff engineer.",
      granularity: "month",
      months: [
        // -------------------------------------------------
        // MONTH 2
        // -------------------------------------------------
        {
          id: "do-month-2",
          title: "Month 2",
          subtitle: "Distributed Systems Deep Dive",
          summary: "The theoretical underpinning that senior candidates are grilled on: consensus, CAP, consistency models, distributed transactions, and the canonical systems papers.",
          nodes: [
            {
              id: "do-m2-ddia",
              type: "topic",
              title: "Designing Data-Intensive Applications (DDIA)",
              shortTitle: "DDIA — The Book",
              description: "If you haven't read DDIA cover-to-cover, this is the single highest-ROI month you can spend. Every staff-level interview draws from it.",
              concepts: [
                "Replication: single-leader, multi-leader, leaderless",
                "Partitioning strategies and rebalancing",
                "Transactions: isolation levels, serializability",
                "Consistency models: linearizability, causal, eventual",
                "Consensus: Paxos, Raft",
                "Batch vs stream processing architectures"
              ],
              resources: [
                {
                  id: "ddia",
                  title: "Designing Data-Intensive Applications",
                  url: "https://dataintensive.net/",
                  type: "book",
                  cost: "paid",
                  author: "Martin Kleppmann",
                  note: "The staff-interview canon"
                },
                {
                  id: "kleppmann-talks",
                  title: "Martin Kleppmann — YouTube talks",
                  url: "https://www.youtube.com/@kleppmann",
                  type: "video",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-m2-papers",
              type: "topic",
              title: "The Canonical Distributed Systems Papers",
              shortTitle: "Systems Papers",
              description: "Read the originals: Paxos, Raft, Dynamo, Spanner, Bigtable, Kafka. Not because you'll implement them, but because interviewers expect fluency.",
              concepts: [
                "Paxos Made Simple (Lamport)",
                "In Search of an Understandable Consensus Algorithm (Raft — Ongaro & Ousterhout)",
                "Dynamo: Amazon's Highly Available Key-value Store",
                "Spanner: Google's Globally-Distributed Database",
                "Bigtable: A Distributed Storage System",
                "Kafka: a Distributed Messaging System for Log Processing"
              ],
              resources: [
                {
                  id: "papers-we-love",
                  title: "Papers We Love (GitHub)",
                  url: "https://github.com/papers-we-love/papers-we-love",
                  type: "github",
                  cost: "free",
                  note: "Curated systems papers, all in one place"
                },
                {
                  id: "the-morning-paper",
                  title: "The Morning Paper (Adrian Colyer)",
                  url: "https://blog.acolyer.org/",
                  type: "article",
                  cost: "free",
                  note: "Paper summaries — start here if PDFs intimidate you"
                }
              ]
            }
          ]
        },
        // -------------------------------------------------
        // MONTH 3
        // -------------------------------------------------
        {
          id: "do-month-3",
          title: "Month 3",
          subtitle: "Data Engineering & Streaming",
          summary: "MLOps requires solid data engineering. Kafka, Flink, Spark, lakehouse formats, and the streaming-first architectures powering modern ML.",
          nodes: [
            {
              id: "do-m3-streaming",
              type: "topic",
              title: "Streaming Systems: Kafka, Flink, Spark",
              shortTitle: "Streaming Systems",
              description: "Real-time features, online inference pipelines, and event-driven architectures — all built on Kafka + Flink or Spark Structured Streaming.",
              concepts: [
                "Kafka internals: log structure, partitions, consumer groups, exactly-once",
                "Kafka Connect, Kafka Streams, ksqlDB",
                "Apache Flink — true streaming, event time, watermarks",
                "Spark Structured Streaming — micro-batch tradeoffs",
                "CDC (Change Data Capture): Debezium for DB → Kafka",
                "Schema registry, Avro/Protobuf evolution"
              ],
              resources: [
                {
                  id: "kafka-definitive",
                  title: "Kafka: The Definitive Guide (2nd Ed)",
                  url: "https://www.confluent.io/resources/kafka-the-definitive-guide/",
                  type: "book",
                  cost: "free",
                  author: "Confluent",
                  note: "Free download"
                },
                {
                  id: "streaming-systems-book",
                  title: "Streaming Systems (O'Reilly)",
                  url: "https://www.oreilly.com/library/view/streaming-systems/9781491983867/",
                  type: "book",
                  cost: "paid",
                  author: "Tyler Akidau et al.",
                  note: "The conceptual foundation of modern streaming"
                },
                {
                  id: "debezium",
                  title: "Debezium — CDC platform",
                  url: "https://debezium.io/documentation/",
                  type: "tool",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-m3-lakehouse",
              type: "topic",
              title: "The Lakehouse: Delta Lake, Iceberg, Hudi",
              shortTitle: "Lakehouse Formats",
              description: "The open table formats that finally made data lakes usable for ML. Every senior data/ML platform engineer needs to pick and defend one.",
              concepts: [
                "Delta Lake — Databricks' format, widely adopted",
                "Apache Iceberg — Netflix's format, vendor-neutral momentum in 2026",
                "Apache Hudi — upserts-first, streaming-friendly",
                "ACID on object storage — how it works",
                "Schema evolution, time travel, Z-ordering",
                "When you need a lakehouse vs a warehouse"
              ],
              resources: [
                {
                  id: "iceberg-docs",
                  title: "Apache Iceberg Documentation",
                  url: "https://iceberg.apache.org/docs/latest/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "delta-lake",
                  title: "Delta Lake Documentation",
                  url: "https://docs.delta.io/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "hudi-docs",
                  title: "Apache Hudi",
                  url: "https://hudi.apache.org/docs/overview",
                  type: "article",
                  cost: "free"
                }
              ]
            }
          ]
        },
        // -------------------------------------------------
        // MONTH 4
        // -------------------------------------------------
        {
          id: "do-month-4",
          title: "Month 4",
          subtitle: "FinOps & Cost Engineering",
          summary: "In 2026, cloud cost is the #1 lever most companies ignore. Senior DevOps who can demonstrably reduce cloud spend by 20%+ command staff-level offers.",
          nodes: [
            {
              id: "do-m4-finops",
              type: "topic",
              title: "FinOps — Cloud Financial Operations",
              shortTitle: "FinOps Framework",
              description: "FinOps Foundation's framework, certifications, and practices. How to build the inform → optimize → operate loop at organizational scale.",
              concepts: [
                "FinOps phases: Inform, Optimize, Operate",
                "Showback vs chargeback models",
                "Unit economics: $/request, $/inference, $/user",
                "RI/Savings Plans optimization",
                "Spot instance strategy and interruption handling",
                "Rightsizing with Cost Explorer, GCP Recommender, Azure Advisor",
                "Tagging strategies and cost allocation",
                "FinOps + sustainability: carbon-aware scheduling"
              ],
              resources: [
                {
                  id: "finops-framework",
                  title: "FinOps Foundation — Framework & Certifications",
                  url: "https://www.finops.org/framework/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "cloud-finops-book",
                  title: "Cloud FinOps (2nd Ed)",
                  url: "https://www.oreilly.com/library/view/cloud-finops-2nd/9781492054627/",
                  type: "book",
                  cost: "paid",
                  author: "J.R. Storment & Mike Fuller",
                  note: "The canonical FinOps book"
                },
                {
                  id: "vantage",
                  title: "Vantage — Cost observability",
                  url: "https://www.vantage.sh/",
                  type: "tool",
                  cost: "free-tier"
                }
              ]
            }
          ]
        },
        // -------------------------------------------------
        // MONTH 5
        // -------------------------------------------------
        {
          id: "do-month-5",
          title: "Month 5",
          subtitle: "Leadership, Architecture & Platform Strategy",
          summary: "The transition from senior IC to staff/principal isn't technical — it's influence, writing, and strategy. The skills most DevOps engineers never explicitly practice.",
          nodes: [
            {
              id: "do-m5-staff-eng",
              type: "topic",
              title: "The Staff Engineer Playbook",
              shortTitle: "Staff Engineering",
              description: "Tanya Reilly, Will Larson, and Charity Majors have written the canon. Staff-level hiring looks for 'technical leadership without direct reports.'",
              concepts: [
                "The Staff Engineer's Path archetypes: Tech Lead, Architect, Solver, Right Hand",
                "Influence without authority — building through writing, not decree",
                "ADRs (Architecture Decision Records) as the senior's primary artifact",
                "Tech strategy documents and roadmaps",
                "Running RFCs and design reviews",
                "Mentorship as a force multiplier",
                "The staff-level impact conversation: what multiplies teams?"
              ],
              resources: [
                {
                  id: "staff-engineers-path",
                  title: "The Staff Engineer's Path",
                  url: "https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/",
                  type: "book",
                  cost: "paid",
                  author: "Tanya Reilly"
                },
                {
                  id: "staff-eng-book",
                  title: "Staff Engineer (Larson)",
                  url: "https://staffeng.com/book",
                  type: "book",
                  cost: "paid",
                  author: "Will Larson"
                },
                {
                  id: "staff-eng-site",
                  title: "StaffEng — Stories & guides",
                  url: "https://staffeng.com/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "adr-github",
                  title: "Architecture Decision Records (ADRs)",
                  url: "https://github.com/joelparkerhenderson/architecture-decision-record",
                  type: "github",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-m5-writing",
              type: "topic",
              title: "Technical Writing & Communication",
              shortTitle: "Technical Writing",
              description: "The single most underrated staff+ skill. Your design docs, postmortems, and RFCs become your lasting artifact.",
              concepts: [
                "Google's Technical Writing Courses (free)",
                "Structure: TL;DR, context, options, decision, trade-offs",
                "Postmortem culture — blameless, timeline-driven, action-oriented",
                "Pre-mortems for risky changes",
                "Writing memos that scale across 50+ engineers"
              ],
              resources: [
                {
                  id: "google-tech-writing",
                  title: "Google Technical Writing Courses",
                  url: "https://developers.google.com/tech-writing",
                  type: "course",
                  cost: "free",
                  author: "Google"
                },
                {
                  id: "writing-for-engineers",
                  title: "Writing for Engineers (Heinemeier Hansson, Fournier)",
                  url: "https://www.engineersneedwords.com/",
                  type: "article",
                  cost: "free"
                }
              ]
            }
          ]
        },
        // -------------------------------------------------
        // MONTH 6+
        // -------------------------------------------------
        {
          id: "do-month-6",
          title: "Month 6+",
          subtitle: "Specialization Paths",
          summary: "By now you can defend senior-level interviews. Pick one to two tracks to go deep and start becoming known for — specialization is how you break into staff/principal and get recruited unsolicited.",
          nodes: [
            {
              id: "do-m6-paths",
              type: "topic",
              title: "Four Specialization Tracks",
              shortTitle: "Specialization Tracks",
              description: "Pick where you want your reputation to live. All four are in high demand in 2026, but each attracts a different kind of role.",
              concepts: [
                "Track A — AI/ML Infrastructure: vLLM, GPU clusters, model serving at scale. Companies: Anyscale, Modal, Together AI, Databricks, hyperscalers",
                "Track B — Platform Engineering Lead: IDPs, golden paths, DX. Every scaling company in 2026 has a platform team hiring for this",
                "Track C — SRE / Reliability Architect: SLOs at scale, chaos engineering, incident leadership. Google/Meta/Stripe/finance all pay top dollar",
                "Track D — Security Platform Engineer: DevSecOps, zero-trust, supply chain. Fastest-growing salary band post-SolarWinds"
              ],
              resources: [
                {
                  id: "cncf-landscape",
                  title: "CNCF Landscape — project map",
                  url: "https://landscape.cncf.io/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "thoughtworks-radar",
                  title: "ThoughtWorks Technology Radar",
                  url: "https://www.thoughtworks.com/radar",
                  type: "article",
                  cost: "free",
                  note: "Quarterly signal for what's rising/falling"
                }
              ]
            },
            {
              id: "do-m6-stay-current",
              type: "topic",
              title: "Staying Current — People, Newsletters, Conferences",
              shortTitle: "Staying Current",
              description: "The operator you follow matters more than the framework you learn. Build a signal diet.",
              concepts: [
                "People: Kelsey Hightower, Liz Rice, Charity Majors, Chip Huyen, Patrick Debois, Jessie Frazelle, Ian Coldwater, Tim Hockin",
                "Newsletters: DevOps Weekly, The New Stack, KubeWeekly, SRE Weekly, MLOps Community",
                "Conferences: KubeCon + CloudNativeCon (CNCF flagship), SREcon, re:Invent, Data + AI Summit, MLOps World",
                "Communities: CNCF Slack, Kubernetes Slack, MLOps Community Slack, r/devops, r/sre, r/kubernetes",
                "Twitter/X lists: curate 50-100 practitioners",
                "Podcasts: Kubernetes Podcast (Google), The Cloudcast, Software Engineering Daily, MLOps Community podcast"
              ],
              resources: [
                {
                  id: "kubeweekly",
                  title: "KubeWeekly Newsletter",
                  url: "https://www.cncf.io/kubeweekly/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "thenewstack",
                  title: "The New Stack",
                  url: "https://thenewstack.io/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "mlops-community",
                  title: "MLOps Community",
                  url: "https://mlops.community/",
                  type: "article",
                  cost: "free",
                  note: "Slack + podcast + newsletter"
                },
                {
                  id: "kubernetes-podcast",
                  title: "Kubernetes Podcast from Google",
                  url: "https://kubernetespodcast.com/",
                  type: "article",
                  cost: "free"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
