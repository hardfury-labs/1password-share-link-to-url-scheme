"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
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
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.EncryptionKeyPair = void 0;
var lodash_es_1 = require("lodash-es"),
    util = __importStar(require("../util")),
    rsa_private_key_1 = require("./rsa_private_key"),
    rsa_public_key_1 = require("./rsa_public_key"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    symmetric_key_pf_1 = require("./symmetric_key_pf"),
    EncryptionKeyPair = function() {
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
exports.EncryptionKeyPair = EncryptionKeyPair,
    function(e) {
        var r = this;
        e.generate = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var r, t, n, i;
                return __generator(this, function(o) {
                    return r = function() {
                        return generateOnce(e).then(getValidEncryptionKeyPair)
                    }, t = 32, n = lodash_es_1.times(t - 1, function() {
                        return r
                    }), i = r(), [2, lodash_es_1.reduce(n, function(e, r) {
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
                var r, n, a, u, c, s;
                return __generator(this, function(y) {
                    switch (y.label) {
                        case 0:
                            return r = "string" == typeof i ? JSON.parse(i) : i, n = "string" == typeof o ? JSON.parse(o) : o, a = r.kid, [4, Promise.all([new rsa_public_key_1.RSAPublicKey(a).import(r), new rsa_private_key_1.RSAPrivateKey(a).decryptWithKey(t, n)])];
                        case 1:
                            if (u = __read.apply(void 0, [y.sent(), 2]), c = u[0], s = u[1], c.uuid !== s.uuid) throw new Error("Public and private key IDs do not match");
                            return [2, new e(a, c, s)]
                    }
                })
            })
        }
    }(EncryptionKeyPair = exports.EncryptionKeyPair || (exports.EncryptionKeyPair = {})), exports.EncryptionKeyPair = EncryptionKeyPair;
var generateOnce = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t, n, i, o, a, u, c, s;
            return __generator(this, function(y) {
                switch (y.label) {
                    case 0:
                        return r = ["encrypt", "decrypt"], t = !0, n = rsa_public_key_1.RSAPublicKey.DEFAULT_ALG, i = e || util.generateUUID(), [4, util.crypto.subtle.generateKey(n, t, r)];
                    case 1:
                        if (o = y.sent(), a = o.publicKey, u = o.privateKey, !a || !u) throw new Error("Did not generate key pair properly");
                        return c = new rsa_public_key_1.RSAPublicKey(i, a), s = new rsa_private_key_1.RSAPrivateKey(i, u), [4, Promise.all([c.exportKey(), s.exportKey()])];
                    case 2:
                        return y.sent(), [2, new EncryptionKeyPair(i, c, s)]
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
                return t = symmetric_key_pf_1.createSymmetricKey(), n = t.generate(symmetric_key_constants_1.JWK_ALG_A256GCM).then(function() {
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