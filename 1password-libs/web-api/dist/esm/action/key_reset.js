var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    o.label = i[1], i = a;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(a);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, a = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = a.next()).done;) o.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
import {
    unparse
} from "papaparse";
import {
    getAccountHasUsedCli,
    getUsersWithCliAffectedData,
    getVaultsCreatedByCli,
    lockVault,
    unlockVault
} from "../api/key_reset";
import {
    Group
} from "../model/group";
import {
    Vault
} from "../model/vault";
import * as parser from "../parser";
import * as util from "../util";
import {
    getGroup
} from "./group";
import {
    correctCliAffectedFiles,
    correctCliAffectedPrivateFiles,
    getCliAffectedFiles,
    getCliAffectedPrivateFiles,
    getCliFileEffort,
    getHydratedRef,
    getUnwriteableFileVaults,
    getVaultUuidsForFiles
} from "./key_reset_files";
import {
    correctCliAffectedGroups,
    getCliAffectedGroups,
    getCliGroupEffort
} from "./key_reset_groups";
import {
    correctCliAffectedProvisionedUsers,
    getCliAffectedProvisionedUsersInfo,
    getCliProvEffort
} from "./key_reset_prov";
import {
    correctCliAffectedPrivateVault,
    correctCliAffectedVaults,
    getCliAffectedPrivateVaultStatus,
    getCliPrivateVaultEffort,
    getCliVaultEffort
} from "./key_reset_vaults";
import {
    getPartialUsersV2
} from "./partial_user";
export var getCliAffectedStatus = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, getAccountHasUsedCli(e.session)];
                case 1:
                    return n.sent() ? (null === (r = e.user) || void 0 === r ? void 0 : r.isOwner()) ? [4, getAffectedOwnerStatus(e)] : [3, 3] : [2, {
                        type: "not_affected"
                    }];
                case 2:
                    return t = n.sent(), [3, 5];
                case 3:
                    return [4, getAffectedUserStatus(e)];
                case 4:
                    t = n.sent(), n.label = 5;
                case 5:
                    return [2, t]
            }
        })
    })
};
var getAffectedOwnerStatus = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, i, a, o, s, u, l, f, c, d, v, p, _, g, h, m, w;
            return __generator(this, function(y) {
                switch (y.label) {
                    case 0:
                        return [4, Promise.all([getVaultsCreatedByCli(e.session), getCliAffectedProvisionedUsersInfo(e)])];
                    case 1:
                        if (t = __read.apply(void 0, [y.sent(), 2]), r = t[0], n = r.vaults, i = r.hasVaultsInStateT, a = t[1], !i && "affected_prov_group" !== a.type) return [3, 3];
                        if (!(o = a.groupUuid)) throw new Error("getAffectedOwnerStatus: Missing Provision Managers group, but affected provisioned users' vaults are present");
                        return [4, getGroup(e, o, {
                            mustReload: !0,
                            attrs: Group.Attr.Memberships
                        })];
                    case 2:
                        if (!(s = y.sent()).getMembership((null === (h = e.user) || void 0 === h ? void 0 : h.uuid) || "")) return [2, {
                            type: "needs_prov_group_access",
                            group: s
                        }];
                        y.label = 3;
                    case 3:
                        return [4, Promise.all([getCliAffectedGroups(e), getCliAffectedFiles(e)])];
                    case 4:
                        return u = __read.apply(void 0, [y.sent(), 2]), l = u[0], f = u[1], isAffectedOwner(c = {
                            provInfo: a,
                            groups: l,
                            vaults: n,
                            files: f
                        }) ? [2, __assign({
                            type: "affected_owner"
                        }, c)] : (null === (m = e.account) || void 0 === m ? void 0 : m.isFamily) ? (g = {
                            type: "family_maybe_affected"
                        }, [4, getOtherFamilyMembers(e)]) : [3, 6];
                    case 5:
                        return [2, (g.list = y.sent(), g)];
                    case 6:
                        return (null === (w = e.account) || void 0 === w ? void 0 : w.isIndividual) ? [2, {
                            type: "not_affected"
                        }] : [4, getUsersWithCliAffectedData(e.session)];
                    case 7:
                        return d = y.sent(), v = d.users, p = d.affectedProvisionManager, [2, (_ = p ? v.filter(function(e) {
                            return e.uuid !== p.uuid
                        }) : v).length > 0 || p ? {
                            type: "others_affected",
                            list: _,
                            affectedProvisionManager: p
                        } : {
                            type: "not_affected"
                        }]
                }
            })
        })
    },
    isAffectedOwner = function(e) {
        return "affected_prov_group" === e.provInfo.type || "affected_prov_users" === e.provInfo.type || e.groups.length > 0 || e.vaults.length > 0 || e.files.length > 0
    },
    getOtherFamilyMembers = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, getPartialUsersV2(e, {
                            limit: 100
                        })];
                    case 1:
                        return [2, t.sent().users.filter(function(t) {
                            var r;
                            return t.uuid !== (null === (r = e.user) || void 0 === r ? void 0 : r.uuid)
                        })]
                }
            })
        })
    },
    getAffectedUserStatus = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, i;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, Promise.all([getCliAffectedPrivateVaultStatus(e), getCliAffectedPrivateFiles(e)])];
                    case 1:
                        return t = __read.apply(void 0, [a.sent(), 2]), r = t[0], n = t[1], [2, isAffectedUser(i = {
                            privateVaultAffected: r,
                            files: n
                        }) ? __assign({
                            type: "affected_user"
                        }, i) : {
                            type: "not_affected"
                        }]
                }
            })
        })
    },
    isAffectedUser = function(e) {
        return e.privateVaultAffected || e.files.length > 0
    };
