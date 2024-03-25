var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(i, o) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(s, a)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, o, s = {
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return s.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    s.label = o[1];
                                    break
                                }
                                if (6 === o[0] && s.label < i[1]) {
                                    s.label = i[1], i = o;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(o);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        o = r.call(e, s)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        t = i = 0
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
    __rest = this && this.__rest || function(e, r) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) r.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (t[n[i]] = e[n[i]])
        }
        return t
    };
import * as api from "../api";
import * as model from "../model";
import {
    User
} from "../model";
import * as util from "../util";
import {
    getAccountWithAttrs
} from "./account";
import {
    getMukSrpXCredentials,
    signIn
} from "./auth";
import {
    Context
} from "./context";
import {
    createGroup,
    getGroup,
    getTeamMembersGroup,
    updateGroupPermissions
} from "./group";
import {
    deleteGroupMembership,
    updateGroupMemberships,
    updateUserMemberships
} from "./group_membership";
import {
    getGroupUsersWithPermissions
} from "./partial_user";
import {
    createProvisionUser,
    getProvisionManagersGroup,
    startUserProvision
} from "./provision";
import {
    createServiceAccountPreflight,
    getServiceAccountGroupMemberships,
    prepServiceAccount,
    createServiceAccountV3
} from "./serviceaccounts";
import {
    deleteUsers,
    getPerson,
    prepProvisionUser
} from "./user";
export var createProvisionManagersGroup = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, t, n, i, o;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return r = {
                        name: "Provision Managers",
                        type: model.Group.TypeUserDefined,
                        desc: "",
                        avatar: void 0,
                        permissions: model.Permission.ProvisionPeople
                    }, [4, createGroup(e, r)];
                case 1:
                    return t = s.sent(), [4, getGroup(e, t.uuid, {
                        attrs: model.Group.Attr.PubKey | model.Group.Attr.Memberships
                    })];
                case 2:
                    return n = s.sent(), i = model.BitSet.enable(n.permissions, model.Permission.ProvisionPeople), [4, updateGroupPermissions(e, n, i)];
                case 3:
                    return o = s.sent(), [4, getAccountWithAttrs(e, ["me"])];
                case 4:
                    return s.sent(), [2, o]
            }
        })
    })
};
export var createProvisionManagerSA = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, o, s, a, u, c, l, p;
        return __generator(this, function(d) {
            switch (d.label) {
                case 0:
                    return [4, createServiceAccountPreflight(e, api.ServiceAccountType.Provisioning)];
                case 1:
                    return n = d.sent(), [4, prepServiceAccount(e, n.email, "Automated User Provisioning")];
                case 2:
                    return i = d.sent(), o = i.user, s = i.encKeyset, a = i.creds, u = {
                        uuid: model.Person.UUIDNewlyCreatedServiceAccount,
                        pubKey: s.pubKey
                    }, [4, getTeamMembersGroup(e)];
                case 3:
                    return c = d.sent(), [4, getServiceAccountGroupMemberships(e, u, [r, c], t)];
                case 4:
                    return l = d.sent(), p = {
                        srpX: a.srpX,
                        params: a.userAuth
                    }, [4, createServiceAccountV3(e, s, o, n, p, api.ServiceAccountType.Provisioning, {
                        groups: l
                    })];
                case 5:
                    return [2, {
                        user: d.sent().person,
                        creds: a
                    }]
            }
        })
    })
};
export var createProvisionManager = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, o, s;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, prepProvisionUser(e, r, "Provision Manager")];
                case 1:
                    return n = a.sent(), i = n.user, o = n.userAuth, [4, i.encryptActiveKeysetWithMasterKey()];
                case 2:
                    return a.sent(), [4, createProvisionUser(e, i, o)];
                case 3:
                    return s = a.sent(), [4, updateUserMemberships(e, {
                        user: s,
                        add: [{
                            uuid: t.uuid,
                            role: api.GroupMembership.Role.Member
                        }],
                        remove: []
                    })];
                case 4:
                    return a.sent(), [4, startUserProvision(e, s, {
                        token: !0
                    })];
                case 5:
                    return a.sent(), [2, {
                        user: s,
                        creds: i.getCredentials()
                    }]
            }
        })
    })
};
export var getProvisionManagersV2 = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, getGroupUsersWithPermissions(e, r.uuid)];
                case 1:
                    return t = i.sent(), 0 === (n = t.users.filter(function(e) {
                        return User.isProvisionManager(e) && User.isActive(e) && !User.isServiceAccount(e)
                    })).length ? [2, void 0] : [2, n]
            }
        })
    })
};
export var getProvisionManager = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, getGroupUsersWithPermissions(e, r.uuid)];
                case 1:
                    return t = i.sent(), (n = t.users.find(function(e) {
                        return !User.isOwner(e) && !User.isAdmin(e)
                    })) ? [2, getPerson(e, n.uuid, {
                        attrs: model.Person.Attr.PubKey,
                        mustReload: !1
                    })] : [2, void 0]
            }
        })
    })
};
export var addAdminToProvisioningGroup = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    if (!e.user) throw new Error("User is missing");
                    return [4, getGroupUsersWithPermissions(e, r.uuid)];
                case 1:
                    return t = n.sent(), t.users.find(function(r) {
                        var t;
                        return r.uuid === (null === (t = e.user) || void 0 === t ? void 0 : t.uuid)
                    }) ? [3, 3] : [4, updateGroupMemberships(e, {
                        group: r,
                        add: [{
                            uuid: e.user.uuid,
                            role: api.GroupMembership.Role.Manager
                        }],
                        remove: []
                    })];
                case 2:
                    n.sent(), n.label = 3;
                case 3:
                    return [2]
            }
        })
    })
};
export var removeSCIMSetupAdministrator = function(e) {
    return function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, t;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, getProvisionManagersGroup(e, {
                            attrs: model.Group.Attr.Memberships,
                            mustReload: !0
                        })];
                    case 1:
                        if (!(r = n.sent())) throw new Error("Provision Managers group is missing");
                        if (!r.memberships) throw new Error("Provision Managers group is empty");
                        return (t = r.memberships.find(function(r) {
                            var t;
                            return r.memberUuid === (null === (t = e.user) || void 0 === t ? void 0 : t.uuid)
                        })) ? [4, deleteGroupMembership(e, t)] : [3, 3];
                    case 2:
                        n.sent(), n.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }
};
export var createHealthMonitoringCheck = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.createMonitoringCheck(e.session, {
                        domain: r,
                        bearerToken: t
                    })];
                case 1:
                    return n.sent(), [3, 3];
                case 2:
                    throw n.sent(), new Error("Couldn’t turn on SCIM bridge health monitoring.");
                case 3:
                    return [2]
            }
        })
    })
};
export var generateSessionFile = function(e, r) {
    return function(t, n, i, o) {
        return __awaiter(void 0, void 0, void 0, function() {
            var s, a, u, c, l, p, d, v, h, f, m, g, b;
            return __generator(this, function(_) {
                switch (_.label) {
                    case 0:
                        if (!e.account) throw new Error("Account is missing.");
                        if (s = new Context(e.config), a = {
                                allowReauthorization: !0,
                                suppressClientNotifications: !0,
                                isDesignatedAsPublic: !1
                            }, !("S" === n.type)) return [3, 1];
                        if (!("userAuth" in t)) throw new Error("srpCredentials are missing.");
                        if (void 0 === (u = t).userAuth) throw new Error("Missing credential auth information");
                        return [3, 3];
                    case 1:
                        return [4, signIn(s, t, a).catch(function(e) {
                            throw new Error("Failed to authenticate the Provision Manager:" + e.message)
                        })];
                    case 2:
                        if (_.sent(), void 0 === (c = getMukSrpXCredentials(s))) throw new Error("srpCredentials are missing.");
                        if (void 0 === (l = null === (b = s.session.auth) || void 0 === b ? void 0 : b.params)) throw new Error("Missing session auth information");
                        u = __assign(__assign({}, c), {
                            signInAddress: e.account && e.account.urlHost(e.config.server) || "",
                            userAuth: l
                        }), _.label = 3;
                    case 3:
                        return [4, model.LocalAuth.generate(u)];
                    case 4:
                        return p = _.sent(), [4, model.LocalAuth.generateVerifierAndToken()];
                    case 5:
                        if (d = _.sent(), v = d.bearerToken, h = __rest(d, ["bearerToken"]), !o) return [3, 7];
                        if (!i) throw new Error("Enter the address where the SCIM bridge will be available.");
                        return [4, createHealthMonitoringCheck(e, i, v)];
                    case 6:
                        _.sent(), _.label = 7;
                    case 7:
                        return f = __assign(__assign({
                            version: "2"
                        }, p.localAuth), {
                            healthVerifier: h,
                            deviceUuid: util.generateUUID(),
                            domain: r
                        }), m = p.bearerToken, g = JSON.stringify(f), [2, {
                            bearerToken: m,
                            healthVerifierBearerToken: v,
                            fileContents: g
                        }]
                }
            })
        })
    }
};
export var generateSessionFileWithServiceAccount = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, o, s, a, u, c;
        return __generator(this, function(l) {
            switch (l.label) {
                case 0:
                    if (!e.account) throw new Error("Account is missing.");
                    if (!r.userAuth) throw new Error("Missing credential auth information.");
                    return [4, model.LocalAuth.generate(r)];
                case 1:
                    return n = l.sent(), [4, model.LocalAuth.generateVerifierAndToken()];
                case 2:
                    return i = l.sent(), o = i.bearerToken, s = __rest(i, ["bearerToken"]), a = __assign(__assign({
                        version: "2"
                    }, n.localAuth), {
                        healthVerifier: s,
                        deviceUuid: util.generateUUID(),
                        domain: t
                    }), u = n.bearerToken, c = JSON.stringify(a), [2, {
                        bearerToken: u,
                        healthVerifierBearerToken: o,
                        fileContents: c
                    }]
            }
        })
    })
};
export var recreateProvisionManager = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, o, s, a, u, c, l;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    return [4, getPerson(e, r.uuid, {
                        attrs: model.Person.Attr.Groups
                    })];
                case 1:
                    return n = p.sent(), [4, getTeamMembersGroup(e)];
                case 2:
                    return i = p.sent(), o = n.groupMemberships.filter(function(e) {
                        return e.groupUuid !== t.uuid && e.groupUuid !== i.uuid
                    }).map(function(e) {
                        return e.groupUuid
                    }), [4, createProvisionManagerSA(e, t)];
                case 3:
                    return s = p.sent(), a = s.user, u = s.creds, o.length > 0 ? (c = o.map(function(e) {
                        return {
                            uuid: e,
                            role: api.GroupMembership.Role.Manager
                        }
                    }), l = {
                        user: a.uuid,
                        add: c,
                        remove: []
                    }, [4, updateUserMemberships(e, l)]) : [3, 5];
                case 4:
                    p.sent(), p.label = 5;
                case 5:
                    return [4, deleteUsers(e, [r])];
                case 6:
                    return p.sent(), [2, {
                        user: a,
                        creds: u
                    }]
            }
        })
    })
};