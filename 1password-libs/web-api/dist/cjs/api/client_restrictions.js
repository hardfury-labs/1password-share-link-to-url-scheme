"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
}), exports.getModernAppVersions = exports.ModernAppVersion = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util");
exports.ModernAppVersion = t.readonly(t.intersection([t.type({
    clientName: t.string,
    version: t.string
}), t.partial({
    osVersion: t.string
})]));
var getModernAppVersions = function(e) {
    return e.get("/api/v1/modern-app-versions").then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(t.array(exports.ModernAppVersion))(e)
    })
};
exports.getModernAppVersions = getModernAppVersions;