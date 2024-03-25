export var getRecoveryDetails = function(e, n, r) {
    return e.get("/api/v1/recover/" + encodeURIComponent(n) + "/" + r)
};
export var beginRecovery = function(e, n) {
    return e.put("/api/v1/recover/begin/" + n.join(",")).then(function() {})
};
export var continueRecovery = function(e, n) {
    return e.postUnencrypted("/api/v1/recover/continue", n).then(function() {})
};
export var cancelRecovery = function(e, n) {
    return e.put("/api/v1/recover/cancel/" + n.join(",")).then(function() {})
};
export var completeRecovery = function(e, n, r) {
    return e.put("/api/v1/recover/complete/" + n.join(","), r).then(function() {})
};
export var getRecoverableKeysForPeople = function(e, n) {
    return e.get("/api/v1/recover/keys/" + n.join(","))
};