"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getMonitoringStatus = exports.createMonitoringCheck = void 0;
var createMonitoringCheck = function(t, e) {
    return t.post("/api/v1/monitoring", e)
};
exports.createMonitoringCheck = createMonitoringCheck;
var getMonitoringStatus = function(t) {
    return t.get("/api/v1/monitoring/status")
};
exports.getMonitoringStatus = getMonitoringStatus;