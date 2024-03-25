"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function u(e) {
                try {
                    a(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    a(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, s)
            }
            a((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, i, u = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return u.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < o[1]) {
                                    u.label = o[1], o = i;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(i);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        i = t.call(e, u)
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
                }([i, s])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
            u = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = i.next()).done;) u.push(n.value)
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
        return u
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.rollUserKeyset = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    account_1 = require("./account"),
    context_1 = require("./context"),
    group_1 = require("./group"),
    keyset_1 = require("./keyset"),
    user_1 = require("./user"),
    codeLocation = "action/roll_user_keyset",
    makePromise = make_promise_1.makePromise(codeLocation),
    nope = function(e) {
        return Promise.reject(new Error(e))
    },
    rollUserKeyset = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, o, i, u, s, a, c, l, p, y, f;
            return __generator(this, function(_) {
                switch (_.label) {
                    case 0:
                        if (!(t = e.user)) throw new Error("Active user is missing");
                        return [4, Promise.all([user_1.getPerson(e, t.uuid, {
                            attrs: model.Person.Attr.VaultAccess | model.Person.Attr.Groups
                        }), account_1.getAccountWithAttrs(e, ["me"])])];
                    case 1:
                        r = __read.apply(void 0, [_.sent(), 1]), n = r[0], o = n.vaultAccessList, i = n.groupMemberships, t.vaultAccessList = o, t.groupMemberships = i, u = t.activeKeyset, _.label = 2;
                    case 2:
                        return _.trys.push([2, 7, , 8]), [4, t.generateNewKeyset()];
                    case 3:
                        return _.sent(), [4, t.encryptActiveKeysetWithMasterKey()];
                    case 4:
                        return s = _.sent(), a = t.unsafeGroupMemberships.map(function(r) {
                            return Promise.resolve().then(function() {
                                return reencryptGroupKeysetForUser(e, t, r.groupUuid)
                            })
                        }), c = util.compact(lodash_es_1.values(t.getDirectVaultAccessMap())).map(function(e) {
                            return Promise.resolve().then(function() {
                                return reencryptVaultKeyForUser(t, e)
                            })
                        }), [4, Promise.all([Promise.all(a), Promise.all(c)])];
                    case 5:
                        return l = __read.apply(void 0, [_.sent(), 2]), p = l[0], y = l[1], [4, api.rollUserKeyset(e.session, {
                            keys: {
                                groupKeysets: p,
                                vaultKeys: y
                            },
                            keyset: s
                        })];
                    case 6:
                        return _.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [3, 8];
                    case 7:
                        throw f = _.sent(), t.activeKeyset = u, f;
                    case 8:
                        return [2]
                }
            })
        })
    };
exports.rollUserKeyset = rollUserKeyset;
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
            return group_1.getGroup(e, r).then(function(r) {
                if (!r.activeKeysetUuid) return nope("Missing active keyset UUID.");
                var n = keyset_1.findDecryptedKeyset(e, r.activeKeysetUuid),
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