import {
    dataToParamString
} from "./util";
export var sendPackages = function(e, a) {
    return e.patch("/api/v1/packages", a).then(function() {})
};
export var getIncomingPackages = function(e) {
    return e.get("/api/v1/packages/incoming")
};
export var getIncomingPackage = function(e, a) {
    return e.get("/api/v1/package/" + a)
};
export var getPackagesForVaultItem = function(e, a, n) {
    return e.get("/api/v1/packages/sent/" + a + "/" + n)
};
export var removePackages = function(e, a) {
    return e.delete("/api/v1/packages", a).then(function() {})
};
export var ExpiresIn;
! function(e) {
    e[e.OneDay = 86400] = "OneDay", e[e.OneWeek = 604800] = "OneWeek", e[e.OneMonth = 2678400] = "OneMonth", e[e.TwoMonths = 5356800] = "TwoMonths"
}(ExpiresIn || (ExpiresIn = {}));
export var sendPackageV2 = function(e, a) {
    return e.post("/api/v2/packages", a)
};
export var getIncomingPackagesV2 = function(e) {
    return e.get("/api/v2/packages")
};
export var getMoreIncomingPackages = function(e, a) {
    var n = dataToParamString(a);
    return e.get("/api/v2/packages" + n)
};
export var getIncomingPackageV2 = function(e, a) {
    return e.get("/api/v2/packages/" + a)
};
export var markPackageAsRead = function(e, a) {
    return e.patch("/api/v2/packages/" + a + "/read")
};
export var removePackageV2 = function(e, a) {
    return e.delete("/api/v2/packages/" + a)
};