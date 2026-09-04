# Homelab / Operations

[← Profile preview](../README.md)

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

```text
Applications / Services
          ↓
Container Runtime / Edge
          ↓
Metrics · Health · Alerts
          ↓
Storage · Backup · Restore
```

## Engineering focus

- application business logic와 infrastructure placement 책임 분리
- Git-backed configuration / operational procedures
- monitoring을 애플리케이션 부가 기능이 아니라 운영 계약으로 취급
- 장애 발생 후 복구 가능한지까지 acceptance 범위에 포함
- 개별 프로젝트보다 공통 infrastructure / observability authority를 우선

## Public disclosure boundary

프로필과 공개 문서에는 내부 IP, credential, private route, storage path 등 실제 공격 표면을 넓힐 수 있는 세부 topology는 공개하지 않습니다.
