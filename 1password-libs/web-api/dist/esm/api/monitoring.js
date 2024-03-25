export var createMonitoringCheck = function(t, n) {
    return t.post("/api/v1/monitoring", n)
};
export var getMonitoringStatus = function(t) {
    return t.get("/api/v1/monitoring/status")
};