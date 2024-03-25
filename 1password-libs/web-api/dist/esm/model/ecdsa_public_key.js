var __awaiter = this && this.__awaiter || function(e, r, t, i) {
        return new(t || (t = Promise))(function(n, o) {
            function u(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, a)
            }
            c((i = i.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, i, n, o, u = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < n[1]) {
                                    u.label = n[1], n = o;
                                    break
                                }
                                if (n && u.label < n[2]) {
                                    u.label = n[2], u.ops.push(o);
                                    break
                                }
                                n[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = r.call(e, u)
                    } catch (e) {
                        o = [6, e], i = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    };
import * as util from "../util";
import {
    correctJwkEcPubKey,
    exportKey,
    JwkEcPubKey
} from "../util/crypto";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "model/ecdsa_public_key",
    errorHandler = eh(codeLocation),
    makePromise = mp(codeLocation),
    ECDSAPublicKey = function() {
        function e(r, t, i) {
            var n = this;
            this.verify = function(r, t) {
                return Promise.resolve().then(function() {
                    if ("ES256" !== t.alg) throw new Error("Unknown jwk signature alg:" + t.alg);
                    var i = e.DEFAULT_SIGN_ALG;
                    if (t.kid !== n.uuid) throw new Error("Unexpected signature kid:" + t.kid + " != " + n.uuid);
                    if (!n.key) throw new Error("Missing public key");
                    return util.crypto.subtle.verify(i, n.key, util.base64urlToBytes(t.s), r).then(function(e) {
                        return !!e
                    })
                }).catch(errorHandler("verify"))
            }, this.import = function(r) {
                return makePromise("import", function() {
                    return __awaiter(n, void 0, void 0, function() {
                        var t, i, n, o, u;
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (r && (this.jwk = r), !this.jwk) throw new Error("Missing JWK key");
                                    if (t = this.jwk.kid, this.jwk = correctJwkEcPubKey(this.jwk), "EC" !== this.jwk.kty || "P-256" !== this.jwk.crv) throw new Error("Unexpected EC key/crv: " + this.jwk.kty + ", " + this.jwk.crv + ".");
                                    return i = !0, n = e.KEY_ALG_ES256, o = ["verify"], [4, util.crypto.subtle.importKey("jwk", this.jwk, n, i, o).catch(function() {
                                        throw new util.errors.ClientError(112, "Invalid public key")
                                    })];
                                case 1:
                                    return u = a.sent(), this.uuid = t, this.key = u, [2, this]
                            }
                        })
                    })
                })
            }, this.exportKey = function() {
                return __awaiter(n, void 0, void 0, function() {
                    var e;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!this.key) throw new Error("Missing key");
                                return e = this, [4, exportKey(this.uuid, this.key, JwkEcPubKey)];
                            case 1:
                                return e.jwk = r.sent(), [2, this.jwk]
                        }
                    })
                })
            }, this.uuid = r || "", this.key = t, this.jwk = i
        }
        return e.KEY_ALG_ES256 = {
            name: "ECDSA",
            namedCurve: "P-256"
        }, e.SIGN_ALG_ES256 = {
            name: "ECDSA",
            hash: {
                name: "SHA-256"
            },
            jwkAlgorithmIdentifier: "ES256"
        }, e.DEFAULT_KEY_ALG = e.KEY_ALG_ES256, e.DEFAULT_SIGN_ALG = e.SIGN_ALG_ES256, e
    }();
export {
    ECDSAPublicKey
};