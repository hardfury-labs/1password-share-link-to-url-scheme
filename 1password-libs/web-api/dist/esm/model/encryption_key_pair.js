var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(i, o) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, u)
            }
            c((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = r.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, i, o = t.call(e),
            a = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = o.return) && t.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };
import {
    reduce,
    times
} from "lodash-es";
import * as util from "../util";
import {
    RSAPrivateKey
} from "./rsa_private_key";
import {
    RSAPublicKey
} from "./rsa_public_key";
import {
    JWK_ALG_A256GCM
} from "./symmetric_key_constants";
import {
    createSymmetricKey
} from "./symmetric_key_pf";
var EncryptionKeyPair = function() {
    return function(e, r, t) {
        var n = this;
        this.uuid = e, this.pubKey = r, this.priKey = t, this.encryptWithKey = function(e) {
            return __awaiter(n, void 0, void 0, function() {
                var r, t;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.priKey.encryptWithKey(e)];
                        case 1:
                            if (r = n.sent(), !(t = this.pubKey.jwk)) throw new Error("Missing public key");
                            return [2, {
                                pubKey: t,
                                encPriKey: r
                            }]
                    }
                })
            })
        }, this.encrypt = r.encrypt, this.decrypt = t.decrypt
    }
}();
export {
    EncryptionKeyPair
};
! function(e) {
    var r = this;
    e.generate = function(e) {
        return __awaiter(r, void 0, void 0, function() {
            var r, t, n, i;
            return __generator(this, function(o) {
                return r = function() {
                    return generateOnce(e).then(getValidEncryptionKeyPair)
                }, n = times((t = 32) - 1, function() {
                    return r
                }), i = r(), [2, reduce(n, function(e, r) {
                    return e.catch(function() {
                        return r()
                    })
                }, i).catch(function(e) {
                    throw new Error("Failed to generate valid encryption keys after " + t + " attempts. <" + e.message + ">")
                })]
            })
        })
    }, e.decryptWithKey = function(t, n) {
        var i = n.pubKey,
            o = n.encPriKey;
        return __awaiter(r, void 0, void 0, function() {
            var r, n, a, u, c, y;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return r = "string" == typeof i ? JSON.parse(i) : i, n = "string" == typeof o ? JSON.parse(o) : o, a = r.kid, [4, Promise.all([new RSAPublicKey(a).import(r), new RSAPrivateKey(a).decryptWithKey(t, n)])];
                    case 1:
                        if (u = __read.apply(void 0, [s.sent(), 2]), c = u[0], y = u[1], c.uuid !== y.uuid) throw new Error("Public and private key IDs do not match");
                        return [2, new e(a, c, y)]
                }
            })
        })
    }
}(EncryptionKeyPair || (EncryptionKeyPair = {}));
var generateOnce = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t, n, i, o, a, u, c, y;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return r = ["encrypt", "decrypt"], t = !0, n = RSAPublicKey.DEFAULT_ALG, i = e || util.generateUUID(), [4, util.crypto.subtle.generateKey(n, t, r)];
                    case 1:
                        if (o = s.sent(), a = o.publicKey, u = o.privateKey, !a || !u) throw new Error("Did not generate key pair properly");
                        return c = new RSAPublicKey(i, a), y = new RSAPrivateKey(i, u), [4, Promise.all([c.exportKey(), y.exportKey()])];
                    case 2:
                        return s.sent(), [2, new EncryptionKeyPair(i, c, y)]
                }
            })
        })
    },
    getValidEncryptionKeyPair = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t, n, i, o;
            return __generator(this, function(a) {
                if (r = {
                        pubKey: e.pubKey.jwk,
                        priKey: e.priKey.jwk
                    }, util.rsa.primesAreReversed(r.priKey)) throw new Error("p < q");
                return t = createSymmetricKey(), n = t.generate(JWK_ALG_A256GCM).then(function() {
                    return e.encryptWithKey(t)
                }).then(function(e) {
                    return EncryptionKeyPair.decryptWithKey(t, e)
                }), i = "I've got a golden ticket!", o = n.then(function(e) {
                    return e.encrypt(util.str2ab(i))
                }), [2, Promise.all([n, o]).then(function(e) {
                    var r = __read(e, 2),
                        t = r[0],
                        n = r[1];
                    return t.decrypt(n)
                }).then(function(e) {
                    return util.ab2str(e) === i ? Promise.resolve() : Promise.reject(new Error("Decryption failed"))
                }).then(function() {
                    return e
                })]
            })
        })
    };