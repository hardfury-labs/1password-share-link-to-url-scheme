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
var api = __importStar(require("../api")),
    client_restrictions_1 = require("../api/client_restrictions");
Object.defineProperty(exports, "ModernAppVersion", {
    enumerable: !0,
    get: function() {
        return client_restrictions_1.ModernAppVersion
    }
});
var getModernAppVersions = function(e) {
    return api.getModernAppVersions(e.session)
};
exports.getModernAppVersions = getModernAppVersions;