export var updateAllCliAffectedData = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, "affected_owner" === t.type ? updateAllCliAffectedOwnerData(e, t, r) : updateAllCliAffectedUserData(e, t, r)]
        })
    })
};
var updateAllCliAffectedOwnerData = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, i, a, o, s, u, l, f, c, d, v, p, _;
            return __generator(this, function(g) {
                switch (g.label) {
                    case 0:
                        return n = 0, i = getCliProvEffort(t.provInfo), a = getCliGroupEffort(t.groups), o = getCliVaultEffort(t.vaults), s = getCliFileEffort(t.files), u = i + a + o + s, i > 0 ? [4, getBadStateUsersError(e)] : [3, 2];
                    case 1:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            error: c
                        }];
                        g.label = 2;
                    case 2:
                        return s > 0 ? [4, getUnwriteableFileVaultsError(e, t.files)] : [3, 4];
                    case 3:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            error: c
                        }];
                        g.label = 4;
                    case 4:
                        return "not_affected" !== t.provInfo.type ? [3, 5] : (f = void 0, [3, 7]);
                    case 5:
                        return [4, correctCliAffectedProvisionedUsers(e, t.provInfo, function(e) {
                            return r((n + e * i) / u, "prov")
                        })];
                    case 6:
                        f = g.sent(), g.label = 7;
                    case 7:
                        return n += i, (l = f) && l.usersToDeprovision.length > 0 ? [2, {
                            type: "affected_owner_result",
                            provResult: l
                        }] : a > 0 ? [4, getBadStateUsersError(e)] : [3, 9];
                    case 8:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            error: c
                        }];
                        g.label = 9;
                    case 9:
                        return 0 === t.groups.length ? [3, 11] : [4, correctCliAffectedGroups(e, function(e) {
                            return r((n + e * a) / u, "groups")
                        })];
                    case 10:
                        g.sent(), g.label = 11;
                    case 11:
                        return n += a, o > 0 ? [4, getBadStateUsersError(e)] : [3, 13];
                    case 12:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            error: c
                        }];
                        g.label = 13;
                    case 13:
                        return t.vaults.length > 0 ? [4, correctCliAffectedVaults(e, function(e) {
                            return r((n + e * o) / u, "vaults")
                        })] : [3, 15];
                    case 14:
                        return v = g.sent(), [3, 16];
                    case 15:
                        v = {
                            succeeded: {},
                            succeededCsv: void 0
                        }, g.label = 16;
                    case 16:
                        return n += o, null !== (_ = null === (p = (d = v).errors) || void 0 === p ? void 0 : p.length) && void 0 !== _ && _ ? [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            vaultsResult: d
                        }] : 0 === t.files.length ? [3, 18] : [4, correctCliAffectedFiles(e, function(e) {
                            return r((n + e * s) / u, "files")
                        })];
                    case 17:
                        g.sent(), g.label = 18;
                    case 18:
                        return n += s, r(1, "done"), [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            vaultsResult: d
                        }]
                }
            })
        })
    },
    getUnwriteableFileVaultsError = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, a;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, getUnwriteableFileVaults(e, t)];
                    case 1:
                        return (r = o.sent()).length > 0 ? (n = __spread([
                            ["Name", "ID"]
                        ], r.map(function(e) {
                            return [e.name, e.uuid]
                        })), i = unparse(n, {
                            newline: "\n"
                        }), a = new Blob([i], {
                            type: "text/csv"
                        }), [2, {
                            type: "unwriteable_file_vaults",
                            vaults: r.map(function(e) {
                                return {
                                    name: e.name,
                                    uuid: e.uuid
                                }
                            }),
                            csv: a
                        }]) : [2]
                }
            })
        })
    },
    getBadStateUsersError = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, getPartialUsersV2(e, {
                            states: ["4"],
                            limit: 1
                        })];
                    case 1:
                        return (t = n.sent().totalCount) > 0 ? [2, {
                            type: "must_complete_provisioning",
                            count: t
                        }] : [4, getPartialUsersV2(e, {
                            states: ["2"],
                            limit: 1
                        })];
                    case 2:
                        return (r = n.sent().totalCount) > 0 ? [2, {
                            type: "must_complete_recovery",
                            count: r
                        }] : [2]
                }
            })
        })
    },
    updateAllCliAffectedUserData = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, i, a, o, s, u;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return n = 0, i = getCliPrivateVaultEffort(t.privateVaultAffected), a = getCliFileEffort(t.files), o = i + a, t.privateVaultAffected ? [4, correctCliAffectedPrivateVault(e, function(e) {
                            return r((n + e * i) / o, "p_vault")
                        })] : [3, 2];
                    case 1:
                        return u = l.sent(), [3, 3];
                    case 2:
                        u = void 0, l.label = 3;
                    case 3:
                        return s = u, n += i, 0 === t.files.length ? [3, 5] : [4, correctCliAffectedPrivateFiles(e, function(e) {
                            return r((n + e * a) / o, "files")
                        })];
                    case 4:
                        l.sent(), l.label = 5;
                    case 5:
                        return n += a, r(1, "done"), [2, {
                            type: "affected_user_result",
                            privateVaultResult: s
                        }]
                }
            })
        })
    };
