var __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(n, a) {
            function i(e) {
                try {
                    u(o.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                try {
                    u(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, c)
            }
            u((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, n, a, i = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                        switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < n[1]) {
                                    i.label = n[1], n = a;
                                    break
                                }
                                if (n && i.label < n[2]) {
                                    i.label = n[2], i.ops.push(a);
                                    break
                                }
                                n[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = r.call(e, i)
                    } catch (e) {
                        a = [6, e], o = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, c])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, n, a = t.call(e),
            i = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = a.next()).done;) i.push(o.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = a.return) && t.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return i
    };
import {
    findDecryptedKeyset
} from "../action/keyset";
import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "parser/recoverable_keys",
    makePromise = mp(codeLocation),
    recoverableVaultKeyFromAPI = function(e, r) {
        return makePromise("recoverableVaultKeyFromAPI", function() {
            var t = findDecryptedKeyset(e, r.encryptedBy);
            return t ? model.createSymmetricKey().decryptWithKeyset(t, r.encVaultKey).then(function(e) {
                return e.sn = r.vaultKeySN, new model.RecoverableVaultKey(r.vaultUuid, e)
            }) : Promise.reject(new Error("Could not find keyset"))
        })
    },
    recoverableGroupKeysetFromAPI = function(e, r) {
        return makePromise("recoverableGroupKeysetFromAPI", function() {
            var t = findDecryptedKeyset(e, r.keyset.encryptedBy);
            return t ? model.Keyset.decryptWithKeyset(t, r.keyset).then(function(e) {
                return new model.RecoverableGroupKeyset(r.groupUuid, e)
            }) : Promise.reject(new Error("Could not find keyset"))
        })
    },
    recoverablePackageKeyFromAPI = function(e, r) {
        return makePromise("recoverablePackageKeyFromAPI", function() {
            var t = findDecryptedKeyset(e, r.key.kid);
            return t ? model.createSymmetricKey().decryptWithKeyset(t, r.key).then(function(e) {
                return new model.RecoverablePackageKey(r.packageUuid, e)
            }) : Promise.reject(new Error("Could not find keyset"))
        })
    },
    recoverableKeysFromAPI = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, o, n, a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, Promise.all([Promise.all(r.vaultKeys.map(function(r) {
                            return recoverableVaultKeyFromAPI(e, r)
                        })), Promise.all(r.groupKeysets.map(function(r) {
                            return recoverableGroupKeysetFromAPI(e, r)
                        })), Promise.all(r.packageKeys.map(function(r) {
                            return recoverablePackageKeyFromAPI(e, r)
                        }))])];
                    case 1:
                        return t = __read.apply(void 0, [i.sent(), 3]), o = t[0], n = t[1], a = t[2], [2, new model.RecoverableKeys(o, n, a)]
                }
            })
        })
    };
export var recoverableKeysForPeopleFromAPI = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t = r.keys.map(function(r) {
                        return recoverableKeysFromAPI(e, r)
                    }), [4, Promise.all(t)];
                case 1:
                    return o = n.sent(), [2, new model.RecoverableKeysForPeople(o)]
            }
        })
    })
};