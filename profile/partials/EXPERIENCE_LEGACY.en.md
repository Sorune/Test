## Enterprise SI / SM — Legacy System Optimization

I improved a map-driven query bottleneck in a production legacy Java enterprise environment.

- evaluated runtime modernization and migration compatibility before changing production
- deferred production migration because of application-server and surrounding legacy-architecture constraints
- split a large query workload into independent request units
- reused client-side state / data for the same business state to reduce unnecessary server round trips
- improved response latency while minimizing production-architecture changes and regression risk

I prioritized operational stability and change risk over modernization for its own sake, and chose an approach that fit the existing environment.

Public documentation intentionally omits topology, interfaces, credentials, routes, and other details that could identify a client or internal system.
