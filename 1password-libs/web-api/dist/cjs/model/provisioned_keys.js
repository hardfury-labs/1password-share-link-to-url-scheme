"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function u(e) {
                try {
                    a(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    a(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, s)
            }
            a((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
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
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
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
                        o = t.call(e, u)
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
                }([o, s])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
            u = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) u.push(n.value)
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
        return u
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ProvisionedKeys = exports.ProvisionedGroupKeyset = exports.ProvisionedVaultKey = void 0;
var ProvisionedVaultKey = function() {
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
exports.ProvisionedVaultKey = ProvisionedVaultKey;
var ProvisionedGroupKeyset = function() {
    return function(e, t) {
        var r = this;
        this.groupUuid = e, this.keyset = t, this.encryptWithKey = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var t;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = {
                                groupUuid: this.groupUuid
                            }, [4, this.keyset.encryptWithKey(e)];
                        case 1:
                            return [2, (t.keyset = r.sent(), t)]
                    }
                })
            })
        }
    }
}();
exports.ProvisionedGroupKeyset = ProvisionedGroupKeyset;
var ProvisionedKeys = function() {
    return function(e, t) {
        var r = this;
        this.vaultKeys = e, this.groupKeysets = t, this.encryptForPerson = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var t;
                return __generator(this, function(r) {
                    if (!(t = e.pubKey)) throw new Error("Missing user's public key");
                    return [2, this.encryptWithPubKey(t)]
                })
            })
        }, this.encryptWithPubKey = function(e) {
            return __awaiter(r, void 0, void 0, function() {
                var t, r, n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, Promise.all([Promise.all(this.vaultKeys.map(function(t) {
                                return t.encryptWithKey(e)
                            })), Promise.all(this.groupKeysets.map(function(t) {
                                return t.encryptWithKey(e)
                            }))])];
                        case 1:
                            return t = __read.apply(void 0, [i.sent(), 2]), r = t[0], n = t[1], [2, {
                                vaultKeys: r,
                                groupKeysets: n
                            }]
                    }
                })
            })
        }
    }
}();
exports.ProvisionedKeys = ProvisionedKeys;