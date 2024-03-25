var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function u(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function i(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, i)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, a, u = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function i(a) {
            return function(i) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return u.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    u.label = a[1];
                                    break
                                }
                                if (6 === a[0] && u.label < o[1]) {
                                    u.label = o[1], o = a;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(a);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        a = r.call(e, u)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, i])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, a = t.call(e),
            u = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) u.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return u
    };
import * as api from "../api";
import {
    User
} from "../model";
import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    createSharedVault,
    getAccountWithAttrs,
    getDomain
} from "./account";
import {
    getAvailableTiers
} from "./billing";
import {
    changed
} from "./context";
import {
    generateNewKeysetForGroup,
    getAdministratorsGroup,
    getOwnersGroup,
    getRecoveryGroup,
    getTeamMembersGroup,
    sendGroup
} from "./group";
import {
    updateGroupMemberships
} from "./group_membership";
import {
    getEveryoneVault,
    getVaults,
    sendVault
} from "./vault";
import {
    addAccessorsToVault,
    updateVaultAccessPermissions
} from "./vault_access";
var makePromise = mp("action/convert_account");
export var convertToIndividual = function(e) {
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
export var convertToFamily = function(e, r, t) {
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
export var convertToBusiness = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, getDomain(e, r)];
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
                        return (r = e.account) ? (t = r.subscription.availableTiers) && t.length > 0 ? [4, getAvailableTiers(e)] : [3, 2] : [2];
                    case 1:
                        n.sent(), n.label = 2;
                    case 2:
                        return changed(e), [2]
                }
            })
        })
    },
    reload = function(e) {
        return makePromise("reload", function() {
            var r = getAccountWithAttrs(e, ["billing", "invite", "settings", "tier", "user-flags", "groups"]),
                t = getVaults(e);
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
            return Promise.all([getAdministratorsGroup(e, t), getOwnersGroup(e, t), getRecoveryGroup(e, t)]).then(function(t) {
                var n = __read(t, 3),
                    o = n[0],
                    a = n[1],
                    u = n[2];
                return createTeamMembersGroupIfNeeded(e, r, u).then(function(r) {
                    return createTeamVaultIfNeeded(e, a, o, u, r)
                })
            }).then(function() {})
        })
    },
    toFamily = function(e) {
        return makePromise("convertToFamily", function() {
            var r, t, n, o = e.user;
            if (!o) return Promise.reject(new Error("Missing user"));
            var a = {
                attrs: model.Group.Attr.Memberships | model.Group.Attr.PubKey
            };
            return Promise.all([getAdministratorsGroup(e, a), getOwnersGroup(e, a), getRecoveryGroup(e, a)]).then(function(o) {
                var a;
                return a = __read(o, 3), r = a[0], t = a[1], n = a[2], api.getPartialUsers(e.session, {
                    attrs: ["combinedPermissions"]
                })
            }).then(function(n) {
                var o = n.users,
                    a = o.filter(function(e) {
                        return User.isOwner(e) && !User.isAdmin(e)
                    }).map(function(e) {
                        return {
                            uuid: e.uuid,
                            role: api.GroupMembership.Role.Manager
                        }
                    }),
                    u = o.filter(function(e) {
                        return User.isAdmin(e) && !User.isOwner(e)
                    }).map(function(e) {
                        return {
                            uuid: e.uuid,
                            role: api.GroupMembership.Role.Manager
                        }
                    });
                return Promise.all([updateGroupMemberships(e, {
                    group: r,
                    add: a,
                    remove: []
                }), updateGroupMemberships(e, {
                    group: t,
                    add: u,
                    remove: []
                })])
            }).then(function() {
                return getVaults(e)
            }).then(function(n) {
                var o = [];
                return n.filter(function(e) {
                    return e.type !== model.Vault.TypePersonal && model.Vault.activeUserHasAcl(e, model.vaultACL.Manage)
                }).forEach(function(n) {
                    var a = !1,
                        u = !1;
                    n.accessList.filter(function(e) {
                        return "group" === e.accessorType
                    }).forEach(function(r) {
                        var t = e.account && e.account.findGroup(r.accessorUuid);
                        if (!t) throw new Error("Missing group " + r.accessorUuid);
                        switch (t.type) {
                            case model.Group.TypeOwners:
                                a = !0, r.acl = model.vaultACL.Manage, o.push(updateVaultAccessPermissions(e, r));
                                break;
                            case model.Group.TypeAdmins:
                                u = !0, r.acl = model.vaultACL.Manage, o.push(updateVaultAccessPermissions(e, r));
                                break;
                            default:
                                var n = (r.acl & model.vaultACL.RWE) > (r.acl & model.vaultACL.ALL_READ);
                                r.acl = n ? model.vaultACL.RWE : model.vaultACL.ALL_READ, o.push(updateVaultAccessPermissions(e, r))
                        }
                    });
                    var i = [];
                    if (a || i.push(t), u || i.push(r), i.length > 0) {
                        var s = i.map(function(e) {
                            return {
                                accessorType: e.accessorType,
                                uuid: e.uuid
                            }
                        });
                        o.push(addAccessorsToVault(e, s, n, {
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
            if (e.account && e.account.teamMembersGroup) return getTeamMembersGroup(e, {
                attrs: model.Group.Attr.PubKey
            });
            var n = new model.Group({
                desc: "All team members.",
                name: "Team Members",
                type: model.Group.TypeTeamMembers
            });
            return generateNewKeysetForGroup(e, n, t).then(function(e) {
                return n.addMembership(e, r, {
                    role: api.GroupMembership.Role.Member
                })
            }).then(function() {
                return sendGroup(e, n)
            })
        })
    },
    createTeamVaultIfNeeded = function(e, r, t, n, o) {
        return makePromise("createTeamVaultIfNeeded", function() {
            return getEveryoneVault(e).then(function(a) {
                if (a) return a;
                var u = createSharedVault();
                return u.generateNewKey().then(function() {
                    return Promise.all([model.VaultAccess.generate(u, r, {
                        acl: model.vaultACL.Manage
                    }), model.VaultAccess.generate(u, t, {
                        acl: model.vaultACL.Manage
                    }), model.VaultAccess.generate(u, n, {
                        acl: model.vaultACL.Recover
                    }), model.VaultAccess.generate(u, o, {
                        acl: model.vaultACL.ALL_READ | model.vaultACL.ALL_WRITE | model.vaultACL.ALL_EXPORT
                    })])
                }).then(function(r) {
                    return sendVault(e, u, r)
                })
            })
        })
    };