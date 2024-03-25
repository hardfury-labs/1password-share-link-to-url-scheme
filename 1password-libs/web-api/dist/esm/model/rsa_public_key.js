var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function u(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(u, a)
            }
            s((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, i, o, u = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
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
                        o = e.call(t, u)
                    } catch (t) {
                        o = [6, t], n = 0
                    } finally {
                        r = i = 0
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
    correctJwkRsaPubKeyIfNeeded,
    exportUnvalidatedKey,
    supports
} from "../util/crypto";
import {
    errorHandler as eh
} from "../util/error_handler";
var codeLocation = "model/rsa_public_key",
    errorHandler = eh(codeLocation);
export var getImportedPubKey = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, Promise.resolve().then(function() {
                return "jwk" in t ? t : importPubKey(t)
            })]
        })
    })
};
export var importPubKey = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, new RSAPublicKey(t.kid, void 0, t).import()]
        })
    })
};
var RSAPublicKey = function() {
    function t(e, r, n) {
        var i = this;
        this.encrypt = function(e) {
            return Promise.resolve().then(function() {
                var r, n;
                if (e.length > 256) throw new Error("Plaintext is too large.");
                if (!i.jwk) throw new Error("Missing JWK encryption key.");
                if (!i.key) throw new Error("Missing encryption key.");
                if (i.jwk.alg === t.JWK_ALG_RSA_OAEP) n = t.JWK_ALG_RSA_OAEP, r = t.WC_ALG_RSA_OAEP;
                else {
                    if (i.jwk.alg !== t.JWK_ALG_RSA_OAEP_256) throw new Error("Unsupported encryption alg");
                    n = t.JWK_ALG_RSA_OAEP_256, r = t.WC_ALG_RSA_OAEP_256
                }
                return util.crypto.subtle.encrypt(r, i.key, e).then(function(e) {
                    var r = new Uint8Array(e),
                        o = util.bytesToBase64url(r);
                    return {
                        kid: i.uuid,
                        enc: n,
                        cty: t.CONTENT_TYPE,
                        data: o
                    }
                })
            }).catch(errorHandler("encrypt"))
        }, this.import = function(e) {
            return __awaiter(i, void 0, void 0, function() {
                var r, n, i, o, u;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (e && (this.jwk = e), !this.jwk) throw new Error("Missing JWK");
                            if (r = this.jwk.kid, n = !0, this.jwk.alg === t.JWK_ALG_RSA_OAEP_256) i = t.WC_ALG_RSA_OAEP_256;
                            else {
                                if (this.jwk.alg !== t.JWK_ALG_RSA_OAEP) throw new Error("Unexpected algorithm");
                                i = t.WC_ALG_RSA_OAEP
                            }
                            return this.jwk = correctJwkRsaPubKeyIfNeeded(this.jwk), o = supports.jwkImport ? this.jwk : util.json2ab(this.jwk), u = this, [4, util.crypto.subtle.importKey("jwk", o, i, n, ["encrypt"])];
                        case 1:
                            return u.key = a.sent(), this.uuid = r, [2, this]
                    }
                })
            })
        }, this.exportKey = function() {
            return __awaiter(i, void 0, void 0, function() {
                var t;
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (!this.key) throw new Error("Missing key");
                            return t = this, [4, exportUnvalidatedKey(this.uuid, this.key)];
                        case 1:
                            return t.jwk = e.sent(), [2, this.jwk]
                    }
                })
            })
        }, this.uuid = e, this.key = r, this.jwk = n
    }
    return t.CONTENT_TYPE = "b5+jwk+json", t.JWK_ALG_RSA_OAEP_256 = "RSA-OAEP-256", t.WC_ALG_RSA_OAEP_256 = {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: {
            name: "SHA-256"
        }
    }, t.JWK_ALG_RSA_OAEP = "RSA-OAEP", t.WC_ALG_RSA_OAEP = {
        name: "RSA-OAEP",
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: {
            name: "SHA-1"
        }
    }, t.DEFAULT_ALG = t.WC_ALG_RSA_OAEP, t
}();
export {
    RSAPublicKey
};