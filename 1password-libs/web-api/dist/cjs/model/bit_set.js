"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
        void 0 === r && (r = i), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    } : function(e, t, i, r) {
        void 0 === r && (r = i), e[r] = t[i]
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
            for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && __createBinding(t, e, i);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.BitSet = void 0;
var BitSet, SafeBitwise = __importStar(require("./safe_bitwise"));
! function(e) {
    e.empty = function() {
        return 0
    }, e.equals = function(e, t) {
        return e === t
    }, e.fromHex = function(e) {
        return Number.parseInt(e, 16)
    }, e.toHex = function(e) {
        return e.toString(16)
    }, e.combine = SafeBitwise.orAll, e.disable = SafeBitwise.andNot, e.enable = SafeBitwise.or, e.includes = SafeBitwise.includesAll, e.includesAny = SafeBitwise.includesAny, e.toggle = SafeBitwise.xor
}(BitSet = exports.BitSet || (exports.BitSet = {}));