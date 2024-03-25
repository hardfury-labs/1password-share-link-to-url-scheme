"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportOutdatedBrowser = void 0;
var reportOutdatedBrowser = function(r, e) {
    return r.post("/api/v1/report-outdated-browser", e).then(function() {})
};
exports.reportOutdatedBrowser = reportOutdatedBrowser;