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
        return new(t || (t = Promise))(function(o, i) {
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
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(s, a)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, s = {
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
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
                        i = r.call(e, s)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = o = 0
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
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, i = t.call(e),
            s = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = i.next()).done;) s.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = i.return) && t.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.replaceProvisionedUserKeyset = exports.getProvisionManagersGroup = exports.getResendDetails = exports.resendAllUserProvision = exports.resendUserProvision = exports.completeUserProvision = exports.getProvisionDetails = exports.startUserProvision = exports.createProvisionUser = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    util_1 = require("../util"),
    make_promise_1 = require("../util/make_promise"),
    account_1 = require("./account"),
    context_1 = require("./context"),
    group_1 = require("./group"),
    group_membership_1 = require("./group_membership"),
    keyset_1 = require("./keyset"),
    user_1 = require("./user"),
    vault_1 = require("./vault"),
    codeLocation = "action/provision",
    makePromise = make_promise_1.makePromise(codeLocation),
    createProvisionUser = function(e, r, t) {
        return makePromise("createProvisionUser", function() {
            var n = e.user;
            if (!n) return Promise.reject(new Error("Missing user."));
            if (!n.activeKeyset) return Promise.reject(new Error("Missing active keyset."));
            var o = r.activeKeyset;
            if (!o) return Promise.reject(new Error("Missing provision user's active keyset"));
            var i = e.account;
            if (!i) return Promise.reject(new Error("Missing account."));
            var s = i.teamMembersGroup;
            if (!s) return Promise.reject(new Error("No Team Members group found."));
            r.uuid = model.Person.UUIDNewlyCreatedProvisionUser;
            var a = new model.Vault({
                    name: "Private",
                    type: model.Vault.TypeProvision,
                    desc: model.Vault.DefaultDescMarker,
                    avatar: r.avatar
                }),
                u = group_1.getRecoveryGroup(e, {
                    attrs: model.Group.Attr.PubKey
                }),
                c = a.generateNewKey(),
                l = vault_1.getEveryoneVault(e, {
                    attrs: model.Vault.Attr.All
                }),
                v = exports.getProvisionManagersGroup(e, {
                    attrs: model.Group.Attr.PubKey
                }),
                d = group_membership_1.createGroupMembership(e, r, s, {
                    role: api.GroupMembership.Role.Member
                });
            return Promise.all([u, c, l, v, d]).then(function(t) {
                var n = __read(t, 5),
                    i = n[0],
                    s = (n[1], n[2], n[3]),
                    u = n[4];
                if (void 0 === s) return Promise.reject(new Error("Provision Managers group not found."));
                var c = s.activeKeysetUuid ? keyset_1.findDecryptedKeyset(e, s.activeKeysetUuid) : void 0;
                if (!c) return Promise.reject(new Error("Provision Managers group keyset not found."));
                var l = model.VaultAccess.generate(a, r, {
                        acl: model.vaultACL.RWE | model.vaultACL.Manage
                    }),
                    v = model.VaultAccess.generate(a, s, {
                        acl: model.vaultACL.RWE
                    }),
                    d = model.VaultAccess.generate(a, i, {
                        acl: model.vaultACL.Recover
                    }),
                    p = o.encryptWithKey(c.symKey);
                return Promise.all([l, v, d, u, p])
            }).then(function(n) {
                var o = __read(n, 5),
                    i = o[0],
                    s = o[1],
                    u = o[2],
                    c = o[3],
                    l = o[4],
                    v = {
                        vaults: [parser.vaultAccessToAPI(i)],
                        groups: [c]
                    };
                if (!r.secretKey) return Promise.reject(new Error("Missing Secret Key."));
                var d = {
                    user: {
                        email: r.email,
                        language: r.language,
                        name: r.name,
                        newsletterPrefs: r.newsletterPrefs,
                        externalGUID: r.externalGUID,
                        accountKeyFormat: r.secretKey.format,
                        accountKeyUuid: r.secretKey.id,
                        avatar: r.avatar
                    },
                    keyset: l,
                    userAuth: model.Auth.getForUpload(t),
                    vault: parser.vaultToAPI(a, [s, u]),
                    access: v
                };
                return api.createProvisionUser(e.session, d)
            }).then(function(r) {
                var t = model.Person.Attr.VaultAccess | model.Person.Attr.PubKey | model.Person.Attr.Keysets;
                return parser.parsePerson(e, r, t, user_1.findCachedUser(e, r.uuid))
            })
        })
    };
