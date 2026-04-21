// ============================================================
// ROADMAP DATA — Senior DevOps / MLOps Engineer
// Node IDs prefixed with "do-" to avoid collision with the AI Engineer roadmap
// ============================================================

window.ROADMAP_DATA_DEVOPS = {
  id: "senior-devops-mlops",
  meta: {
    title: "Senior DevOps/MLOps",
    subtitle: "Advanced Engineering Roadmap",
    description: "Deep, job-ready mastery of the senior DevOps/MLOps stack — Kubernetes internals, IaC/GitOps platforms, observability & SRE, DevSecOps supply chain, and full-lifecycle MLOps. Designed for experienced engineers targeting senior/staff roles in 2026.",
    version: "1.0"
  },
  phases: [
    // ========================================================
    // PHASE 1: 30-DAY ADVANCED PLAN
    // ========================================================
    {
      id: "do-phase-1",
      title: "Phase 1",
      subtitle: "30-Day Advanced Plan",
      description: "A focused, senior-level sprint across the four pillars of modern platform engineering: Kubernetes mastery, IaC/GitOps platforms, observability & SRE, and production MLOps.",
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
          goal: "Understand Kubernetes internals deeply, master advanced scheduling/security/operators, and know how to run K8s at scale cost-effectively",
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
              title: "Day 6: Operators, CRDs & the Operator Pattern",
              shortTitle: "Operators & CRDs",
              dayLabel: "Day 6",
              description: "The operator pattern is how modern infrastructure is built on Kubernetes. Understand the reconciliation loop, write a CRD, and read the code of production operators like Prometheus and cert-manager.",
              concepts: [
                "The Operator pattern — encoding operational knowledge as software",
                "Custom Resource Definitions (CRDs) and Custom Controllers",
                "Kubebuilder vs operator-sdk — scaffolding frameworks",
                "Reconciliation loops — declarative state convergence",
                "Owner references, finalizers, status subresource",
                "Leader election for HA operators",
                "Reading real operators: Prometheus Operator, cert-manager, external-dns, Argo",
                "When NOT to build an operator"
              ],
              resources: [
                {
                  id: "kubebuilder-book",
                  title: "The Kubebuilder Book",
                  url: "https://book.kubebuilder.io/",
                  type: "article",
                  cost: "free",
                  note: "The canonical guide to building operators in Go"
                },
                {
                  id: "operator-sdk",
                  title: "Operator SDK",
                  url: "https://sdk.operatorframework.io/docs/",
                  type: "article",
                  cost: "free",
                  author: "Red Hat / CNCF"
                },
                {
                  id: "operatorhub",
                  title: "OperatorHub.io — Catalog of production operators",
                  url: "https://operatorhub.io/",
                  type: "article",
                  cost: "free",
                  note: "Study how real-world operators are built"
                },
                {
                  id: "sample-controller",
                  title: "sample-controller (official K8s example)",
                  url: "https://github.com/kubernetes/sample-controller",
                  type: "github",
                  cost: "free",
                  note: "Minimal reference implementation"
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
              title: "Day 10: Modern IaC — Pulumi, Crossplane & CDK",
              shortTitle: "Pulumi, Crossplane, CDK",
              dayLabel: "Day 10",
              description: "Terraform is not the only game in town. Know the alternatives, their trade-offs, and when to pick each. Crossplane in particular is reshaping how platform teams expose infrastructure.",
              concepts: [
                "Pulumi — code-native IaC in TypeScript/Go/Python",
                "AWS CDK / CDKTF — higher-level constructs over CloudFormation/Terraform",
                "Crossplane — Kubernetes as the cloud control plane, Compositions & XRDs",
                "Declarative vs imperative IaC mental models",
                "When code-native IaC pays off (complex logic, shared libraries, type safety)",
                "Managed IaC platforms: Env0, Spacelift, Scalr, Terraform Cloud/Enterprise"
              ],
              resources: [
                {
                  id: "pulumi-docs",
                  title: "Pulumi Documentation",
                  url: "https://www.pulumi.com/docs/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "crossplane-docs",
                  title: "Crossplane Documentation",
                  url: "https://docs.crossplane.io/",
                  type: "article",
                  cost: "free",
                  author: "CNCF",
                  note: "Study Compositions — the killer Crossplane feature"
                },
                {
                  id: "aws-cdk",
                  title: "AWS CDK Developer Guide",
                  url: "https://docs.aws.amazon.com/cdk/v2/guide/",
                  type: "article",
                  cost: "free"
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
          goal: "Become fluent in OpenTelemetry, Prometheus-at-scale, SRE practice, supply-chain security, and eBPF — the reliability and security pillars every senior owns",
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
              title: "Day 18: Chaos Engineering",
              shortTitle: "Chaos Engineering",
              dayLabel: "Day 18",
              description: "Netflix invented it, CNCF standardized it. Inject failure deliberately to uncover weaknesses before they page you at 3am. Senior engineers run game days.",
              concepts: [
                "Principles of Chaos Engineering (principlesofchaos.org)",
                "Hypothesis-driven experiments, blast radius control",
                "Chaos Mesh, LitmusChaos — K8s-native tooling",
                "Gremlin, Steadybit — commercial platforms",
                "Game days — scheduled, coordinated failure exercises",
                "Fault injection patterns: latency, failure, resource exhaustion, network partitions",
                "Integrating chaos into CI — continuous verification"
              ],
              resources: [
                {
                  id: "principles-of-chaos",
                  title: "Principles of Chaos Engineering",
                  url: "https://principlesofchaos.org/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "chaos-eng-book",
                  title: "Chaos Engineering (O'Reilly)",
                  url: "https://www.oreilly.com/library/view/chaos-engineering/9781492043850/",
                  type: "book",
                  cost: "paid",
                  author: "Casey Rosenthal & Nora Jones"
                },
                {
                  id: "chaos-mesh",
                  title: "Chaos Mesh",
                  url: "https://chaos-mesh.org/",
                  type: "tool",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "litmus",
                  title: "LitmusChaos",
                  url: "https://litmuschaos.io/",
                  type: "tool",
                  cost: "free",
                  author: "CNCF"
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
              title: "Day 21: eBPF — The Next-Gen Platform Primitive",
              shortTitle: "eBPF & Cilium",
              dayLabel: "Day 21",
              description: "eBPF is quietly replacing iptables, sidecars, and traditional monitoring agents. Knowing Cilium, Pixie, Parca and Hubble is becoming a senior expectation.",
              concepts: [
                "What eBPF is — safe, verified programs running in the kernel",
                "Cilium — eBPF-powered CNI, replacing kube-proxy and enabling L7 policies",
                "Hubble — Cilium's observability layer",
                "Pixie — auto-instrumented observability with no code changes",
                "Parca — continuous profiling in production",
                "Tetragon — runtime security via eBPF",
                "When eBPF beats sidecars (performance, resource cost)",
                "The eBPF-based service mesh conversation (Cilium Service Mesh, Ambient Istio)"
              ],
              resources: [
                {
                  id: "ebpf-io",
                  title: "ebpf.io — The eBPF homepage",
                  url: "https://ebpf.io/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "cilium-docs",
                  title: "Cilium Documentation",
                  url: "https://docs.cilium.io/",
                  type: "article",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "liz-rice-ebpf",
                  title: "Liz Rice — Learning eBPF (book)",
                  url: "https://www.oreilly.com/library/view/learning-ebpf/9781098135119/",
                  type: "book",
                  cost: "paid",
                  author: "Liz Rice",
                  note: "The approachable eBPF book for engineers"
                },
                {
                  id: "pixie",
                  title: "Pixie — Auto-instrumented observability",
                  url: "https://px.dev/",
                  type: "tool",
                  cost: "free",
                  author: "CNCF"
                },
                {
                  id: "parca",
                  title: "Parca — Continuous profiling",
                  url: "https://www.parca.dev/",
                  type: "tool",
                  cost: "free"
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
                "Chaos Mesh scheduled experiments injecting latency/failures",
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
          goal: "Master the full ML lifecycle on top of your DevOps foundation — pipelines, feature stores, serving, monitoring, and LLMOps",
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
              title: "Day 24: Feature Stores & Data Infrastructure for ML",
              shortTitle: "Feature Stores & Data",
              dayLabel: "Day 24",
              description: "Feature stores solve training-serving skew — the problem you will be asked about in every MLOps interview. Data versioning rounds out the picture.",
              concepts: [
                "What a feature store is — and why you probably don't need one at small scale",
                "Online vs offline feature stores — latency and consistency tradeoffs",
                "Feast — the open-source standard",
                "Tecton, Databricks FS, Vertex AI FS — commercial options",
                "Point-in-time correctness for training data",
                "Data versioning: DVC, LakeFS, Pachyderm, Quilt",
                "Delta Lake / Iceberg / Hudi — lakehouse table formats",
                "Streaming features with Kafka + Flink"
              ],
              resources: [
                {
                  id: "feast",
                  title: "Feast — Open-source Feature Store",
                  url: "https://docs.feast.dev/",
                  type: "article",
                  cost: "free"
                },
                {
                  id: "feature-stores-for-ml",
                  title: "Feature Stores for ML (community hub)",
                  url: "https://www.featurestore.org/",
                  type: "article",
                  cost: "free"
                },
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
                  id: "tecton-blog",
                  title: "Tecton Blog — Feature Engineering",
                  url: "https://www.tecton.ai/blog/",
                  type: "article",
                  cost: "free"
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
              description: "The hottest subfield. GPU infrastructure, high-throughput serving, semantic caching, cost tracking, and fine-tuning at scale. Where MLOps meets generative AI.",
              concepts: [
                "GPU infrastructure: A100/H100/L4/L40S selection, spot vs reserved",
                "vLLM — continuous batching, PagedAttention, the production default",
                "TGI (Text Generation Inference) — HuggingFace's server",
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
              id: "do-w4-day30",
              type: "day",
              title: "Day 30: System Design, Interview Prep & Job Strategy",
              shortTitle: "System Design & Interview Prep",
              dayLabel: "Day 30",
              description: "Translate all this into signal. Practice whiteboard ML platform design, SRE interview questions, and frame your DevOps background as an MLOps superpower.",
              concepts: [
                "System design: 'Design an ML platform for 500 data scientists'",
                "Tradeoff questions: RAG vs fine-tune, K8s vs SageMaker, managed vs self-hosted",
                "SRE interview patterns: capacity planning, outage scenarios, on-call design",
                "Behavioral: tell-me-about-a-time incident, postmortem ownership, influence without authority",
                "Your resume: quantify SLOs hit, cost saved, toil reduced, MTTR improved",
                "Target companies: AI infra (vLLM, Modal, Together, Anyscale), hyperscalers, AI-native startups",
                "2-minute project pitches for each of the 4 capstone projects"
              ],
              resources: [
                {
                  id: "bytebytego",
                  title: "ByteByteGo — System Design Primer (Alex Xu)",
                  url: "https://bytebytego.com/",
                  type: "article",
                  cost: "free-tier",
                  author: "Alex Xu"
                },
                {
                  id: "system-design-primer",
                  title: "The System Design Primer (GitHub)",
                  url: "https://github.com/donnemartin/system-design-primer",
                  type: "github",
                  cost: "free",
                  note: "250K+ stars — the canonical free resource"
                },
                {
                  id: "sre-interview-prep",
                  title: "Google SRE Interview Prep Guide",
                  url: "https://www.google.com/about/careers/applications/how-we-hire/interview/",
                  type: "article",
                  cost: "free"
                }
              ]
            },
            {
              id: "do-w4-project4",
              type: "project",
              title: "Project #4 — End-to-End MLOps Platform",
              shortTitle: "End-to-End MLOps Platform",
              dayLabel: "Days 22–30",
              isProject: true,
              projectNumber: 4,
              description: "Capstone: a full MLOps platform on top of Weeks 1–3. This is the portfolio project senior MLOps candidates are asked to walk through in every onsite.",
              concepts: [
                "Data ingestion pipeline (Airflow/Dagster) landing features into Feast",
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
