"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.RecoverableKeysForPeople = exports.RecoverableKeys = exports.RecoverablePackageKey = exports.RecoverableGroupKeyset = exports.RecoverableVaultKey = void 0;
var rsa_public_key_1 = require("./rsa_public_key"),
    RecoverableVaultKey = function() {
        return function(e, t) {
            var r = this;
            this.vaultUuid = e, this.vaultKey = t, this.encryptWithKey = function(e) {
                return __awaiter(r, void 0, void 0, function() {
                    var t;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (void 0 === this.vaultKey.sn) throw new TypeError("Missing vault key SN");
                                return [4, this.vaultKey.encryptWithKey(e)];
                            case 1:
                                return t = r.sent(), [2, {
                                    vaultUuid: this.vaultUuid,
                                    vaultKeySN: this.vaultKey.sn,
                                    encryptedBy: t.kid,
                                    encVaultKey: t
                                }]
                        }
                    })
                })
            }
        }
    }();
exports.RecoverableVaultKey = RecoverableVaultKey;
var RecoverableGroupKeyset = function() {
    return function(e, t) {
        var r = this;
        this.groupUuid = e, this.keyset = t, this.encryptWithKey = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.keyset.encryptWithKey(e)];
                        case 1:
                            return t = r.sent(), [2, {
                                groupUuid: this.groupUuid,
                                keyset: t
                            }]
                    }
                })
            })
        }
    }
}();
exports.RecoverableGroupKeyset = RecoverableGroupKeyset;
var RecoverablePackageKey = function() {
    return function(e, t) {
        var r = this;
        this.packageUuid = e, this.key = t, this.encryptWithKey = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.key.encryptWithKey(e)];
                        case 1:
                            return t = r.sent(), [2, {
                                packageUuid: this.packageUuid,
                                key: t
                            }]
                    }
                })
            })
        }
    }
}();
exports.RecoverablePackageKey = RecoverablePackageKey;
var RecoverableKeys = function() {
    return function(e, t, r) {
        var n = this;
        this.vaultKeys = e, this.groupKeysets = t, this.packageKeys = r, this.encryptForPerson = function(e) {
            return __awaiter(n, void 0, void 0, function() {
                var t, r, n, o, i;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (!e.pubKey) throw new Error("Missing user's public key");
                            return [4, rsa_public_key_1.importPubKey(e.pubKey)];
                        case 1:
                            return t = a.sent(), [4, Promise.all([Promise.all(this.vaultKeys.map(function(e) {
                                return e.encryptWithKey(t)
                            })), Promise.all(this.groupKeysets.map(function(e) {
                                return e.encryptWithKey(t)
                            })), Promise.all(this.packageKeys.map(function(e) {
                                return e.encryptWithKey(t)
                            }))])];
                        case 2:
                            return r = __read.apply(void 0, [a.sent(), 3]), n = r[0], o = r[1], i = r[2], [2, {
                                vaultKeys: n,
                                groupKeysets: o,
                                packageKeys: i
                            }]
                    }
                })
            })
        }
    }
}();
exports.RecoverableKeys = RecoverableKeys;
var RecoverableKeysForPeople = function() {
    return function(e) {
        var t = this;
        this.keys = e, this.encryptForPeople = function(e) {
            return __awaiter(t, void 0, void 0, function() {
                var t, r;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (this.keys.length !== e.length) throw new Error("Number of keys and people do not match.");
                            return t = this.keys.map(function(t, r) {
                                var n = e[r];
                                if (void 0 === n) throw new Error("encryptForPeople: user not found.");
                                return t.encryptForPerson(n)
                            }), r = {}, [4, Promise.all(t)];
                        case 1:
                            return [2, (r.keys = n.sent(), r)]
                    }
                })
            })
        }
    }
}();
exports.RecoverableKeysForPeople = RecoverableKeysForPeople;