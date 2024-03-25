"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUserProvisionedKeys = exports.completeUserProvision = exports.getProvisionedPersonalVault = exports.acceptProvision = exports.getProvisionDetails = exports.getResendDetails = exports.resendAllUsersProvision = exports.resendUserProvision = exports.startUserProvision = exports.createProvisionUser = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("./util"),
    ResendDetails = t.readonly(t.type({
        lastResendAt: t.union([t.string, t.undefined]),
        resendAllCooldown: t.number
    })),
    createProvisionUser = function(e, r) {
        return e.post("/api/v1/provision/user", r)
    };
exports.createProvisionUser = createProvisionUser;
var startUserProvision = function(e, r, t) {
    return e.put("/api/v1/provision/user/" + encodeURIComponent(r) + "/start" + util_1.dataToParamString(t)).then(function() {})
};
exports.startUserProvision = startUserProvision;
var resendUserProvision = function(e, r) {
    return e.put("/api/v1/provision/resend", r).then(function() {})
};
exports.resendUserProvision = resendUserProvision;
var resendAllUsersProvision = function(e) {
    return e.put("/api/v1/provision/resend-all", {}).then(function() {})
};
exports.resendAllUsersProvision = resendAllUsersProvision;
var getResendDetails = function(e) {
    return e.get("/api/v1/provision/resend-all/details")
};
exports.getResendDetails = getResendDetails;
var getProvisionDetails = function(e, r, t) {
    return e.get("/api/v1/provision/user/" + encodeURIComponent(r) + "/" + t)
};
exports.getProvisionDetails = getProvisionDetails;
var acceptProvision = function(e, r) {
    return e.postUnencrypted("/api/v1/provision/user/accept", r).then(function() {})
};
exports.acceptProvision = acceptProvision;
var getProvisionedPersonalVault = function(e, r) {
    return e.get("/api/v1/provision/user/" + encodeURIComponent(r) + "/personalvault")
};
exports.getProvisionedPersonalVault = getProvisionedPersonalVault;
var completeUserProvision = function(e, r, t) {
    return e.put("/api/v1/provision/user/" + encodeURIComponent(r) + "/complete", t).then(function() {})
};
exports.completeUserProvision = completeUserProvision;
var getUserProvisionedKeys = function(e, r) {
    return e.get("/api/v1/provision/user/" + encodeURIComponent(r) + "/keys")
};
exports.getUserProvisionedKeys = getUserProvisionedKeys;