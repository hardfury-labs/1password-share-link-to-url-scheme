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
    },
    __read = this && this.__read || function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, i, o = r.call(t),
            u = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = o.next()).done;) u.push(n.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return u
    },
    ProvisionedVaultKey = function() {
        return function(t, e) {
            var r = this;
            this.vaultUuid = t, this.vaultKey = e, this.encryptWithKey = function(t) {
                return __awaiter(r, void 0, void 0, function() {
                    var e;
                    return __generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (void 0 === this.vaultKey.sn) throw new TypeError("Missing vault key SN");
                                return [4, this.vaultKey.encryptWithKey(t)];
                            case 1:
                                return e = r.sent(), [2, {
                                    vaultUuid: this.vaultUuid,
                                    vaultKeySN: this.vaultKey.sn,
                                    encryptedBy: e.kid,
                                    encVaultKey: e
                                }]
                        }
                    })
                })
            }
        }
    }();
export {
    ProvisionedVaultKey
};
var ProvisionedGroupKeyset = function() {
    return function(t, e) {
        var r = this;
        this.groupUuid = t, this.keyset = e, this.encryptWithKey = function(t) {
            return __awaiter(r, void 0, void 0, function() {
                var e;
                return __generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = {
                                groupUuid: this.groupUuid
                            }, [4, this.keyset.encryptWithKey(t)];
                        case 1:
                            return [2, (e.keyset = r.sent(), e)]
                    }
                })
            })
        }
    }
}();
export {
    ProvisionedGroupKeyset
};
var ProvisionedKeys = function() {
    return function(t, e) {
        var r = this;
        this.vaultKeys = t, this.groupKeysets = e, this.encryptForPerson = function(t) {
            return __awaiter(r, void 0, void 0, function() {
                var e;
                return __generator(this, function(r) {
                    if (!(e = t.pubKey)) throw new Error("Missing user's public key");
                    return [2, this.encryptWithPubKey(e)]
                })
            })
        }, this.encryptWithPubKey = function(t) {
            return __awaiter(r, void 0, void 0, function() {
                var e, r, n;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, Promise.all([Promise.all(this.vaultKeys.map(function(e) {
                                return e.encryptWithKey(t)
                            })), Promise.all(this.groupKeysets.map(function(e) {
                                return e.encryptWithKey(t)
                            }))])];
                        case 1:
                            return e = __read.apply(void 0, [i.sent(), 2]), r = e[0], n = e[1], [2, {
                                vaultKeys: r,
                                groupKeysets: n
                            }]
                    }
                })
            })
        }
    }
}();
export {
    ProvisionedKeys
};