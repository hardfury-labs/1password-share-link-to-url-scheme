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
    __exportStar = this && this.__exportStar || function(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || __createBinding(t, e, r)
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.JwtStandardClaims = exports.createToken = void 0, __exportStar(require("./encryption"), exports), __exportStar(require("./signing"), exports);
var tokens_1 = require("./tokens");
Object.defineProperty(exports, "createToken", {
    enumerable: !0,
    get: function() {
        return tokens_1.createToken
    }
}), Object.defineProperty(exports, "JwtStandardClaims", {
    enumerable: !0,
    get: function() {
        return tokens_1.JwtStandardClaims
    }
}), __exportStar(require("./keyset"), exports);