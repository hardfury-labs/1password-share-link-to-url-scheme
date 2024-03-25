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
        return new(t || (t = Promise))(function(o, u) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    u(e)
                }
            }

            function i(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    u(e)
                }
            }

            function c(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, i)
            }
            c((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, u, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return u = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (u[Symbol.iterator] = function() {
            return this
        }), u;

        function i(u) {
            return function(i) {
                return function(u) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                        switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                            case 0:
                            case 1:
                                o = u;
                                break;
                            case 4:
                                return a.label++, {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = u[1], u = [0];
                                continue;
                            case 7:
                                u = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                    a.label = u[1];
                                    break
                                }
                                if (6 === u[0] && a.label < o[1]) {
                                    a.label = o[1], o = u;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(u);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        u = r.call(e, a)
                    } catch (e) {
                        u = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & u[0]) throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, i])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, u = t.call(e),
            a = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = u.next()).done;) a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = u.return) && t.call(u)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.convertToBusiness = exports.convertToFamily = exports.convertToIndividual = void 0;
var api = __importStar(require("../api")),
    model_1 = require("../model"),
    model = __importStar(require("../model")),
    make_promise_1 = require("../util/make_promise"),
    account_1 = require("./account"),
    billing_1 = require("./billing"),
    context_1 = require("./context"),
    group_1 = require("./group"),
    group_membership_1 = require("./group_membership"),
    vault_1 = require("./vault"),
    vault_access_1 = require("./vault_access"),
    makePromise = make_promise_1.makePromise("action/convert_account"),
    convertToIndividual = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (!e.user) throw new Error("Missing user");
                        return r = e.user, [4, convertAccount(e, "I", function() {
                            return api.changeAccountType(e.session, {
                                type: "I",
                                accountName: r.name
                            })
                        })];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    };
exports.convertToIndividual = convertToIndividual;
var convertToFamily = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, convertAccount(e, "F", function() {
                        return api.changeAccountType(e.session, {
                            type: "F",
                            accountName: r,
                            childAccountCode: t
                        })
                    })];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
