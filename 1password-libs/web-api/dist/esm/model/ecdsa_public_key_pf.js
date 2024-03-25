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
        function o() {
            this.constructor = r
        }
        e(r, t), r.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
    }
}();
import * as sjcl from "sjcl";
import * as util from "../util";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    ECDSAPublicKey
} from "./ecdsa_public_key";
var codeLocation = "model/ecdsa_public_key_pf",
    errorHandler = eh(codeLocation),
    ECDSAPublicKeyPF = function(e) {
        function r(r, t, o) {
            var i = e.call(this, r, void 0, o) || this;
            return i.verify = function(e, r) {
                return Promise.resolve().then(function() {
                    var t = ECDSAPublicKey.DEFAULT_SIGN_ALG;
                    if (!i.sjclKey) throw new Error("Missing public key");
                    if (r.kid !== i.uuid) throw new Error("Signing key mismatch, expected '" + i.uuid + "' got '" + r.kid + "'");
                    if (r.alg !== t.jwkAlgorithmIdentifier) throw new Error("Unsupported signature algorithm: " + r.alg);
                    var o = util.bytesToBits(util.base64urlToBytes(r.s)),
                        c = sjcl.hash.sha256.hash(util.bytesToBits(e));
                    return i.sjclKey.verify(c, o, !1)
                }).catch(errorHandler("verify"))
            }, i.import = function(e) {
                return Promise.resolve().then(function() {
                    if (e && (i.jwk = e), !i.jwk) throw new Error("Missing JWK key");
                    var r = util.base64urlToBytes(i.jwk.x),
                        t = util.base64urlToBytes(i.jwk.y),
                        o = sjcl.codec.hex.fromBits(util.bytesToBits(r)) + sjcl.codec.hex.fromBits(util.bytesToBits(t));
                    return i.sjclKey = new sjcl.ecc.ecdsa.publicKey(sjcl.ecc.curves.c256, sjcl.codec.hex.toBits(o)), i
                }).catch(errorHandler("import"))
            }, i.exportKey = function() {
                return Promise.resolve().then(function() {
                    if (!i.sjclKey) throw new Error("Missing public key");
                    var e = i.sjclKey.get();
                    return i.jwk = {
                        crv: "P-256",
                        ext: !0,
                        key_ops: ["verify"],
                        kty: "EC",
                        kid: i.uuid,
                        x: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(e.x))),
                        y: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(e.y)))
                    }, i.jwk
                }).catch(errorHandler("exportKey"))
            }, i.sjclKey = t, i
        }
        return __extends(r, e), r
    }(ECDSAPublicKey);
export {
    ECDSAPublicKeyPF
};