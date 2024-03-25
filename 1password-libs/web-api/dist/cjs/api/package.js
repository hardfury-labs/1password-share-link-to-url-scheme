"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.removePackageV2 = exports.markPackageAsRead = exports.getIncomingPackageV2 = exports.getMoreIncomingPackages = exports.getIncomingPackagesV2 = exports.sendPackageV2 = exports.ExpiresIn = exports.removePackages = exports.getPackagesForVaultItem = exports.getIncomingPackage = exports.getIncomingPackages = exports.sendPackages = void 0;
var util_1 = require("./util"),
    sendPackages = function(e, a) {
        return e.patch("/api/v1/packages", a).then(function() {})
    };
exports.sendPackages = sendPackages;
var getIncomingPackages = function(e) {
    return e.get("/api/v1/packages/incoming")
};
exports.getIncomingPackages = getIncomingPackages;
var getIncomingPackage = function(e, a) {
    return e.get("/api/v1/package/" + a)
};
exports.getIncomingPackage = getIncomingPackage;
var getPackagesForVaultItem = function(e, a, t) {
    return e.get("/api/v1/packages/sent/" + a + "/" + t)
};
exports.getPackagesForVaultItem = getPackagesForVaultItem;
var ExpiresIn, removePackages = function(e, a) {
    return e.delete("/api/v1/packages", a).then(function() {})
};
exports.removePackages = removePackages,
    function(e) {
        e[e.OneDay = 86400] = "OneDay", e[e.OneWeek = 604800] = "OneWeek", e[e.OneMonth = 2678400] = "OneMonth", e[e.TwoMonths = 5356800] = "TwoMonths"
    }(ExpiresIn = exports.ExpiresIn || (exports.ExpiresIn = {}));
var sendPackageV2 = function(e, a) {
    return e.post("/api/v2/packages", a)
};
exports.sendPackageV2 = sendPackageV2;
var getIncomingPackagesV2 = function(e) {
    return e.get("/api/v2/packages")
};
exports.getIncomingPackagesV2 = getIncomingPackagesV2;
var getMoreIncomingPackages = function(e, a) {
    var t = util_1.dataToParamString(a);
    return e.get("/api/v2/packages" + t)
};
exports.getMoreIncomingPackages = getMoreIncomingPackages;
var getIncomingPackageV2 = function(e, a) {
    return e.get("/api/v2/packages/" + a)
};
exports.getIncomingPackageV2 = getIncomingPackageV2;
var markPackageAsRead = function(e, a) {
    return e.patch("/api/v2/packages/" + a + "/read")
};
exports.markPackageAsRead = markPackageAsRead;
var removePackageV2 = function(e, a) {
    return e.delete("/api/v2/packages/" + a)
};
exports.removePackageV2 = removePackageV2;