export var getCveReportCsv = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a, o, s;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, Promise.all([getVaultCsvRows(e, t.vaults), getFileCsvRows(e, t.files)])];
                case 1:
                    return r = __read.apply(void 0, [u.sent(), 2]), n = r[0], i = r[1], a = __spread([{
                        kind: "Kind",
                        name: "Name",
                        uuid: "ID",
                        notes: "Notes"
                    }], getProvCsvRows(t.provInfo), getGroupCsvRows(t.groups), n, i), o = a.map(function(e) {
                        return [e.kind, e.name, e.uuid, e.notes]
                    }), s = unparse(o, {
                        newline: "\n"
                    }), [2, new Blob([s], {
                        type: "text/csv"
                    })]
            }
        })
    })
};
var getProvCsvRows = function(e) {
        if ("not_affected" === e.type) return [];
        var t = e.users.map(function(e) {
            return {
                kind: "Provisioned User",
                name: e.name,
                uuid: e.uuid
            }
        });
        return "affected_prov_group" === e.type ? __spread(t, [{
            kind: "Provision Managers Group",
            name: e.groupName,
            uuid: e.groupUuid,
            notes: "UUID will change"
        }]) : t
    },
    getGroupCsvRows = function(e) {
        return e.map(function(e) {
            return {
                kind: "Group",
                name: e.name,
                uuid: e.uuid
            }
        })
    },
    getVaultCsvRows = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, parser.parseVaults(e, t)];
                    case 1:
                        return [2, r.sent().map(function(e) {
                            return {
                                kind: e.type === Vault.TypeProvision ? "Provisioned User Private Vault" : "Vault",
                                name: e.name,
                                uuid: e.uuid,
                                notes: "UUID will change"
                            }
                        })]
                }
            })
        })
    },
    getFileCsvRows = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return r = getVaultUuidsForFiles(t), [4, util.batchPromiseAll(lockVault(e.session), 3, r)];
                    case 1:
                        return i.sent(), [4, util.batchPromiseAll(getFileCsvRow(e), 2, t)];
                    case 2:
                        return n = i.sent(), [4, util.batchPromiseAll(unlockVault(e.session), 3, r)];
                    case 3:
                        return i.sent(), [2, n]
                }
            })
        })
    },
    getFileCsvRow = function(e) {
        return function(t) {
            return __awaiter(void 0, void 0, void 0, function() {
                var r, n, i;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, util.batchPromiseAll(getHydratedRef(e, t.fileId), 5, t.references)];
                        case 1:
                            if (r = __read.apply(void 0, [a.sent()]), n = r[0], i = r.slice(1), void 0 === n) throw new Error("No file references found");
                            return [2, {
                                kind: "document" === n.type ? "Document" : "Vault Item Custom Icon",
                                name: n.item.title,
                                uuid: n.item.uuid,
                                notes: "Vault: " + n.item.vault.name + (i.length > 0 ? "; Additional references to this file: " + i.length : "")
                            }]
                    }
                })
            })
        }
    };