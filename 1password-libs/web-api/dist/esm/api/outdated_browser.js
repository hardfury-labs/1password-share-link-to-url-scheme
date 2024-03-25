export var reportOutdatedBrowser = function(r, t) {
    return r.post("/api/v1/report-outdated-browser", t).then(function() {})
};