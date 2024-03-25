"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
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
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, s) {
            function a(e) {
                try {
                    o(i.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function y(e) {
                try {
                    o(i.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function o(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, y)
            }
            o((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, n, s, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: y(0),
            throw: y(1),
            return: y(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function y(s) {
            return function(y) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                        switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < n[1]) {
                                    a.label = n[1], n = s;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(s);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = t.call(e, a)
                    } catch (e) {
                        s = [6, e], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, y])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, s = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = s.next()).done;) a.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = s.return) && r.call(s)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Keyset = exports.KeysetCiphertext = void 0;
var util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto");
Object.defineProperty(exports, "KeysetCiphertext", {
    enumerable: !0,
    get: function() {
        return crypto_1.KeysetCiphertext
    }
});
var encryption_key_pair_1 = require("./encryption_key_pair"),
    signing_key_pair_1 = require("./signing_key_pair"),
    symmetric_key_constants_1 = require("./symmetric_key_constants"),
    symmetric_key_pf_1 = require("./symmetric_key_pf"),
    Keyset = function() {
        function e(e, t, r, i, n) {
            var s = this;
            void 0 === n && (n = 0), this.uuid = e, this.symKey = t, this.ekeyPair = r, this.skeyPair = i, this.sn = n, this.generateSigningKeys = function() {
                return __awaiter(s, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        return this.skeyPair = new signing_key_pair_1.SigningKeyPair(this.uuid), [2, this.skeyPair.generate(this.uuid)]
                    })
                })
            }, this.sign = function(e) {
                if (!s.skeyPair) throw new Error("Failed to sign, skeyPair missing");
                return s.skeyPair.sign(e)
            }, this.verify = function(e, t) {
                if (!s.skeyPair) throw new Error("Failed to verify, skeyPair missing");
                return s.skeyPair.verify(e, t)
            }, this.encrypt = function(e) {
                return s.ekeyPair.encrypt(e)
            }, this.decrypt = function(e) {
                return s.ekeyPair.decrypt(e)
            }, this.encryptWithKey = function(e) {
                return __awaiter(s, void 0, void 0, function() {
                    var t, r, i, n;
                    return __generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, Promise.all([this.symKey.encryptWithKey(e), this.ekeyPair.encryptWithKey(this.symKey), this.skeyPair && this.skeyPair.priKey ? this.skeyPair.encryptWithKey(this.symKey) : Promise.resolve(void 0)])];
                            case 1:
                                return t = __read.apply(void 0, [s.sent(), 3]), r = t[0], i = t[1], n = t[2], [2, {
                                    uuid: this.uuid,
                                    sn: this.sn,
                                    encryptedBy: r.kid,
                                    encSymKey: r,
                                    pubKey: i.pubKey,
                                    encPriKey: i.encPriKey,
                                    spubKey: null === n || void 0 === n ? void 0 : n.pubKey,
                                    encSPriKey: null === n || void 0 === n ? void 0 : n.encPriKey
                                }]
                        }
                    })
                })
            }
        }
        return e.prototype.hasSigningKeys = function() {
            return !!this.skeyPair && !!this.skeyPair.pubKey
        }, e
    }();
exports.Keyset = Keyset,
    function(e) {
        var t = this;
        e.generateWithSigningKeys = function() {
            return generate(!0)
        }, e.generateWithoutSigningKeys = function() {
            return generate(!1)
        }, e.decryptWithKeyset = function(t, r) {
            var i = r.encSymKey.enc,
                n = symmetric_key_constants_1.isSymKeyAlg(i) ? t.symKey : t.ekeyPair;
            return e.decryptWithKey(n, r)
        }, e.decryptWithKey = function(r, i) {
            return __awaiter(t, void 0, void 0, function() {
                var t, n, s, a, y, o, u, c, _, l, p;
                return __generator(this, function(f) {
                    switch (f.label) {
                        case 0:
                            return t = i.sn, n = i.uuid, s = i.pubKey, a = i.encSymKey, y = i.encPriKey, o = i.spubKey, u = i.encSPriKey, [4, symmetric_key_pf_1.createSymmetricKey().decryptWithKey(r, a)];
                        case 1:
                            return c = f.sent(), [4, Promise.all([encryption_key_pair_1.EncryptionKeyPair.decryptWithKey(c, {
                                pubKey: s,
                                encPriKey: y
                            }), decryptSigningKeyPair(c, {
                                pubKey: o,
                                encPriKey: u
                            })])];
                        case 2:
                            return _ = __read.apply(void 0, [f.sent(), 2]), l = _[0], p = _[1], [2, new e(n, c, l, p, t)]
                    }
                })
            })
        }
    }(Keyset = exports.Keyset || (exports.Keyset = {})), exports.Keyset = Keyset;
var generate = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, i, n, s;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return t = util.generateUUID(), r = symmetric_key_pf_1.createSymmetricKey(), [4, Promise.all([r.generate(symmetric_key_constants_1.JWK_ALG_A256GCM, t), encryption_key_pair_1.EncryptionKeyPair.generate(t), e ? new signing_key_pair_1.SigningKeyPair(t).generate(t) : Promise.resolve(void 0)])];
                    case 1:
                        return i = __read.apply(void 0, [a.sent(), 3]), n = i[1], s = i[2], [2, new Keyset(t, r, n, s)]
                }
            })
        })
    },
    decryptSigningKeyPair = function(e, t) {
        var r = t.pubKey,
            i = t.encPriKey;
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!r || !i) return [2, void 0];
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, (new signing_key_pair_1.SigningKeyPair).decryptWithKey(e, {
                            pubKey: r,
                            encPriKey: i
                        })];
                    case 2:
                        return [2, n.sent()];
                    case 3:
                        if (t = n.sent(), util.errors.isClientError(t, 112)) return [2, void 0];
                        throw t;
                    case 4:
                        return [2]
                }
            })
        })
    };