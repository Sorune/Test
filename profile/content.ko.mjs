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

Java / Spring과 TypeScript를 중심으로 **백엔드, 런타임, 플랫폼, 운영 자동화**를 다룹니다.  
복잡한 기능을 빠르게 쌓기보다 책임과 경계를 나누고, 실제 consumer와 운영 환경에서 검증 가능한 구조를 만드는 것을 선호합니다.

## 🚀 Selected Work

- **[grid-masonry]({{gridMasonryRepo}})** — public TypeScript masonry geometry library · \`{{gridMasonryVersion}}\` released
- **PhotoGram** — private Spring photo platform
- **CharaWeave** — private platform-independent character runtime
- **PaaS Platform** — private control plane
- **Security Guard** — private abuse-detection / security-decision service · Go learning

[프로젝트 상세 보기 →](./docs/PROJECTS.md)

## 🏠 Homelab / Operations

Self-hosted 환경에서 deployment, monitoring, storage, backup / restore, alerting, failure recovery를 직접 검증하고 운영합니다.

[홈랩 상세 보기 →](./docs/HOMELAB.md)

## ⚙️ Engineering Background

웹 개발 이전에는 **LabVIEW / PLC 기반 산업 제어 및 관제 시스템**을 개발했고,  
수영장 관제, HVAC, 스마트팜 제어를 포함해 **{{fieldSites}}개 현장**에 실제 적용했습니다.

[경력 및 현장 경험 보기 →](./docs/EXPERIENCE.md)

## 🛠 Stack

**Languages** — Java · TypeScript · JavaScript · Python · Go *(learning)*  
**Backend / Web** — Spring Boot · Node.js · NestJS · React · Thymeleaf  
**Data** — PostgreSQL · MariaDB · MySQL · Redis  
**Infra / Observability** — Docker · Linux · Nginx · Cloudflare · GitHub Actions · Prometheus · Grafana

---

> 🤖 **AI-reviewed from actual development history — not generated from a résumé prompt.**  
> AI가 실제 개발 기록을 꽤 오래 봤습니다. 잘된 것뿐 아니라 삽질하고 고친 것도 봤습니다.  
> 공식 인증은 아니며, 최종 사실 관계와 공개 내용은 제가 책임집니다.

[AI와 개발하는 방식 보기 →](./docs/AI_WORKFLOW.md)

---

## 📫 Contact

- GitHub: [github.com/Sorune]({{github}})
- Email: \`{{email}}\`
`,
  projects: `# Selected Projects

[한국어](./PROJECTS.md) · [English](./PROJECTS.en.md) · [← 프로필](../README.md)

## grid-masonry

**PUBLIC · RELEASED**

Deterministic, platform-independent masonry geometry library.

제품 내부에서 geometry, rendering, measurement, application state가 결합되어 있던 문제를 분리하면서 시작했습니다.

- pure TypeScript geometry core
- React Web adapter
- framework-independent Browser adapter
- vertical / horizontal layout
- spans / reserved regions / checkpoints
- virtualization primitives
- deterministic source-order placement

\`{{gridMasonryVersion}}\` packages are published and registry-verified.

[Repository]({{gridMasonryRepo}}) · [Website]({{gridMasonrySite}}) · [한국어 문서]({{gridMasonryDocsKo}})

---

## PhotoGram

**PRIVATE · ACTIVE**

Spring 기반 사진 플랫폼을 제품 단위로 재구성하고 있습니다.

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

Platform-independent character runtime.

- headless runtime facade
- behavior / autonomy orchestration
- browser runtime and motion
- React host binding
- stable / public / internal package contracts

---

## PaaS Platform

**PRIVATE · ACTIVE / NON-PRODUCTION**

개인 인프라의 deployment, runtime observation, access control을 다루기 위한 control plane입니다.

- domain / API / projection boundary
- authentication / RBAC / audit
- bounded operations contract
- infrastructure authority와 control-plane authority 분리

---

## Security Guard

**PRIVATE · ACTIVE / GO LEARNING**

독립적인 abuse-detection / security-decision service이자 Go 학습 프로젝트입니다.

Observation → Detection → Decision → Ban / Reputation → Enforcement Adapter
`,
  homelab: `# Homelab / Operations

[한국어](./HOMELAB.md) · [English](./HOMELAB.en.md) · [← 프로필](../README.md)

개발 결과를 로컬에서 끝내지 않고, 직접 운영 가능한 self-hosted 환경에서 deployment, observability, storage, recovery를 검증합니다.

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

- application business logic와 infrastructure placement 책임 분리
- Git-backed configuration / operational procedures
- monitoring을 운영 계약으로 취급
- failure recovery까지 acceptance 범위에 포함

## Public disclosure boundary

공개 문서에는 내부 IP, credential, private route, storage path 등 공격 표면을 넓힐 수 있는 상세 topology를 공개하지 않습니다.
`,
  experience: `# Experience / Background

[한국어](./EXPERIENCE.md) · [English](./EXPERIENCE.en.md) · [← 프로필](../README.md)

## Industrial Control / Automation

웹 개발 이전에는 LabVIEW 기반 산업 제어 및 관제 시스템을 설계·구현했습니다.

총 **{{fieldSites}}개 현장**에 실제 적용했으며, 센서 입력과 제어 출력이 연결되는 production field system을 다뤘습니다.

### Swimming Pool Monitoring & Control

수영장 설비의 **전체 관제 시스템**을 구성했습니다.

- sensor / PLC 기반 설비 상태 수집
- 장비 상태 모니터링 및 제어 명령 처리
- 운전 상태 관제
- 현장 장비와 상위 모니터링 시스템 간 상태 동기화

### HVAC Control

공조 시스템의 제어 파트를 담당했습니다.

- 온·습도 센서 기반 상태 판단
- PLC / 설비 통신
- 공조 제어 로직
- 이상 상태 감지 및 alarm 연계

### Smart Farm Greenhouse Automation

- 온도 기반 온실 환경 제어
- 관수 제어
- 히터 제어
- 환기 / 개폐 장치 제어
- 센서 상태에 따른 자동 운전

### Cloud Monitoring / Alert Integration

- 현장 설비 상태의 원격 모니터링 연계
- alarm / event 전달
- cloud monitoring 상태와 현장 상태 동기화
- 장비 상태 변화에 따른 alert 연동

---

## Production Web

### 신장장애인협회 울산지부

기존 PHP 기반 시스템을 NestJS + React 구조로 마이그레이션하고, 서로 분리되어 있던 두 서버를 하나의 Node 기반 서버로 통합했습니다.

- 시스템 구조 설계
- PHP → NestJS + React migration
- server consolidation
- backend / frontend implementation
- build / deployment
- 디자인을 제외한 설계부터 구현·빌드까지 담당

### Other Delivered Web Projects

- 공주온밤
- 공산성 미디어아트

### Earlier Project — GTT

- Riot API 기반 게임 커뮤니티
- JPA / Join Fetch 성능 실험
- WebSocket 기반 실시간 기능 구현
`,
  aiWorkflow: `# AI-native Engineering Workflow

[한국어](./AI_WORKFLOW.md) · [English](./AI_WORKFLOW.en.md) · [← 프로필](../README.md)

## Earlier / hands-on period

초기 개발 경력은 직접 구현 중심이었습니다.

- LabVIEW / PLC / sensor communication / PID 기반 산업제어
- production web application 설계와 구현
- PHP legacy → NestJS + React migration
- 기존 두 서버의 Node 기반 통합
- application design / implementation / build / deployment

## Current / AI-native period

현재는 AI를 **implementation leverage**로 적극 활용합니다.

반복적인 boilerplate, 테스트 초안, 문서화, 명확한 구현 작업은 적극 위임하지만 다음 항목은 직접 소유하고 판단합니다.

- problem definition
- architecture
- responsibility boundary
- public / semantic contract
- scope
- acceptance criteria
- STOP / CONTINUE decision
- diff / report review
- architecture acceptance
- release decision

복잡한 상태 모델, 추상화 경계, 성능 병목, 또는 AI가 불필요하게 구조를 복잡하게 만드는 부분은 직접 개입해 단순화하거나 다시 설계합니다.

## Development History Disclosure

> 🤖 **AI-reviewed from actual development history — not generated from a résumé prompt.**

AI가 장기간의 실제 개발 대화, Git state, commit / branch / acceptance history, 실패·수정 과정까지 함께 보고 이 프로필의 기술적 서술과 경력 흐름을 재검토했습니다.

이 표시는 OpenAI 또는 AI의 공식 인증, 독립 감사, 자격 보증을 의미하지 않습니다. 최종 사실 관계와 공개 내용에 대한 책임은 개발자 본인에게 있습니다.
`
};
