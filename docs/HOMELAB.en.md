<!-- GENERATED FILE — edit profile/* and run node scripts/render-profile.mjs -->

# Homelab / Operations

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

- separating application business logic from infrastructure placement
- Git-backed configuration and operational procedures
- treating monitoring as an operational contract
- including failure recovery in acceptance

## Public disclosure boundary

Public documents intentionally omit internal IPs, credentials, private routes, storage paths, and other topology details that would unnecessarily expand the attack surface.
