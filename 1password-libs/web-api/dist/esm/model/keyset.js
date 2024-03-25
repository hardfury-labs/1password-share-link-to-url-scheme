var __awaiter = this && this.__awaiter || function(e, r, t, i) {
        return new(t || (t = Promise))(function(n, a) {
            function y(e) {
                try {
                    s(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                try {
                    s(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(y, o)
            }
            s((i = i.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, i, n, a, y = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function o(a) {
            return function(o) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; y;) try {
                        if (t = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
                        switch (i = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return y.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                y.label++, i = a[1], a = [0];
                                continue;
                            case 7:
                                a = y.ops.pop(), y.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = y.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    y = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    y.label = a[1];
                                    break
                                }
                                if (6 === a[0] && y.label < n[1]) {
                                    y.label = n[1], n = a;
                                    break
                                }
                                if (n && y.label < n[2]) {
                                    y.label = n[2], y.ops.push(a);
                                    break
                                }
                                n[2] && y.ops.pop(), y.trys.pop();
                                continue
                        }
                        a = r.call(e, y)
                    } catch (e) {
                        a = [6, e], i = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, o])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var i, n, a = t.call(e),
            y = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(i = a.next()).done;) y.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (t = a.return) && t.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return y
    };
import * as util from "../util";
import {
    KeysetCiphertext
} from "../util/crypto";
import {
    EncryptionKeyPair
} from "./encryption_key_pair";
import {
    SigningKeyPair
} from "./signing_key_pair";
import {
    isSymKeyAlg,
    JWK_ALG_A256GCM
} from "./symmetric_key_constants";
import {
    createSymmetricKey
} from "./symmetric_key_pf";
export {
    KeysetCiphertext
};
var Keyset = function() {
    function e(e, r, t, i, n) {
        var a = this;
        void 0 === n && (n = 0), this.uuid = e, this.symKey = r, this.ekeyPair = t, this.skeyPair = i, this.sn = n, this.generateSigningKeys = function() {
            return __awaiter(a, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return this.skeyPair = new SigningKeyPair(this.uuid), [2, this.skeyPair.generate(this.uuid)]
                })
            })
        }, this.sign = function(e) {
            if (!a.skeyPair) throw new Error("Failed to sign, skeyPair missing");
            return a.skeyPair.sign(e)
        }, this.verify = function(e, r) {
            if (!a.skeyPair) throw new Error("Failed to verify, skeyPair missing");
            return a.skeyPair.verify(e, r)
        }, this.encrypt = function(e) {
            return a.ekeyPair.encrypt(e)
        }, this.decrypt = function(e) {
            return a.ekeyPair.decrypt(e)
        }, this.encryptWithKey = function(e) {
            return __awaiter(a, void 0, void 0, function() {
                var r, t, i, n;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, Promise.all([this.symKey.encryptWithKey(e), this.ekeyPair.encryptWithKey(this.symKey), this.skeyPair && this.skeyPair.priKey ? this.skeyPair.encryptWithKey(this.symKey) : Promise.resolve(void 0)])];
                        case 1:
                            return r = __read.apply(void 0, [a.sent(), 3]), t = r[0], i = r[1], n = r[2], [2, {
                                uuid: this.uuid,
                                sn: this.sn,
                                encryptedBy: t.kid,
                                encSymKey: t,
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
export {
    Keyset
};
! function(e) {
    var r = this;
    e.generateWithSigningKeys = function() {
        return generate(!0)
    }, e.generateWithoutSigningKeys = function() {
        return generate(!1)
    }, e.decryptWithKeyset = function(r, t) {
        var i = t.encSymKey.enc,
            n = isSymKeyAlg(i) ? r.symKey : r.ekeyPair;
        return e.decryptWithKey(n, t)
    }, e.decryptWithKey = function(t, i) {
        return __awaiter(r, void 0, void 0, function() {
            var r, n, a, y, o, s, u, c, l, h, p;
            return __generator(this, function(f) {
                switch (f.label) {
                    case 0:
                        return r = i.sn, n = i.uuid, a = i.pubKey, y = i.encSymKey, o = i.encPriKey, s = i.spubKey, u = i.encSPriKey, [4, createSymmetricKey().decryptWithKey(t, y)];
                    case 1:
                        return c = f.sent(), [4, Promise.all([EncryptionKeyPair.decryptWithKey(c, {
                            pubKey: a,
                            encPriKey: o
                        }), decryptSigningKeyPair(c, {
                            pubKey: s,
                            encPriKey: u
                        })])];
                    case 2:
                        return l = __read.apply(void 0, [f.sent(), 2]), h = l[0], p = l[1], [2, new e(n, c, h, p, r)]
                }
            })
        })
    }
}(Keyset || (Keyset = {}));
var generate = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t, i, n, a;
            return __generator(this, function(y) {
                switch (y.label) {
                    case 0:
                        return r = util.generateUUID(), t = createSymmetricKey(), [4, Promise.all([t.generate(JWK_ALG_A256GCM, r), EncryptionKeyPair.generate(r), e ? new SigningKeyPair(r).generate(r) : Promise.resolve(void 0)])];
                    case 1:
                        return i = __read.apply(void 0, [y.sent(), 3]), n = i[1], a = i[2], [2, new Keyset(r, t, n, a)]
                }
            })
        })
    },
    decryptSigningKeyPair = function(e, r) {
        var t = r.pubKey,
            i = r.encPriKey;
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!t || !i) return [2, void 0];
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, (new SigningKeyPair).decryptWithKey(e, {
                            pubKey: t,
                            encPriKey: i
                        })];
                    case 2:
                        return [2, n.sent()];
                    case 3:
                        if (r = n.sent(), util.errors.isClientError(r, 112)) return [2, void 0];
                        throw r;
                    case 4:
                        return [2]
                }
            })
        })
    };