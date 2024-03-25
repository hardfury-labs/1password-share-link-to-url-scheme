"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportItemUsage = void 0;
var reportItemUsage = function(e, t) {
    return e.post("/api/v2/user/itemusage", t).then(function() {})
};
exports.reportItemUsage = reportItemUsage;