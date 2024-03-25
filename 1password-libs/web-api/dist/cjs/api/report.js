"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, o = arguments.length; r < o; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
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
}), exports.getAccountReportCSV = exports.getOldDevicesReport = exports.getOverviewReport = exports.getAccountReport = exports.getVaultsReport = exports.getVaultReport = exports.getItemReportWithFilters = exports.getItemReportWithCursors = exports.getUserReport = exports.isValidReportParams = exports.ReportUser = exports.ReportSectionUserItemUsage = exports.ReportUserItemUsage = exports.ReportSectionUserOverview = void 0;
var t = __importStar(require("io-ts")),
    lodash_es_1 = require("lodash-es"),
    util_1 = require("../util"),
    person_1 = require("./person"),
    time_period_1 = require("./time_period"),
    util = __importStar(require("./util")),
    vault_1 = require("./vault"),
    vault_item_1 = require("./vault_item");
exports.ReportSectionUserOverview = t.readonly(t.type({
    user: person_1.Person,
    groupCount: t.number,
    vaultCount: t.number,
    itemCount: t.number
}), "ReportSectionUserOverview"), exports.ReportUserItemUsage = t.readonly(t.type({
    vaultUuid: t.string,
    itemUuid: t.string,
    lastUsedAt: t.string,
    lastUsedVersion: t.number
}), "ReportUserItemUsage"), exports.ReportSectionUserItemUsage = t.readonly(t.type({
    itemUsages: t.readonlyArray(exports.ReportUserItemUsage),
    vaults: t.readonlyArray(vault_1.Vault),
    vaultItemsByVault: t.record(t.string, t.readonlyArray(vault_item_1.VaultItem))
}), "ReportSectionUserItemUsage"), exports.ReportUser = t.readonly(t.partial({
    overview: exports.ReportSectionUserOverview,
    itemUsage: exports.ReportSectionUserItemUsage
}), "ReportUser");
var isValidReportParams = function(e) {
    return "itemUuid" in e && util_1.isValidItemUuid(e.itemUuid) ? util_1.isValidVaultUuid(e.vaultUuid) : "vaultUuid" in e && util_1.isValidVaultUuid(e.vaultUuid) || "userUuid" in e && util_1.isValidUserUuid(e.userUuid)
};
exports.isValidReportParams = isValidReportParams;
var getUserReport = function(e, t, r) {
    return e.get("/api/v1/report/user/" + t + "?sections=" + r.join(",")).then(util_1.unsafeDecodeAs(exports.ReportUser))
};
exports.getUserReport = getUserReport;
var getItemReportWithCursors = function(e, t, r) {
    var o = util.dataToParamString(__assign(__assign({}, lodash_es_1.mapKeys(t, function(e, t) {
        return lodash_es_1.kebabCase(t)
    })), {
        cursor: r.earlier
    }));
    return e.get("/api/v1/report/itemusage/history" + o)
};
exports.getItemReportWithCursors = getItemReportWithCursors;
var getItemReportWithFilters = function(e, t, r) {
    var o = util.dataToParamString(__assign(__assign({}, lodash_es_1.mapKeys(t, function(e, t) {
        return lodash_es_1.kebabCase(t)
    })), {
        date: r.date.toISOString(),
        todate: time_period_1.timePeriodToDate(r.toDate).toISOString(),
        limit: r.limit
    }));
    return e.get("/api/v1/report/itemusage/history" + o)
};
exports.getItemReportWithFilters = getItemReportWithFilters;
var getVaultReport = function(e, t, r) {
    return e.get("/api/v1/report/vault/" + t + "?sections=" + r.join(","))
};
exports.getVaultReport = getVaultReport;
var getVaultsReport = function(e, t, r) {
    var o = "/api/v1/report/vaults/" + t;
    return r.length > 0 && (o += "?attrs=" + r.join(",")), e.get(o)
};
exports.getVaultsReport = getVaultsReport;
var getAccountReport = function(e, t) {
    return e.get("/api/v2/report/account?sections=" + t.join(","))
};
exports.getAccountReport = getAccountReport;
var getOverviewReport = function(e, t) {
    return e.get("/api/v1/report/overview?sections=" + t.join(","))
};
exports.getOverviewReport = getOverviewReport;
var getOldDevicesReport = function(e) {
    return e.get("/api/v1/report/devices/old")
};
exports.getOldDevicesReport = getOldDevicesReport;
var getAccountReportCSV = function(e) {
    return e.get("/api/v1/report/account/csv")
};
exports.getAccountReportCSV = getAccountReportCSV;