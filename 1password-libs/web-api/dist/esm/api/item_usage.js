export var reportItemUsage = function(e, t) {
    return e.post("/api/v2/user/itemusage", t).then(function() {})
};