exports.createProvisionUser = createProvisionUser;
var startUserProvision = function(e, r, t) {
    return makePromise("startUserProvision", function() {
        var n = r.uuid;
        return api.startUserProvision(e.session, n, t || {}).then(function() {
            context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
exports.startUserProvision = startUserProvision;
var getProvisionDetails = function(e, r, t) {
    return makePromise("getProvisionDetails", function() {
        return api.getProvisionDetails(e.session, r, t)
    })
};
exports.getProvisionDetails = getProvisionDetails;
var completeUserProvision = function(e, r) {
    return makePromise("completeUserProvision", function() {
        var t = api.getProvisionedPersonalVault(e.session, r.uuid).then(function(r) {
                return parser.parseVault(e, r, model.Vault.Attr.None, void 0)
            }).then(function(r) {
                return e.account ? (r.name = account_1.personalVaultName(e.account.type), r.type = model.Vault.TypePersonal, r.encryptAttrs()) : Promise.reject(new Error("Missing account."))
            }).then(function(e) {
                return parser.vaultToAPI(e)
            }),
            n = api.getUserProvisionedKeys(e.session, r.uuid).then(function(r) {
                return parser.parseProvisionedKeys(e, r)
            }).then(function(e) {
                return e.encryptForPerson(r)
            });
        return Promise.all([t, n]).then(function(t) {
            var n = __read(t, 2),
                o = n[0],
                i = {
                    provisionedKeys: n[1],
                    personalVault: o
                };
            return api.completeUserProvision(e.session, r.uuid, i)
        }).then(function() {
            context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged)
        })
    })
};
exports.completeUserProvision = completeUserProvision;
var resendUserProvision = function(e, r, t) {
    return makePromise("resendUserProvision", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var n;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return n = {
                            userUuids: r.map(function(e) {
                                return e.uuid
                            }),
                            useToken: t
                        }, [4, api.resendUserProvision(e.session, n)];
                    case 1:
                        return o.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
exports.resendUserProvision = resendUserProvision;
var resendAllUserProvision = function(e) {
    return makePromise("resendAllUsersProvision", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, api.resendAllUsersProvision(e.session)];
                    case 1:
                        return r.sent(), context_1.invalidateCache(e), e.nc.emit(util.notification.UsersChanged), [2]
                }
            })
        })
    })
};
exports.resendAllUserProvision = resendAllUserProvision;
var getResendDetails = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, makePromise("getResendDetails", function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var r;
                    return __generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, api.getResendDetails(e.session)];
                            case 1:
                                return r = t.sent(), [2, {
                                    lastResendAt: util_1.dateFromGolang(r.lastResendAt),
                                    resendAllCooldown: r.resendAllCooldown
                                }]
                        }
                    })
                })
            })]
        })
    })
};
exports.getResendDetails = getResendDetails;
var getProvisionManagersGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(o) {
            if (!(t = e.account)) throw new Error("Missing account.");
            return (n = t.groups.find(function(e) {
                return !e.isTypeOwners && !e.isTypeAdmins && e.hasPermission(model.Permission.ProvisionPeople)
            })) ? [2, group_1.getGroup(e, n, r)] : [2, void 0]
        })
    })
};
exports.getProvisionManagersGroup = getProvisionManagersGroup;
var replaceProvisionedUserKeyset = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, makePromise("replaceProvisionedUserKeyset", function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var n, o, i, s, a, u, c, l, v, d, p;
                    return __generator(this, function(f) {
                        switch (f.label) {
                            case 0:
                                return n = util.getValidUserUuid(r), [4, group_1.getActiveKeysetForGroup(e, t)];
                            case 1:
                                return o = f.sent(), [4, api.getUserProvisionedKeys(e.session, n)];
                            case 2:
                                return (i = f.sent()).keyset.encryptedBy === (null === (p = null === (d = e.user) || void 0 === d ? void 0 : d.activeKeyset) || void 0 === p ? void 0 : p.uuid) ? [2, {
                                    type: "cannot_decrypt"
                                }] : [4, model.Keyset.generateWithSigningKeys()];
                            case 3:
                                return (s = f.sent()).sn = i.keyset.sn + 1, [4, s.encryptWithKey(o.symKey)];
                            case 4:
                                a = f.sent(), f.label = 5;
                            case 5:
                                return f.trys.push([5, 7, , 8]), [4, parser.parseProvisionedKeys(e, i)];
                            case 6:
                                return u = f.sent(), [3, 8];
                            case 7:
                                return f.sent(), [2, {
                                    type: "cannot_decrypt"
                                }];
                            case 8:
                                return [4, u.encryptWithPubKey(s.ekeyPair.pubKey)];
                            case 9:
                                return c = f.sent(), l = c.groupKeysets, v = c.vaultKeys, [4, api.replaceKeysetForProvisionedUser(e.session, n, {
                                    keys: {
                                        groupKeysets: l,
                                        vaultKeys: v
                                    },
                                    keyset: a
                                })];
                            case 10:
                                return f.sent(), [2, {
                                    type: "success"
                                }]
                        }
                    })
                })
            })]
        })
    })
};
exports.replaceProvisionedUserKeyset = replaceProvisionedUserKeyset;