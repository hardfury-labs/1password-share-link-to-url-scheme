var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, a = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
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
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
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
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };
import {
    importPubKey
} from "./rsa_public_key";
var RecoverableVaultKey = function() {
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
export {
    RecoverableVaultKey
};
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
export {
    RecoverableGroupKeyset
};
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
export {
    RecoverablePackageKey
};
var RecoverableKeys = function() {
    return function(e, t, r) {
        var n = this;
        this.vaultKeys = e, this.groupKeysets = t, this.packageKeys = r, this.encryptForPerson = function(e) {
            return __awaiter(n, void 0, void 0, function() {
                var t, r, n, i, o;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (!e.pubKey) throw new Error("Missing user's public key");
                            return [4, importPubKey(e.pubKey)];
                        case 1:
                            return t = a.sent(), [4, Promise.all([Promise.all(this.vaultKeys.map(function(e) {
                                return e.encryptWithKey(t)
                            })), Promise.all(this.groupKeysets.map(function(e) {
                                return e.encryptWithKey(t)
                            })), Promise.all(this.packageKeys.map(function(e) {
                                return e.encryptWithKey(t)
                            }))])];
                        case 2:
                            return r = __read.apply(void 0, [a.sent(), 3]), n = r[0], i = r[1], o = r[2], [2, {
                                vaultKeys: n,
                                groupKeysets: i,
                                packageKeys: o
                            }]
                    }
                })
            })
        }
    }
}();
export {
    RecoverableKeys
};
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
export {
    RecoverableKeysForPeople
};