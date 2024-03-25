"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, n, p) {
        void 0 === p && (p = n), Object.defineProperty(e, p, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    } : function(e, t, n, p) {
        void 0 === p && (p = n), e[p] = t[n]
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
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.AppReleases = exports.AppRelease = exports.AppBuild = void 0;
var t = __importStar(require("io-ts"));
exports.AppBuild = t.readonly(t.type({
    version: t.string,
    url: t.union([t.string, t.undefined]),
    buildnum: t.number,
    bbn: t.union([t.string, t.undefined])
}, "AppBuild")), exports.AppRelease = t.readonly(t.type({
    release: t.union([exports.AppBuild, t.undefined]),
    beta: t.union([exports.AppBuild, t.undefined])
}, "AppRelease")), exports.AppReleases = t.readonly(t.type({
    B: t.union([exports.AppRelease, t.undefined]),
    CLI: t.union([exports.AppRelease, t.undefined]),
    KNOX: t.union([exports.AppRelease, t.undefined]),
    OPA4: t.union([exports.AppRelease, t.undefined]),
    OPI4: t.union([exports.AppRelease, t.undefined]),
    OPM4: t.union([exports.AppRelease, t.undefined]),
    OPM7: t.union([exports.AppRelease, t.undefined]),
    OPM8: t.union([exports.AppRelease, t.undefined]),
    OPW4: t.union([exports.AppRelease, t.undefined]),
    OPW8: t.union([exports.AppRelease, t.undefined]),
    SCIM: t.union([exports.AppRelease, t.undefined])
}, "AppReleases"));