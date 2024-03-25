var __awaiter = this && this.__awaiter || function(t, r, e, i) {
        return new(e || (e = Promise))(function(n, o) {
            function a(t) {
                try {
                    u(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    u(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var r;
                t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
                    t(r)
                })).then(a, s)
            }
            u((i = i.apply(t, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, r) {
        var e, i, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (e = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < n[1]) {
                                    a.label = n[1], n = o;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(o);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = r.call(t, a)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        e = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
import * as util from "../util";
import {
    correctJwkEcPriKey,
    exportKey,
    JwkEcPriKey
} from "../util/crypto";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    ECDSAPublicKey
} from "./ecdsa_public_key";
var codeLocation = "model/ecdsa_private_key",
    errorHandler = eh(codeLocation),
    makePromise = mp(codeLocation),
    ECDSAPrivateKey = function() {
        return function(t, r, e) {
            var i = this;
            this.sign = function(t) {
                return Promise.resolve().then(function() {
                    if (!i.key) throw new Error("Missing private key");
                    var r = ECDSAPublicKey.DEFAULT_SIGN_ALG;
                    return util.crypto.subtle.sign(r, i.key, t).then(function(t) {
                        return {
                            kid: i.uuid,
                            alg: r.jwkAlgorithmIdentifier,
                            s: util.bytesToBase64url(new Uint8Array(t))
                        }
                    })
                }).catch(errorHandler("sign"))
            }, this.import = function(t) {
                return makePromise("import", function() {
                    return __awaiter(i, void 0, void 0, function() {
                        var r, e, i, n, o;
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (t && (this.jwk = t), !this.jwk) throw new Error("Missing JWK key");
                                    if (r = this.jwk.kid, this.jwk = correctJwkEcPriKey(this.jwk), "EC" !== this.jwk.kty || "P-256" !== this.jwk.crv) throw new Error("Unexpected EC key/crv: " + this.jwk.kty + ", " + this.jwk.crv + ".");
                                    return e = ECDSAPublicKey.KEY_ALG_ES256, i = !0, n = ["sign"], [4, util.crypto.subtle.importKey("jwk", this.jwk, e, i, n).catch(function() {
                                        throw new util.errors.ClientError(112, "Invalid private key")
                                    })];
                                case 1:
                                    return o = a.sent(), this.key = o, this.uuid = r, [2, this]
                            }
                        })
                    })
                })
            }, this.exportKey = function() {
                return __awaiter(i, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.key) throw new Error("Missing key");
                                return t = this, [4, exportKey(this.uuid, this.key, JwkEcPriKey)];
                            case 1:
                                return t.jwk = r.sent(), [2, this.jwk]
                        }
                    })
                })
            }, this.encryptWithKey = function(t) {
                return __awaiter(i, void 0, void 0, function() {
                    var r;
                    return __generator(this, function(e) {
                        if (!this.jwk) throw new Error("Missing JWK");
                        if (!t) throw new Error("No key given");
                        if (!(r = util.json2ab(this.jwk))) throw new Error("Missing plaintext");
                        return [2, t.encrypt(r)]
                    })
                })
            }, this.decryptWithKey = function(t, r) {
                return __awaiter(i, void 0, void 0, function() {
                    var e, i;
                    return __generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, t.decrypt(r)];
                            case 1:
                                return e = n.sent(), i = JSON.parse(util.ab2str(e)), [2, this.import(i)]
                        }
                    })
                })
            }, this.uuid = t || "", this.key = r, this.jwk = e
        }
    }();
export {
    ECDSAPrivateKey
};