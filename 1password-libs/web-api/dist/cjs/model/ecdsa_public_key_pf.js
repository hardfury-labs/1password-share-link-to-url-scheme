"use strict";
var __extends = this && this.__extends || function() {
        var e = function(r, t) {
            return (e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, r) {
                    e.__proto__ = r
                } || function(e, r) {
                    for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
                })(r, t)
        };
        return function(r, t) {
            function i() {
                this.constructor = r
            }
            e(r, t), r.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }
    }(),
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, i) {
        void 0 === i && (i = t), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, i) {
        void 0 === i && (i = t), e[i] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ECDSAPublicKeyPF = void 0;
var sjcl = __importStar(require("sjcl")),
    util = __importStar(require("../util")),
    error_handler_1 = require("../util/error_handler"),
    ecdsa_public_key_1 = require("./ecdsa_public_key"),
    codeLocation = "model/ecdsa_public_key_pf",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    ECDSAPublicKeyPF = function(e) {
        function r(r, t, i) {
            var o = e.call(this, r, void 0, i) || this;
            return o.verify = function(e, r) {
                return Promise.resolve().then(function() {
                    var t = ecdsa_public_key_1.ECDSAPublicKey.DEFAULT_SIGN_ALG;
                    if (!o.sjclKey) throw new Error("Missing public key");
                    if (r.kid !== o.uuid) throw new Error("Signing key mismatch, expected '" + o.uuid + "' got '" + r.kid + "'");
                    if (r.alg !== t.jwkAlgorithmIdentifier) throw new Error("Unsupported signature algorithm: " + r.alg);
                    var i = util.bytesToBits(util.base64urlToBytes(r.s)),
                        n = sjcl.hash.sha256.hash(util.bytesToBits(e));
                    return o.sjclKey.verify(n, i, !1)
                }).catch(errorHandler("verify"))
            }, o.import = function(e) {
                return Promise.resolve().then(function() {
                    if (e && (o.jwk = e), !o.jwk) throw new Error("Missing JWK key");
                    var r = util.base64urlToBytes(o.jwk.x),
                        t = util.base64urlToBytes(o.jwk.y),
                        i = sjcl.codec.hex.fromBits(util.bytesToBits(r)) + sjcl.codec.hex.fromBits(util.bytesToBits(t));
                    return o.sjclKey = new sjcl.ecc.ecdsa.publicKey(sjcl.ecc.curves.c256, sjcl.codec.hex.toBits(i)), o
                }).catch(errorHandler("import"))
            }, o.exportKey = function() {
                return Promise.resolve().then(function() {
                    if (!o.sjclKey) throw new Error("Missing public key");
                    var e = o.sjclKey.get();
                    return o.jwk = {
                        crv: "P-256",
                        ext: !0,
                        key_ops: ["verify"],
                        kty: "EC",
                        kid: o.uuid,
                        x: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(e.x))),
                        y: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(e.y)))
                    }, o.jwk
                }).catch(errorHandler("exportKey"))
            }, o.sjclKey = t, o
        }
        return __extends(r, e), r
    }(ecdsa_public_key_1.ECDSAPublicKey);
exports.ECDSAPublicKeyPF = ECDSAPublicKeyPF;