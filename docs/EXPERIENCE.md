<!-- GENERATED FILE — edit profile/* and run node scripts/render-profile.mjs -->

# Experience / Background

[한국어](./EXPERIENCE.md) · [English](./EXPERIENCE.en.md) · [← 프로필](../README.md)

## Industrial Control / Automation

웹 개발 이전에는 LabVIEW 기반 산업 제어 및 관제 시스템을 설계·구현했습니다.

총 **18개 현장**에 실제 적용했으며, 센서 입력과 제어 출력이 연결되는 production field system을 다뤘습니다.

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

## Enterprise SI / SM — Legacy System Optimization

운영 중인 legacy Java enterprise environment에서 지도 기반 조회 성능 병목을 개선했습니다.

- runtime modernization 및 migration compatibility를 사전 검증
- application server와 surrounding legacy architecture 제약으로 production migration은 보류
- 대형 조회 workload를 독립 요청 단위로 분리
- 동일 business state에서는 client-side state / data를 재사용해 불필요한 server round trip 감소
- 기존 production architecture 변경을 최소화하면서 응답 지연과 regression risk를 함께 줄이는 방향으로 개선

최신화 자체보다 운영 안정성과 변경 위험을 우선해, 현재 환경에서 적용 가능한 우회 구조를 선택했습니다.

공개 문서에는 고객사나 내부 시스템을 식별할 수 있는 topology, interface, credential, route 등은 포함하지 않습니다.

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
