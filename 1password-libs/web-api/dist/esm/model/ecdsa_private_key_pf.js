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
    ECDSAPrivateKey
} from "./ecdsa_private_key";
import {
    ECDSAPublicKey
} from "./ecdsa_public_key";
var codeLocation = "model/ecdsa_private_key_pf",
    errorHandler = eh(codeLocation),
    ECDSAPrivateKeyPF = function(e) {
        function r(r, t, o, i) {
            var n = e.call(this, r, void 0, i) || this;
            return n.sign = function(e) {
                return Promise.resolve().then(function() {
                    if (!n.sjclKey) throw new Error("Missing private key");
                    var r = ECDSAPublicKey.DEFAULT_SIGN_ALG,
                        t = sjcl.hash.sha256.hash(util.bytesToBits(e)),
                        o = n.sjclKey.sign(t, 1, !1);
                    return {
                        kid: n.uuid,
                        alg: r.jwkAlgorithmIdentifier,
                        s: util.bytesToBase64url(new Uint8Array(sjcl.codec.bytes.fromBits(o)))
                    }
                }).catch(errorHandler("sign"))
            }, n.import = function(e) {
                return Promise.resolve().then(function() {
                    if (e && (n.jwk = e), !n.jwk) throw new Error("Missing JWK key");
                    var r = util.base64urlToBytes(n.jwk.d),
                        t = sjcl.bn.fromBits(util.bytesToBits(r));
                    return n.sjclKey = new sjcl.ecc.ecdsa.secretKey(sjcl.ecc.curves.c256, t), n
                }).catch(errorHandler("import"))
            }, n.exportKey = function() {
                return Promise.resolve().then(function() {
                    if (!n.pubKey) throw new Error("Missing public key");
                    if (!n.sjclKey) throw new Error("Missing private key");
                    var e = n.sjclKey;
                    return n.pubKey.exportKey().then(function(r) {
                        var t = sjcl.codec.bytes.fromBits(e.get());
                        return n.jwk = {
                            crv: "P-256",
                            ext: !0,
                            key_ops: ["sign"],
                            kty: "EC",
                            kid: n.uuid,
                            d: util.bytesToBase64url(new Uint8Array(t)),
                            x: r.x,
                            y: r.y
                        }, n.jwk
                    })
                }).catch(errorHandler("exportKey"))
            }, n.sjclKey = o, n.pubKey = t, n
        }
        return __extends(r, e), r
    }(ECDSAPrivateKey);
export {
    ECDSAPrivateKeyPF
};