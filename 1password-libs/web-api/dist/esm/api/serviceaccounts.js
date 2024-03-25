import * as t from "io-ts";
import {
    Device,
    AppReleases
} from "../shared";
import {
    unsafeDecodeAs,
    fromStringEnum
} from "../util";
import {
    LegacyActivity
} from "./activity";
import {
    PartialUser
} from "./partial_user";
import {
    BasePerson
} from "./person";
import {
    ServiceAccountToken
} from "./serviceaccount_tokens";
import {
    User
} from "./user";
import {
    dataToParamString
} from "./util";
import {
    VaultAccess
} from "./vault";
export var ServiceAccountType;
! function(e) {
    e.Provisioning = "P", e.Connect = "C", e.DataStreaming = "D", e.CLI = "X", e.UserManaged = "M", e.NA = "", e.Slack = "slack", e.Duo = "duo", e.MaskedEmails = "MaskedEmails"
}(ServiceAccountType || (ServiceAccountType = {}));
export var ServiceAccountVaultAccess = t.type({
    totalVaults: t.number,
    displayable: t.array(VaultAccess)
}, "ServiceAccountVaultAccess");
export var ServiceAccountBillables = t.type({
    credits: t.number
}, "ServiceAccountBillables");
export var ServiceAccount = t.intersection([BasePerson, t.readonly(t.type({
    creatorUuid: t.string,
    serviceAccountType: fromStringEnum(ServiceAccountType, "ServiceAccountType")
})), t.partial({
    tokens: t.readonlyArray(ServiceAccountToken),
    serviceAccountVaultAccess: t.readonly(ServiceAccountVaultAccess),
    activities: t.readonlyArray(LegacyActivity),
    billables: t.readonly(ServiceAccountBillables)
})], "ServiceAccount");
export var ServiceAccountsPartialUser = t.intersection([PartialUser, t.readonly(t.type({
    createdAt: t.string,
    creatorUuid: t.string,
    serviceAccountType: fromStringEnum(ServiceAccountType, "ServiceAccountType")
})), t.partial({
    canActiveUserViewDetails: t.boolean
})], "ServiceAccountsPartialUser");
export var ServiceAccountUser = t.intersection([User, t.readonly(t.type({
    createdAt: t.string,
    creatorUuid: t.string,
    serviceAccountType: fromStringEnum(ServiceAccountType, "ServiceAccountType"),
    tokensVersion: t.number
})), t.partial({
    tokens: t.array(ServiceAccountToken),
    devices: t.array(Device.Type),
    serviceAccountVaultAccess: t.readonly(ServiceAccountVaultAccess),
    activities: t.readonlyArray(LegacyActivity),
    billables: t.readonly(ServiceAccountBillables)
})], "ServiceAccountUser");
export var GetServiceAccountsResponse = t.readonly(t.type({
    serviceAccounts: t.array(ServiceAccountsPartialUser)
}), "GetServiceAccountsResponse");
export var Integration = t.readonly(t.intersection([t.type({
    serviceAccount: ServiceAccountUser
}), t.partial({
    devices: t.array(Device.Type)
})], "Integration"));
export var GetIntegrationsResponse = t.readonly(t.intersection([t.type({
    integrations: t.array(Integration)
}), t.partial({
    releases: AppReleases
})], "GetIntegrationsResponse"));
export var createServiceAccountV3 = function(e, t) {
    return e.post("/api/v3/serviceaccounts", t)
};
export var getIntegrations = function(e) {
    return e.get("/api/v1/integrations?attrs=vault-access,groups,devices,app-releases").then(unsafeDecodeAs(GetIntegrationsResponse))
};
export var getServiceAccounts = function(e) {
    return e.get("/api/v1/serviceaccounts").then(unsafeDecodeAs(GetServiceAccountsResponse))
};
export var CreateServiceAccountPreflightResponse = t.readonly(t.type({
    email: t.string,
    token: t.string,
    uuid: t.string
}, "CreateServiceAccountPreflightResponse"));
export var createServiceAccountPreflight = function(e, t) {
    var r = encodeURI(t);
    return e.get("/api/v1/serviceaccounts/preflight/" + r)
};
export var getServiceAccount = function(e, t, r) {
    var c = "/api/v1/serviceaccount/" + t + (r.length > 0 ? dataToParamString({
        attrs: r
    }) : "");
    return e.get(c).then(unsafeDecodeAs(ServiceAccount))
};