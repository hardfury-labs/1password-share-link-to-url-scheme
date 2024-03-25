import {
    split
} from "lodash-es";
export var serverVersion;
export var setServerVersion = function(r) {
    return serverVersion = r
};
export var env;
export var setEnv = function(r) {
    return env = r
};
export var device;
export var clientDescriptor;
export var setDevice = function(r) {
    device = r;
    var e = Number.parseInt(r.clientVersion, 10) || 0;
    clientDescriptor = r.clientName + "/" + e
};
export var initializeDevice = setDevice;
export var isEdge = !1;
export var setIsEdge = function(r) {
    return isEdge = r
};
Array.prototype.count = function(r, e) {
    e || (e = this);
    for (var t = 0, n = 0; n < e.length; n++) r(e[n], n, e) && (t += 1);
    return t
}, String.prototype.toArray = function(r) {
    return "string" != typeof r && (r = this), split(r, "")
}, String.prototype.mask = function(r, e) {
    "string" != typeof e && (e = this);
    var t = r.toArray();
    return e.toArray().map(function(r) {
        return t.includes(r) ? r : ""
    }).join("")
};