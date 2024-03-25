var __awaiter = this && this.__awaiter || function(r, e, t, n) {
        return new(t || (t = Promise))(function(i, o) {
            function u(r) {
                try {
                    c(n.next(r))
                } catch (r) {
                    o(r)
                }
            }

            function a(r) {
                try {
                    c(n.throw(r))
                } catch (r) {
                    o(r)
                }
            }

            function c(r) {
                var e;
                r.done ? i(r.value) : (e = r.value, e instanceof t ? e : new t(function(r) {
                    r(e)
                })).then(u, a)
            }
            c((n = n.apply(r, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(r, e) {
        var t, n, i, o, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
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
                        if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < i[1]) {
                                    u.label = i[1], i = o;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(o);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = e.call(r, u)
                    } catch (r) {
                        o = [6, r], n = 0
                    } finally {
                        t = i = 0
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
    correctJwkRsaPriKeyIfNeeded,
    exportUnvalidatedKey,
    supports
} from "../util/crypto";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    RSAPublicKey
} from "./rsa_public_key";
var codeLocation = "model/rsa_private_key",
    errorHandler = eh(codeLocation),
    RSAPrivateKey = function() {
        return function(r, e, t) {
            var n = this;
            this.decrypt = function(r) {
                return Promise.resolve().then(function() {
                    var e, t = "string" == typeof r ? JSON.parse(r) : r;
                    if (RSAPublicKey.CONTENT_TYPE !== t.cty) throw new Error("Unexpected content type");
                    if (t.kid !== n.uuid) throw new Error("Content encrypted with wrong key");
                    if (!n.key) throw new Error("Missing decryption key");
                    if (t.enc === RSAPublicKey.JWK_ALG_RSA_OAEP_256) {
                        if (!supports.rsaOaep256) throw new util.errors.ClientError(111, "Browser does not support RSA-OAEP-256");
                        e = RSAPublicKey.WC_ALG_RSA_OAEP_256
                    } else {
                        if (t.enc !== RSAPublicKey.JWK_ALG_RSA_OAEP) throw new Error("Unexpected algorithm");
                        e = RSAPublicKey.WC_ALG_RSA_OAEP
                    }
                    var i = util.base64urlToBytes(t.data);
                    return util.crypto.subtle.decrypt(e, n.key, i).then(function(r) {
                        return new Uint8Array(r)
                    })
                }).catch(errorHandler("decrypt"))
            }, this.import = function(r) {
                return Promise.resolve().then(function() {
                    if (r && (n.jwk = r), !n.jwk) throw new Error("Missing JWK");
                    var e, t = n.jwk.kid;
                    if (n.jwk.alg === RSAPublicKey.JWK_ALG_RSA_OAEP_256) e = RSAPublicKey.WC_ALG_RSA_OAEP_256;
                    else {
                        if (n.jwk.alg !== RSAPublicKey.JWK_ALG_RSA_OAEP) throw new Error("RSAPrivateKey failed to import, unexpected alg");
                        e = RSAPublicKey.WC_ALG_RSA_OAEP
                    }
                    n.jwk = correctJwkRsaPriKeyIfNeeded(n.jwk);
                    var i = supports.jwkImport ? n.jwk : util.json2ab(n.jwk);
                    return util.crypto.subtle.importKey("jwk", i, e, !0, ["decrypt"]).then(function(r) {
                        return n.key = r, n.uuid = t, n
                    })
                }).catch(errorHandler("import"))
            }, this.exportKey = function() {
                return __awaiter(n, void 0, void 0, function() {
                    var r;
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                if (!this.key) throw new Error("Missing key");
                                return r = this, [4, exportUnvalidatedKey(this.uuid, this.key)];
                            case 1:
                                return r.jwk = e.sent(), [2, this.jwk]
                        }
                    })
                })
            }, this.encryptWithKey = function(r) {
                return __awaiter(n, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        if (!this.jwk) throw new Error("Missing JWK");
                        return [2, r.encrypt(util.json2ab(this.jwk))]
                    })
                })
            }, this.decryptWithKey = function(r, e) {
                return __awaiter(n, void 0, void 0, function() {
                    var t, n;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, r.decrypt(e)];
                            case 1:
                                return t = i.sent(), n = JSON.parse(util.ab2str(t)), [2, this.import(n)]
                        }
                    })
                })
            }, this.uuid = r, this.key = e, this.jwk = t
        }
    }();
export {
    RSAPrivateKey
};