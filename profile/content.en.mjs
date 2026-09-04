export default {
  readme: `# 👋 Hi, I'm Sorune

[한국어](./README.md) · [English](./README.en.md)

\`\`\`text
sorune@github
────────────────────────────────────────────────────
Role        Backend Developer · Systems / Platform Engineering
Primary     Java · TypeScript
Backend     Spring Boot · Node.js · NestJS
Web         React · Thymeleaf
Infra       Docker · Linux · Nginx · Cloudflare
Observe     Prometheus · Grafana

Public      grid-masonry
Private     PhotoGram · CharaWeave · PaaS Platform
Homelab     server-ops · Security Guard
Background  Industrial Control · PLC · LabVIEW · PID
────────────────────────────────────────────────────
build → verify → integrate → operate
\`\`\`

I build **backend systems, runtimes, platforms, and operational automation**, primarily with Java / Spring and TypeScript.  
I prefer explicit responsibility boundaries and structures that can be verified by real consumers and operating environments over rapidly accumulating features.

## 🚀 Selected Work

- **[grid-masonry]({{gridMasonryRepo}})** — public TypeScript masonry geometry library · \`{{gridMasonryVersion}}\` released
- **PhotoGram** — private Spring photo platform
- **CharaWeave** — private platform-independent character runtime
- **PaaS Platform** — private control plane
- **Security Guard** — private abuse-detection / security-decision service · Go learning

[View project details →](./docs/PROJECTS.en.md)

## 🏠 Homelab / Operations

I operate a self-hosted environment for deployment, monitoring, storage, backup / restore, alerting, and failure-recovery validation.

[View homelab details →](./docs/HOMELAB.en.md)

## ⚙️ Engineering Background

Before web development, I built **LabVIEW / PLC-based industrial monitoring and control systems** deployed across **{{fieldSites}} field sites**, including swimming-pool monitoring, HVAC, and smart-farm automation.

[View experience →](./docs/EXPERIENCE.en.md)

## 🛠 Stack

**Languages** — Java · TypeScript · JavaScript · Python · Go *(learning)*  
**Backend / Web** — Spring Boot · Node.js · NestJS · React · Thymeleaf  
**Data** — PostgreSQL · MariaDB · MySQL · Redis  
**Infra / Observability** — Docker · Linux · Nginx · Cloudflare · GitHub Actions · Prometheus · Grafana

---

> 🤖 **AI-reviewed from actual development history — not generated from a résumé prompt.**  
> AI has reviewed a long trail of real development work — including the parts that failed and had to be repaired.  
> This is not an official certification; I remain responsible for the factual accuracy and public claims.

[How I work with AI →](./docs/AI_WORKFLOW.en.md)

---

## 📫 Contact

- GitHub: [github.com/Sorune]({{github}})
- Email: \`{{email}}\`
`,
  projects: `# Selected Projects

[한국어](./PROJECTS.md) · [English](./PROJECTS.en.md) · [← Profile](../README.en.md)

## grid-masonry

**PUBLIC · RELEASED**

A deterministic, platform-independent masonry geometry library extracted from a product layout implementation where geometry, rendering, measurement, and application state had become tightly coupled.

- pure TypeScript geometry core
- React Web adapter
- framework-independent Browser adapter
- vertical / horizontal layout
- spans / reserved regions / checkpoints
- virtualization primitives
- deterministic source-order placement

The \`{{gridMasonryVersion}}\` packages are published and registry-verified.

[Repository]({{gridMasonryRepo}}) · [Website]({{gridMasonrySite}}) · [English Docs]({{gridMasonryDocsEn}})

---

## PhotoGram

**PRIVATE · ACTIVE**

A Spring-based photo platform being rebuilt around explicit application, media, web-consumer, layout, and operations boundaries.

- Spring MVC + Thymeleaf primary web
- React consumer
- authentication / authorization
- upload / attachment lifecycle
- normalized image metadata
- privacy-safe media delivery
- metadata-derived discovery
- browser acceptance
- health / readiness / observability

---

## CharaWeave

**PRIVATE · ACTIVE**

A platform-independent character runtime.

- headless runtime facade
- behavior / autonomy orchestration
- browser runtime and motion
- React host binding
- stable / public / internal package contracts

---

## PaaS Platform

**PRIVATE · ACTIVE / NON-PRODUCTION**

A control plane for deployment, runtime observation, and access control on top of my infrastructure.

- domain / API / projection boundaries
- authentication / RBAC / audit
- bounded operations contracts
- separation between infrastructure authority and control-plane authority

---

## Security Guard

**PRIVATE · ACTIVE / GO LEARNING**

An independent abuse-detection / security-decision service and a hands-on Go learning project.

Observation → Detection → Decision → Ban / Reputation → Enforcement Adapter
`,
  homelab: `# Homelab / Operations

[한국어](./HOMELAB.md) · [English](./HOMELAB.en.md) · [← Profile](../README.en.md)

I use a self-hosted environment to validate deployment, observability, storage, and recovery outside local development.

## What I operate

- containerized application workloads
- NAS / file storage
- reverse proxy / private networking / secure external access
- Prometheus + Grafana central observability
- health / readiness / synthetic monitoring
- alerting and operational runbooks
- backup / restore workflows
- power-consumption monitoring
- development / test compute nodes

\`\`\`text
Applications / Services
          ↓
Container Runtime / Edge
          ↓
Metrics · Health · Alerts
          ↓
Storage · Backup · Restore
\`\`\`

## Engineering focus

- separating application business logic from infrastructure placement
- Git-backed configuration and operational procedures
- treating monitoring as an operational contract
- including failure recovery in acceptance

## Public disclosure boundary

Public documents intentionally omit internal IPs, credentials, private routes, storage paths, and other topology details that would unnecessarily expand the attack surface.
`,
  experience: `# Experience / Background

[한국어](./EXPERIENCE.md) · [English](./EXPERIENCE.en.md) · [← Profile](../README.en.md)

## Industrial Control / Automation

Before web development, I designed and implemented LabVIEW-based industrial monitoring and control systems deployed across **{{fieldSites}} field sites**.

### Swimming Pool Monitoring & Control

I worked on the **complete monitoring and control system** for swimming-pool facilities.

- sensor / PLC-based equipment-state collection
- equipment monitoring and control commands
- operating-state monitoring
- state synchronization between field equipment and higher-level monitoring

### HVAC Control

I was responsible for the HVAC control portion.

- temperature / humidity-based state decisions
- PLC / equipment communication
- HVAC control logic
- abnormal-state detection and alarm integration

### Smart Farm Greenhouse Automation

- temperature-driven greenhouse control
- irrigation control
- heater control
- ventilation / opening and closing actuators
- automatic operation based on sensor state

### Cloud Monitoring / Alert Integration

- remote monitoring integration for field equipment
- alarm / event delivery
- synchronization between cloud monitoring and field state
- alert integration on equipment-state changes

---

## Production Web

### Ulsan Branch of the Korea Kidney Disabled Association

I migrated a legacy PHP system to NestJS + React and consolidated two previously separate servers into a single Node-based server.

- system architecture
- PHP → NestJS + React migration
- server consolidation
- backend / frontend implementation
- build / deployment
- responsible for design of the system and implementation/build, excluding visual design

### Other Delivered Web Projects

- Gongju Onbam
- Gongsanseong Media Art

### Earlier Project — GTT

- Riot API-based game community
- JPA / Join Fetch performance experiments
- WebSocket-based real-time features
`,
  aiWorkflow: `# AI-native Engineering Workflow

[한국어](./AI_WORKFLOW.md) · [English](./AI_WORKFLOW.en.md) · [← Profile](../README.en.md)

## Earlier / hands-on period

My earlier development work was primarily hands-on implementation.

- LabVIEW / PLC / sensor communication / PID industrial control
- production web application design and implementation
- PHP legacy → NestJS + React migration
- consolidation of two existing servers into a Node-based server
- application design / implementation / build / deployment

## Current / AI-native period

I now use AI aggressively as **implementation leverage**.

I delegate repetitive boilerplate, test drafts, documentation, and well-bounded implementation work, while retaining direct ownership of:

- problem definition
- architecture
- responsibility boundaries
- public / semantic contracts
- scope
- acceptance criteria
- STOP / CONTINUE decisions
- diff / report review
- architecture acceptance
- release decisions

I intervene directly when state models, abstraction boundaries, performance bottlenecks, or AI-generated structures become unnecessarily complex.

## Development History Disclosure

> 🤖 **AI-reviewed from actual development history — not generated from a résumé prompt.**

The profile has been reviewed against long-running development conversations, Git state, commit / branch / acceptance history, architecture decisions, and failure / repair records — not just a résumé-generation prompt.

This is not an OpenAI or AI certification, independent audit, or qualification guarantee. I remain responsible for the factual accuracy and public claims.
`
};
