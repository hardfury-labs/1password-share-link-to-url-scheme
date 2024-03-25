import * as t from "io-ts";
import {
    dataToParamString
} from "./util";
var ResendDetails = t.readonly(t.type({
    lastResendAt: t.union([t.string, t.undefined]),
    resendAllCooldown: t.number
}));
export var createProvisionUser = function(e, n) {
    return e.post("/api/v1/provision/user", n)
};
export var startUserProvision = function(e, n, o) {
    return e.put("/api/v1/provision/user/" + encodeURIComponent(n) + "/start" + dataToParamString(o)).then(function() {})
};
export var resendUserProvision = function(e, n) {
    return e.put("/api/v1/provision/resend", n).then(function() {})
};
export var resendAllUsersProvision = function(e) {
    return e.put("/api/v1/provision/resend-all", {}).then(function() {})
};
export var getResendDetails = function(e) {
    return e.get("/api/v1/provision/resend-all/details")
};
export var getProvisionDetails = function(e, n, o) {
    return e.get("/api/v1/provision/user/" + encodeURIComponent(n) + "/" + o)
};
export var acceptProvision = function(e, n) {
    return e.postUnencrypted("/api/v1/provision/user/accept", n).then(function() {})
};
export var getProvisionedPersonalVault = function(e, n) {
    return e.get("/api/v1/provision/user/" + encodeURIComponent(n) + "/personalvault")
};
export var completeUserProvision = function(e, n, o) {
    return e.put("/api/v1/provision/user/" + encodeURIComponent(n) + "/complete", o).then(function() {})
};
export var getUserProvisionedKeys = function(e, n) {
    return e.get("/api/v1/provision/user/" + encodeURIComponent(n) + "/keys")
};