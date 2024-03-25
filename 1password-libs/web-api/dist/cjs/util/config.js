"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setIsEdge = exports.isEdge = exports.initializeDevice = exports.setDevice = exports.clientDescriptor = exports.device = exports.setEnv = exports.env = exports.setServerVersion = exports.serverVersion = void 0;
var lodash_es_1 = require("lodash-es"),
    setServerVersion = function(e) {
        return exports.serverVersion = e
    };
exports.setServerVersion = setServerVersion;
var setEnv = function(e) {
    return exports.env = e
};
exports.setEnv = setEnv;
var setDevice = function(e) {
    exports.device = e;
    var r = Number.parseInt(e.clientVersion, 10) || 0;
    exports.clientDescriptor = e.clientName + "/" + r
};
exports.setDevice = setDevice, exports.initializeDevice = exports.setDevice, exports.isEdge = !1;
var setIsEdge = function(e) {
    return exports.isEdge = e
};
exports.setIsEdge = setIsEdge, Array.prototype.count = function(e, r) {
    r || (r = this);
    for (var t = 0, s = 0; s < r.length; s++) e(r[s], s, r) && (t += 1);
    return t
}, String.prototype.toArray = function(e) {
    return "string" != typeof e && (e = this), lodash_es_1.split(e, "")
}, String.prototype.mask = function(e, r) {
    "string" != typeof r && (r = this);
    var t = e.toArray();
    return r.toArray().map(function(e) {
        return t.includes(e) ? e : ""
    }).join("")
};