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
}), exports.File = void 0;
var sjcl = __importStar(require("sjcl")),
    File = function() {
        function e(e, t) {
            if (!e) {
                var i = new Error("Created new File without a file ID");
                console.warn(i)
            }
            if (!t) {
                i = new Error("Created new File (" + e + ") without a signing key");
                console.warn(i)
            }
            this.fileId = e, this.signingKey = t
        }
        return e.prototype.signReference = function(e, t) {
            var i = new sjcl.misc.hmac(sjcl.codec.base64url.toBits(this.signingKey.k), sjcl.hash.sha256),
                r = this.signingKey.kid + this.fileId + e + t.toString();
            return sjcl.codec.base64url.fromBits(i.encrypt(r))
        }, e
    }();
exports.File = File;