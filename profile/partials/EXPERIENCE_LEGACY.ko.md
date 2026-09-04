## Enterprise SI / SM — Legacy System Optimization

운영 중인 legacy Java enterprise environment에서 지도 기반 조회 성능 병목을 개선했습니다.

- runtime modernization 및 migration compatibility를 사전 검증
- application server와 surrounding legacy architecture 제약으로 production migration은 보류
- 대형 조회 workload를 독립 요청 단위로 분리
- 동일 business state에서는 client-side state / data를 재사용해 불필요한 server round trip 감소
- 기존 production architecture 변경을 최소화하면서 응답 지연과 regression risk를 함께 줄이는 방향으로 개선

최신화 자체보다 운영 안정성과 변경 위험을 우선해, 현재 환경에서 적용 가능한 우회 구조를 선택했습니다.

공개 문서에는 고객사나 내부 시스템을 식별할 수 있는 topology, interface, credential, route 등은 포함하지 않습니다.
