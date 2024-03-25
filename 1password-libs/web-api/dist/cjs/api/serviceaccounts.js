"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, c) {
        void 0 === c && (c = r), Object.defineProperty(e, c, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, c) {
        void 0 === c && (c = r), e[c] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getServiceAccount = exports.createServiceAccountPreflight = exports.CreateServiceAccountPreflightResponse = exports.getServiceAccounts = exports.getIntegrations = exports.createServiceAccountV3 = exports.GetIntegrationsResponse = exports.Integration = exports.GetServiceAccountsResponse = exports.ServiceAccountUser = exports.ServiceAccountsPartialUser = exports.ServiceAccount = exports.ServiceAccountBillables = exports.ServiceAccountVaultAccess = exports.ServiceAccountType = void 0;
var ServiceAccountType, t = __importStar(require("io-ts")),
    shared_1 = require("../shared"),
    util_1 = require("../util"),
    activity_1 = require("./activity"),
    partial_user_1 = require("./partial_user"),
    person_1 = require("./person"),
    serviceaccount_tokens_1 = require("./serviceaccount_tokens"),
    user_1 = require("./user"),
    util_2 = require("./util"),
    vault_1 = require("./vault");
! function(e) {
    e.Provisioning = "P", e.Connect = "C", e.DataStreaming = "D", e.CLI = "X", e.UserManaged = "M", e.NA = "", e.Slack = "slack", e.Duo = "duo", e.MaskedEmails = "MaskedEmails"
}(ServiceAccountType = exports.ServiceAccountType || (exports.ServiceAccountType = {})), exports.ServiceAccountVaultAccess = t.type({
    totalVaults: t.number,
    displayable: t.array(vault_1.VaultAccess)
}, "ServiceAccountVaultAccess"), exports.ServiceAccountBillables = t.type({
    credits: t.number
}, "ServiceAccountBillables"), exports.ServiceAccount = t.intersection([person_1.BasePerson, t.readonly(t.type({
    creatorUuid: t.string,
    serviceAccountType: util_1.fromStringEnum(ServiceAccountType, "ServiceAccountType")
})), t.partial({
    tokens: t.readonlyArray(serviceaccount_tokens_1.ServiceAccountToken),
    serviceAccountVaultAccess: t.readonly(exports.ServiceAccountVaultAccess),
    activities: t.readonlyArray(activity_1.LegacyActivity),
    billables: t.readonly(exports.ServiceAccountBillables)
})], "ServiceAccount"), exports.ServiceAccountsPartialUser = t.intersection([partial_user_1.PartialUser, t.readonly(t.type({
    createdAt: t.string,
    creatorUuid: t.string,
    serviceAccountType: util_1.fromStringEnum(ServiceAccountType, "ServiceAccountType")
})), t.partial({
    canActiveUserViewDetails: t.boolean
})], "ServiceAccountsPartialUser"), exports.ServiceAccountUser = t.intersection([user_1.User, t.readonly(t.type({
    createdAt: t.string,
    creatorUuid: t.string,
    serviceAccountType: util_1.fromStringEnum(ServiceAccountType, "ServiceAccountType"),
    tokensVersion: t.number
})), t.partial({
    tokens: t.array(serviceaccount_tokens_1.ServiceAccountToken),
    devices: t.array(shared_1.Device.Type),
    serviceAccountVaultAccess: t.readonly(exports.ServiceAccountVaultAccess),
    activities: t.readonlyArray(activity_1.LegacyActivity),
    billables: t.readonly(exports.ServiceAccountBillables)
})], "ServiceAccountUser"), exports.GetServiceAccountsResponse = t.readonly(t.type({
    serviceAccounts: t.array(exports.ServiceAccountsPartialUser)
}), "GetServiceAccountsResponse"), exports.Integration = t.readonly(t.intersection([t.type({
    serviceAccount: exports.ServiceAccountUser
}), t.partial({
    devices: t.array(shared_1.Device.Type)
})], "Integration")), exports.GetIntegrationsResponse = t.readonly(t.intersection([t.type({
    integrations: t.array(exports.Integration)
}), t.partial({
    releases: shared_1.AppReleases
})], "GetIntegrationsResponse"));
var createServiceAccountV3 = function(e, t) {
    return e.post("/api/v3/serviceaccounts", t)
};
exports.createServiceAccountV3 = createServiceAccountV3;
var getIntegrations = function(e) {
    return e.get("/api/v1/integrations?attrs=vault-access,groups,devices,app-releases").then(util_1.unsafeDecodeAs(exports.GetIntegrationsResponse))
};
exports.getIntegrations = getIntegrations;
var getServiceAccounts = function(e) {
    return e.get("/api/v1/serviceaccounts").then(util_1.unsafeDecodeAs(exports.GetServiceAccountsResponse))
};
exports.getServiceAccounts = getServiceAccounts, exports.CreateServiceAccountPreflightResponse = t.readonly(t.type({
    email: t.string,
    token: t.string,
    uuid: t.string
}, "CreateServiceAccountPreflightResponse"));
var createServiceAccountPreflight = function(e, t) {
    var r = encodeURI(t);
    return e.get("/api/v1/serviceaccounts/preflight/" + r)
};
exports.createServiceAccountPreflight = createServiceAccountPreflight;
var getServiceAccount = function(e, t, r) {
    var c = "/api/v1/serviceaccount/" + t + (r.length > 0 ? util_2.dataToParamString({
        attrs: r
    }) : "");
    return e.get(c).then(util_1.unsafeDecodeAs(exports.ServiceAccount))
};
exports.getServiceAccount = getServiceAccount;