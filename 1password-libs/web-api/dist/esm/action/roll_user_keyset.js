var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(s, a)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, i, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = t.call(e, s)
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
                }([i, a])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = i.next()).done;) s.push(n.value)
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
        return s
    };
import {
    values
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getAccountWithAttrs
} from "./account";
import {
    invalidateCache
} from "./context";
import {
    getGroup
} from "./group";
import {
    findDecryptedKeyset
} from "./keyset";
import {
    getPerson
} from "./user";
var codeLocation = "action/roll_user_keyset",
    makePromise = mp(codeLocation),
    nope = function(e) {
        return Promise.reject(new Error(e))
    };
export var rollUserKeyset = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, o, i, s, a, u, c, l, p, y, f;
        return __generator(this, function(m) {
            switch (m.label) {
                case 0:
                    if (!(t = e.user)) throw new Error("Active user is missing");
                    return [4, Promise.all([getPerson(e, t.uuid, {
                        attrs: model.Person.Attr.VaultAccess | model.Person.Attr.Groups
                    }), getAccountWithAttrs(e, ["me"])])];
                case 1:
                    r = __read.apply(void 0, [m.sent(), 1]), n = r[0], o = n.vaultAccessList, i = n.groupMemberships, t.vaultAccessList = o, t.groupMemberships = i, s = t.activeKeyset, m.label = 2;
                case 2:
                    return m.trys.push([2, 7, , 8]), [4, t.generateNewKeyset()];
                case 3:
                    return m.sent(), [4, t.encryptActiveKeysetWithMasterKey()];
                case 4:
                    return a = m.sent(), u = t.unsafeGroupMemberships.map(function(r) {
                        return Promise.resolve().then(function() {
                            return reencryptGroupKeysetForUser(e, t, r.groupUuid)
                        })
                    }), c = util.compact(values(t.getDirectVaultAccessMap())).map(function(e) {
                        return Promise.resolve().then(function() {
                            return reencryptVaultKeyForUser(t, e)
                        })
                    }), [4, Promise.all([Promise.all(u), Promise.all(c)])];
                case 5:
                    return l = __read.apply(void 0, [m.sent(), 2]), p = l[0], y = l[1], [4, api.rollUserKeyset(e.session, {
                        keys: {
                            groupKeysets: p,
                            vaultKeys: y
                        },
                        keyset: a
                    })];
                case 6:
                    return m.sent(), invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [3, 8];
                case 7:
                    throw f = m.sent(), t.activeKeyset = s, f;
                case 8:
                    return [2]
            }
        })
    })
};
var reencryptVaultKeyForUser = function(e, t) {
        return makePromise("reencryptGroupKeysetForUser", function() {
            return t.encryptVaultKey(e).then(function(e) {
                return {
                    vaultUuid: t.vaultUuid,
                    vaultKeySN: t.vaultKeySN,
                    encryptedBy: e.kid,
                    encVaultKey: e
                }
            })
        })
    },
    reencryptGroupKeysetForUser = function(e, t, r) {
        return makePromise("reencryptGroupKeysetForUser", function() {
            return getGroup(e, r).then(function(r) {
                if (!r.activeKeysetUuid) return nope("Missing active keyset UUID.");
                var n = findDecryptedKeyset(e, r.activeKeysetUuid),
                    o = t.activeKeyset && t.activeKeyset.ekeyPair.pubKey;
                return n ? o ? n.encryptWithKey(o) : nope("Missing user's public key.") : nope("Missing decrypted group keyset.")
            }).then(function(e) {
                return {
                    groupUuid: r,
                    keyset: e
                }
            })
        })
    };