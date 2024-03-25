"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, i, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return i[t]
            }
        })
    } : function(e, i, t, n) {
        void 0 === n && (n = t), e[n] = i[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, i) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: i
        })
    } : function(e, i) {
        e.default = i
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var i = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(i, e, t);
        return __setModuleDefault(i, e), i
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteVerifiedDomain = exports.updateVerifiedDomain = exports.getVerifiedDomains = exports.completeDomainVerification = exports.beginDomainVerification = void 0;
var api = __importStar(require("../api")),
    beginDomainVerification = function(e, i, t, n) {
        return api.beginDomainVerification(e.session, i, t, n || "")
    };
exports.beginDomainVerification = beginDomainVerification;
var completeDomainVerification = function(e, i, t, n) {
    return api.completeDomainVerification(e.session, i, t, n)
};
exports.completeDomainVerification = completeDomainVerification;
var getVerifiedDomains = function(e) {
    return api.getVerifiedDomains(e.session)
};
exports.getVerifiedDomains = getVerifiedDomains;
var updateVerifiedDomain = function(e, i) {
    return api.updateVerifiedDomain(e.session, i)
};
exports.updateVerifiedDomain = updateVerifiedDomain;
var deleteVerifiedDomain = function(e, i) {
    return api.deleteVerifiedDomain(e.session, i)
};
exports.deleteVerifiedDomain = deleteVerifiedDomain;