# Selected Projects

[← Profile preview](../README.md)

## grid-masonry

**PUBLIC · RELEASED**

Deterministic, platform-independent masonry geometry library.

제품 내부에서 geometry, rendering, measurement, application state가 결합되어 있던 문제를 분리하면서 시작했습니다.

- `grid-masonry-core` — pure TypeScript geometry core, zero runtime dependencies
- `grid-masonry-react` — React Web adapter
- `grid-masonry-browser` — framework-independent browser adapter
- vertical / horizontal layout
- spans / reserved regions / checkpoints
- virtualization primitives
- deterministic source-order placement
- diagnostics and displacement metrics

`0.3.0` packages are published and registry-verified.

- [Repository](https://github.com/Sorune/grid-masonry)
- [Website](https://grid-masonry.sorune.org/)
- [English Docs](https://grid-masonry.sorune.org/docs/en/)
- [한국어 문서](https://grid-masonry.sorune.org/docs/ko/)

---

## PhotoGram

**PRIVATE · ACTIVE**

Spring 기반 사진 플랫폼을 제품 단위로 재구성하고 있는 프로젝트입니다.

주요 작업 영역:

- Spring MVC + Thymeleaf primary web
- React consumer
- authentication / authorization
- upload / attachment lifecycle
- normalized image metadata
- privacy-safe media delivery
- metadata-derived discovery
- browser acceptance
- health / readiness / observability

단순 CRUD보다 application / media / layout / web consumer / operations 경계를 분리하는 데 초점을 둡니다.

---

## CharaWeave

**PRIVATE · ACTIVE**

Platform-independent character runtime.

```text
Host
 ↓
Public Runtime API
 ↓
Runtime Core
 ↓
Ports
 ↓
Platform / Renderer Adapters
```

- headless runtime facade
- behavior / autonomy orchestration
- browser runtime and motion
- React host binding
- presentation / interaction boundary
- stable / public / internal package contracts

---

## PaaS Platform

**PRIVATE · ACTIVE / NON-PRODUCTION**

개인 인프라를 기반으로 deployment, runtime observation, access control을 다루기 위한 control plane입니다.

- domain / API / projection boundary
- authentication / RBAC / audit
- bounded operations contract
- infrastructure authority와 control-plane authority 분리
- Git-backed desired state 유지

현재는 production PaaS로 표시하지 않습니다.

---

## Security Guard

**PRIVATE · ACTIVE / GO LEARNING**

독립적인 abuse-detection / security-decision service이자 Go 학습 프로젝트입니다.

```text
Observation
   ↓
Detection
   ↓
Decision
   ↓
Ban / Reputation
   ↓
Enforcement Adapter
```

보안 동작은 자동 차단 자체보다 deterministic / explainable / reviewable contract를 우선합니다.
