export var rollUserKeyset = function(e, t) {
    return e.post("/api/v1/rollkeyset", t).then(function() {})
};