exports.convertToFamily = convertToFamily;
var convertToBusiness = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, account_1.getDomain(e, r)];
                case 1:
                    return t = n.sent(), [4, convertAccount(e, "B", function() {
                        return api.changeAccountType(e.session, {
                            type: "B",
                            accountName: r,
                            domain: t
                        })
                    })];
                case 2:
                    return n.sent(), [2]
            }
        })
    })
};
exports.convertToBusiness = convertToBusiness;
var convertAccount = function(e, r, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return canConvert(e), [4, reload(e)];
                    case 1:
                        return n.sent(), [4, convertFeatures(e, r)];
                    case 2:
                        return n.sent(), [4, t()];
                    case 3:
                        return n.sent(), [4, updateType(e, r)];
                    case 4:
                        return n.sent(), [4, updateTiers(e)];
                    case 5:
                        return n.sent(), [2]
                }
            })
        })
    },
    canConvert = function(e) {
        var r = e.account,
            t = e.user;
        if (!r) throw new Error("Missing account");
        if (!t) throw new Error("Missing user")
    },
    updateType = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return (t = e.account) ? (t.type = r, [4, reload(e)]) : [2];
                    case 1:
                        return n.sent(), [2]
                }
            })
        })
    },
    updateTiers = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return (r = e.account) ? (t = r.subscription.availableTiers) && t.length > 0 ? [4, billing_1.getAvailableTiers(e)] : [3, 2] : [2];
                    case 1:
                        n.sent(), n.label = 2;
                    case 2:
                        return context_1.changed(e), [2]
                }
            })
        })
    },
    reload = function(e) {
        return makePromise("reload", function() {
            var r = account_1.getAccountWithAttrs(e, ["billing", "invite", "settings", "tier", "user-flags", "groups"]),
                t = vault_1.getVaults(e);
            return Promise.all([r, t])
        })
    },
    convertFeatures = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (r) {
                    case "B":
                        return [2, toBusiness(e)];
                    case "F":
                        return [2, toFamily(e)];
                    case "I":
                        return [2];
                    default:
                        throw new Error("Unknown account type")
                }
                return [2]
            })
        })
    },
    toBusiness = function(e) {
        return makePromise("convertToBusiness", function() {
            var r = e.user;
            if (!r) return Promise.reject(new Error("Missing user"));
            var t = {
                attrs: model.Group.Attr.Memberships | model.Group.Attr.PubKey
            };
            return Promise.all([group_1.getAdministratorsGroup(e, t), group_1.getOwnersGroup(e, t), group_1.getRecoveryGroup(e, t)]).then(function(t) {
                var n = __read(t, 3),
                    o = n[0],
                    u = n[1],
                    a = n[2];
                return createTeamMembersGroupIfNeeded(e, r, a).then(function(r) {
                    return createTeamVaultIfNeeded(e, u, o, a, r)
                })
            }).then(function() {})
        })
    },
    toFamily = function(e) {
        return makePromise("convertToFamily", function() {
            var r, t, n, o = e.user;
            if (!o) return Promise.reject(new Error("Missing user"));
            var u = {
                attrs: model.Group.Attr.Memberships | model.Group.Attr.PubKey
            };
            return Promise.all([group_1.getAdministratorsGroup(e, u), group_1.getOwnersGroup(e, u), group_1.getRecoveryGroup(e, u)]).then(function(o) {
                var u;
                return u = __read(o, 3), r = u[0], t = u[1], n = u[2], api.getPartialUsers(e.session, {
                    attrs: ["combinedPermissions"]
                })
            }).then(function(n) {
                var o = n.users,
                    u = o.filter(function(e) {
                        return model_1.User.isOwner(e) && !model_1.User.isAdmin(e)
                    }).map(function(e) {
                        return {
                            uuid: e.uuid,
                            role: api.GroupMembership.Role.Manager
                        }
                    }),
                    a = o.filter(function(e) {
                        return model_1.User.isAdmin(e) && !model_1.User.isOwner(e)
                    }).map(function(e) {
                        return {
                            uuid: e.uuid,
                            role: api.GroupMembership.Role.Manager
                        }
                    });
                return Promise.all([group_membership_1.updateGroupMemberships(e, {
                    group: r,
                    add: u,
                    remove: []
                }), group_membership_1.updateGroupMemberships(e, {
                    group: t,
                    add: a,
                    remove: []
                })])
            }).then(function() {
                return vault_1.getVaults(e)
            }).then(function(n) {
                var o = [];
                return n.filter(function(e) {
                    return e.type !== model.Vault.TypePersonal && model.Vault.activeUserHasAcl(e, model.vaultACL.Manage)
                }).forEach(function(n) {
                    var u = !1,
                        a = !1;
                    n.accessList.filter(function(e) {
                        return "group" === e.accessorType
                    }).forEach(function(r) {
                        var t = e.account && e.account.findGroup(r.accessorUuid);
                        if (!t) throw new Error("Missing group " + r.accessorUuid);
                        switch (t.type) {
                            case model.Group.TypeOwners:
                                u = !0, r.acl = model.vaultACL.Manage, o.push(vault_access_1.updateVaultAccessPermissions(e, r));
                                break;
                            case model.Group.TypeAdmins:
                                a = !0, r.acl = model.vaultACL.Manage, o.push(vault_access_1.updateVaultAccessPermissions(e, r));
                                break;
                            default:
                                var n = (r.acl & model.vaultACL.RWE) > (r.acl & model.vaultACL.ALL_READ);
                                r.acl = n ? model.vaultACL.RWE : model.vaultACL.ALL_READ, o.push(vault_access_1.updateVaultAccessPermissions(e, r))
                        }
                    });
                    var i = [];
                    if (u || i.push(t), a || i.push(r), i.length > 0) {
                        var c = i.map(function(e) {
                            return {
                                accessorType: e.accessorType,
                                uuid: e.uuid
                            }
                        });
                        o.push(vault_access_1.addAccessorsToVault(e, c, n, {
                            default: {
                                acl: model.vaultACL.Manage
                            }
                        }))
                    }
                }), Promise.all(o)
            }).then(function() {
                return createTeamMembersGroupIfNeeded(e, o, n)
            }).then(function(o) {
                return createTeamVaultIfNeeded(e, t, r, n, o)
            }).then(function() {})
        })
    },
    createTeamMembersGroupIfNeeded = function(e, r, t) {
        return makePromise("createTeamMembersGroupIfNeeded", function() {
            if (e.account && e.account.teamMembersGroup) return group_1.getTeamMembersGroup(e, {
                attrs: model.Group.Attr.PubKey
            });
            var n = new model.Group({
                desc: "All team members.",
                name: "Team Members",
                type: model.Group.TypeTeamMembers
            });
            return group_1.generateNewKeysetForGroup(e, n, t).then(function(e) {
                return n.addMembership(e, r, {
                    role: api.GroupMembership.Role.Member
                })
            }).then(function() {
                return group_1.sendGroup(e, n)
            })
        })
    },
    createTeamVaultIfNeeded = function(e, r, t, n, o) {
        return makePromise("createTeamVaultIfNeeded", function() {
            return vault_1.getEveryoneVault(e).then(function(u) {
                if (u) return u;
                var a = account_1.createSharedVault();
                return a.generateNewKey().then(function() {
                    return Promise.all([model.VaultAccess.generate(a, r, {
                        acl: model.vaultACL.Manage
                    }), model.VaultAccess.generate(a, t, {
                        acl: model.vaultACL.Manage
                    }), model.VaultAccess.generate(a, n, {
                        acl: model.vaultACL.Recover
                    }), model.VaultAccess.generate(a, o, {
                        acl: model.vaultACL.ALL_READ | model.vaultACL.ALL_WRITE | model.vaultACL.ALL_EXPORT
                    })])
                }).then(function(r) {
                    return vault_1.sendVault(e, a, r)
                })
            })
        })
    };