"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getRecoverableKeysForPeople = exports.completeRecovery = exports.cancelRecovery = exports.continueRecovery = exports.beginRecovery = exports.getRecoveryDetails = void 0;
var getRecoveryDetails = function(e, o, r) {
    return e.get("/api/v1/recover/" + encodeURIComponent(o) + "/" + r)
};
exports.getRecoveryDetails = getRecoveryDetails;
var beginRecovery = function(e, o) {
    return e.put("/api/v1/recover/begin/" + o.join(",")).then(function() {})
};
exports.beginRecovery = beginRecovery;
var continueRecovery = function(e, o) {
    return e.postUnencrypted("/api/v1/recover/continue", o).then(function() {})
};
exports.continueRecovery = continueRecovery;
var cancelRecovery = function(e, o) {
    return e.put("/api/v1/recover/cancel/" + o.join(",")).then(function() {})
};
exports.cancelRecovery = cancelRecovery;
var completeRecovery = function(e, o, r) {
    return e.put("/api/v1/recover/complete/" + o.join(","), r).then(function() {})
};
exports.completeRecovery = completeRecovery;
var getRecoverableKeysForPeople = function(e, o) {
    return e.get("/api/v1/recover/keys/" + o.join(","))
};
exports.getRecoverableKeysForPeople = getRecoverableKeysForPeople;