var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var e, r = 1, i = arguments.length; r < i; r++)
            for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t
    }).apply(this, arguments)
};
import * as t from "io-ts";
import {
    kebabCase,
    mapKeys
} from "lodash-es";
import {
    isValidItemUuid,
    isValidUserUuid,
    isValidVaultUuid,
    unsafeDecodeAs
} from "../util";
import {
    Person
} from "./person";
import {
    timePeriodToDate
} from "./time_period";
import * as util from "./util";
import {
    Vault
} from "./vault";
import {
    VaultItem
} from "./vault_item";
export var ReportSectionUserOverview = t.readonly(t.type({
    user: Person,
    groupCount: t.number,
    vaultCount: t.number,
    itemCount: t.number
}), "ReportSectionUserOverview");
export var ReportUserItemUsage = t.readonly(t.type({
    vaultUuid: t.string,
    itemUuid: t.string,
    lastUsedAt: t.string,
    lastUsedVersion: t.number
}), "ReportUserItemUsage");
export var ReportSectionUserItemUsage = t.readonly(t.type({
    itemUsages: t.readonlyArray(ReportUserItemUsage),
    vaults: t.readonlyArray(Vault),
    vaultItemsByVault: t.record(t.string, t.readonlyArray(VaultItem))
}), "ReportSectionUserItemUsage");
export var ReportUser = t.readonly(t.partial({
    overview: ReportSectionUserOverview,
    itemUsage: ReportSectionUserItemUsage
}), "ReportUser");
export var isValidReportParams = function(t) {
    return "itemUuid" in t && isValidItemUuid(t.itemUuid) ? isValidVaultUuid(t.vaultUuid) : "vaultUuid" in t && isValidVaultUuid(t.vaultUuid) || "userUuid" in t && isValidUserUuid(t.userUuid)
};
export var getUserReport = function(t, e, r) {
    return t.get("/api/v1/report/user/" + e + "?sections=" + r.join(",")).then(unsafeDecodeAs(ReportUser))
};
export var getItemReportWithCursors = function(t, e, r) {
    var i = util.dataToParamString(__assign(__assign({}, mapKeys(e, function(t, e) {
        return kebabCase(e)
    })), {
        cursor: r.earlier
    }));
    return t.get("/api/v1/report/itemusage/history" + i)
};
export var getItemReportWithFilters = function(t, e, r) {
    var i = util.dataToParamString(__assign(__assign({}, mapKeys(e, function(t, e) {
        return kebabCase(e)
    })), {
        date: r.date.toISOString(),
        todate: timePeriodToDate(r.toDate).toISOString(),
        limit: r.limit
    }));
    return t.get("/api/v1/report/itemusage/history" + i)
};
export var getVaultReport = function(t, e, r) {
    return t.get("/api/v1/report/vault/" + e + "?sections=" + r.join(","))
};
export var getVaultsReport = function(t, e, r) {
    var i = "/api/v1/report/vaults/" + e;
    return r.length > 0 && (i += "?attrs=" + r.join(",")), t.get(i)
};
export var getAccountReport = function(t, e) {
    return t.get("/api/v2/report/account?sections=" + e.join(","))
};
export var getOverviewReport = function(t, e) {
    return t.get("/api/v1/report/overview?sections=" + e.join(","))
};
export var getOldDevicesReport = function(t) {
    return t.get("/api/v1/report/devices/old")
};
export var getAccountReportCSV = function(t) {
    return t.get("/api/v1/report/account/csv")
};