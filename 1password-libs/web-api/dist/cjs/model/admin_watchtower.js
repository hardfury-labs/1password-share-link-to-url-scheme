"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, u) {
        void 0 === u && (u = r), Object.defineProperty(t, u, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, u) {
        void 0 === u && (u = r), t[u] = e[r]
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
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.WatchtowerDataStructureV1 = exports.WatchtowerStructureVersion = void 0;
var t = __importStar(require("io-ts"));
exports.WatchtowerStructureVersion = 1, exports.WatchtowerDataStructureV1 = t.readonly(t.intersection([t.type({
    cw: t.number,
    rp: t.number,
    wp: t.number,
    i2fa: t.number,
    exp: t.number,
    tot: t.number
}), t.partial({
    uw: t.number,
    vp: t.number
})]));