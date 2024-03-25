"use strict";
var __assign = this && this.__assign || function() {
    return (__assign = Object.assign || function(t) {
        for (var e, a = 1, r = arguments.length; a < r; a++)
            for (var u in e = arguments[a]) Object.prototype.hasOwnProperty.call(e, u) && (t[u] = e[u]);
        return t
    }).apply(this, arguments)
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.vaultItemTemplateToAPI = exports.vaultItemTemplateFromAPI = exports.vaultItemTemplateAttrsFromAPI = exports.vaultItemTemplatesFromAPI = void 0;
var date_1 = require("./date"),
    vaultItemTemplatesFromAPI = function(t) {
        return t.map(exports.vaultItemTemplateFromAPI).sort(function(t, e) {
            return t.uuid > e.uuid ? 1 : t.uuid < e.uuid ? -1 : 0
        })
    };
exports.vaultItemTemplatesFromAPI = vaultItemTemplatesFromAPI;
var vaultItemTemplateAttrsFromAPI = function(t, e) {
    return void 0 === t && (t = ""), void 0 === e && (e = {}), __assign({
        uuid: t,
        localizedStrings: {},
        contents: []
    }, e)
};
exports.vaultItemTemplateAttrsFromAPI = vaultItemTemplateAttrsFromAPI;
var vaultItemTemplateFromAPI = function(t) {
    var e = t.uuid || t.templateUuid || "",
        a = exports.vaultItemTemplateAttrsFromAPI(e, t.attrs);
    return {
        uuid: e,
        createdAt: date_1.dateFromAPI(t.createdAt),
        updatedAt: date_1.dateFromAPI(t.updatedAt),
        state: t.state || "",
        version: t.version || 0,
        singularName: t.singularName,
        pluralName: t.pluralName,
        icon: t.icon,
        sidebarIcon: t.sourceIcon,
        activeItemCount: t.activeItemCount || 0,
        attrs: a
    }
};
exports.vaultItemTemplateFromAPI = vaultItemTemplateFromAPI;
var vaultItemTemplateToAPI = function(t) {
    var e = {
        uuid: t.uuid,
        state: t.state,
        version: t.version,
        singularName: t.singularName,
        pluralName: t.pluralName,
        icon: t.icon,
        sourceIcon: t.sidebarIcon,
        attrs: t.attrs
    };
    return t.createdAt && (e.createdAt = date_1.dateToAPI(t.createdAt)), t.updatedAt && (e.updatedAt = date_1.dateToAPI(t.updatedAt)), e
};
exports.vaultItemTemplateToAPI = vaultItemTemplateToAPI;