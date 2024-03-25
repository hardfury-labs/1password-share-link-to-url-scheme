"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, a, r) {
        void 0 === r && (r = a), Object.defineProperty(t, r, {
            enumerable: !0,
            get: function() {
                return e[a]
            }
        })
    } : function(t, e, a, r) {
        void 0 === r && (r = a), t[r] = e[a]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var a in t) "default" !== a && Object.prototype.hasOwnProperty.call(t, a) && __createBinding(e, t, a);
        return __setModuleDefault(e, t), e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.changeTemplatesState = exports.postTemplate = exports.getDefaultTemplate = exports.getAccountTemplates = exports.VaultItemTemplate = void 0;
var t = __importStar(require("io-ts"));
exports.VaultItemTemplate = t.intersection([t.type({
    uuid: t.string,
    singularName: t.string,
    pluralName: t.string,
    icon: t.string,
    sourceIcon: t.string
}), t.partial({
    templateUuid: t.string,
    createdAt: t.string,
    updatedAt: t.string,
    state: t.string,
    version: t.number,
    activeItemCount: t.number,
    attrs: t.any
})]);
var getAccountTemplates = function(t, e) {
    var a = "/api/v3/templates";
    return e && (a += "/all"), t.get(a)
};
exports.getAccountTemplates = getAccountTemplates;
var getDefaultTemplate = function(t, e) {
    return t.get("/api/v2/template/default/" + e)
};
exports.getDefaultTemplate = getDefaultTemplate;
var postTemplate = function(t, e) {
    return t.post("/api/v1/template", e).then(function() {})
};
exports.postTemplate = postTemplate;
var changeTemplatesState = function(t, e, a) {
    var r = "/api/v1/template/" + e.join(",") + "/state/" + a;
    return t.patch(r).then(function() {})
};
exports.changeTemplatesState = changeTemplatesState;