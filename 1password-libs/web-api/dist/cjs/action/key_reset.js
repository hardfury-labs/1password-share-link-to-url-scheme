"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
        return new(r || (r = Promise))(function(i, s) {
            function a(e) {
                try {
                    o(n.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function u(e) {
                try {
                    o(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function o(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            o((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, s, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function u(s) {
            return function(u) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                        switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                            case 0:
                            case 1:
                                i = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < i[1]) {
                                    a.label = i[1], i = s;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(s);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = t.call(e, a)
                    } catch (e) {
                        s = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, u])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, s = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = s.next()).done;) a.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = s.return) && r.call(s)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCveReportCsv = exports.updateAllCliAffectedData = exports.getCliAffectedStatus = void 0;
var papaparse_1 = require("papaparse"),
    key_reset_1 = require("../api/key_reset"),
    group_1 = require("../model/group"),
    vault_1 = require("../model/vault"),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    group_2 = require("./group"),
    key_reset_files_1 = require("./key_reset_files"),
    key_reset_groups_1 = require("./key_reset_groups"),
    key_reset_prov_1 = require("./key_reset_prov"),
    key_reset_vaults_1 = require("./key_reset_vaults"),
    partial_user_1 = require("./partial_user"),
    getCliAffectedStatus = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, key_reset_1.getAccountHasUsedCli(e.session)];
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
exports.getCliAffectedStatus = getCliAffectedStatus;
var getAffectedOwnerStatus = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, i, s, a, u, o, l, f, c, _, d, p, v, g, y, h, w;
            return __generator(this, function(m) {
                switch (m.label) {
                    case 0:
                        return [4, Promise.all([key_reset_1.getVaultsCreatedByCli(e.session), key_reset_prov_1.getCliAffectedProvisionedUsersInfo(e)])];
                    case 1:
                        if (t = __read.apply(void 0, [m.sent(), 2]), r = t[0], n = r.vaults, i = r.hasVaultsInStateT, s = t[1], !i && "affected_prov_group" !== s.type) return [3, 3];
                        if (!(a = s.groupUuid)) throw new Error("getAffectedOwnerStatus: Missing Provision Managers group, but affected provisioned users' vaults are present");
                        return [4, group_2.getGroup(e, a, {
                            mustReload: !0,
                            attrs: group_1.Group.Attr.Memberships
                        })];
                    case 2:
                        if (!(u = m.sent()).getMembership((null === (y = e.user) || void 0 === y ? void 0 : y.uuid) || "")) return [2, {
                            type: "needs_prov_group_access",
                            group: u
                        }];
                        m.label = 3;
                    case 3:
                        return [4, Promise.all([key_reset_groups_1.getCliAffectedGroups(e), key_reset_files_1.getCliAffectedFiles(e)])];
                    case 4:
                        return o = __read.apply(void 0, [m.sent(), 2]), l = o[0], f = o[1], isAffectedOwner(c = {
                            provInfo: s,
                            groups: l,
                            vaults: n,
                            files: f
                        }) ? [2, __assign({
                            type: "affected_owner"
                        }, c)] : (null === (h = e.account) || void 0 === h ? void 0 : h.isFamily) ? (g = {
                            type: "family_maybe_affected"
                        }, [4, getOtherFamilyMembers(e)]) : [3, 6];
                    case 5:
                        return [2, (g.list = m.sent(), g)];
                    case 6:
                        return (null === (w = e.account) || void 0 === w ? void 0 : w.isIndividual) ? [2, {
                            type: "not_affected"
                        }] : [4, key_reset_1.getUsersWithCliAffectedData(e.session)];
                    case 7:
                        return _ = m.sent(), d = _.users, p = _.affectedProvisionManager, [2, (v = p ? d.filter(function(e) {
                            return e.uuid !== p.uuid
                        }) : d).length > 0 || p ? {
                            type: "others_affected",
                            list: v,
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
                        return [4, partial_user_1.getPartialUsersV2(e, {
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
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, Promise.all([key_reset_vaults_1.getCliAffectedPrivateVaultStatus(e), key_reset_files_1.getCliAffectedPrivateFiles(e)])];
                    case 1:
                        return t = __read.apply(void 0, [s.sent(), 2]), r = t[0], n = t[1], [2, isAffectedUser(i = {
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
    },
    updateAllCliAffectedData = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                return [2, "affected_owner" === t.type ? updateAllCliAffectedOwnerData(e, t, r) : updateAllCliAffectedUserData(e, t, r)]
            })
        })
    };
exports.updateAllCliAffectedData = updateAllCliAffectedData;
var updateAllCliAffectedOwnerData = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, i, s, a, u, o, l, f, c, _, d, p, v;
            return __generator(this, function(g) {
                switch (g.label) {
                    case 0:
                        return n = 0, i = key_reset_prov_1.getCliProvEffort(t.provInfo), s = key_reset_groups_1.getCliGroupEffort(t.groups), a = key_reset_vaults_1.getCliVaultEffort(t.vaults), u = key_reset_files_1.getCliFileEffort(t.files), o = i + s + a + u, i > 0 ? [4, getBadStateUsersError(e)] : [3, 2];
                    case 1:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            error: c
                        }];
                        g.label = 2;
                    case 2:
                        return u > 0 ? [4, getUnwriteableFileVaultsError(e, t.files)] : [3, 4];
                    case 3:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            error: c
                        }];
                        g.label = 4;
                    case 4:
                        return "not_affected" !== t.provInfo.type ? [3, 5] : (f = void 0, [3, 7]);
                    case 5:
                        return [4, key_reset_prov_1.correctCliAffectedProvisionedUsers(e, t.provInfo, function(e) {
                            return r((n + e * i) / o, "prov")
                        })];
                    case 6:
                        f = g.sent(), g.label = 7;
                    case 7:
                        return n += i, (l = f) && l.usersToDeprovision.length > 0 ? [2, {
                            type: "affected_owner_result",
                            provResult: l
                        }] : s > 0 ? [4, getBadStateUsersError(e)] : [3, 9];
                    case 8:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            error: c
                        }];
                        g.label = 9;
                    case 9:
                        return 0 === t.groups.length ? [3, 11] : [4, key_reset_groups_1.correctCliAffectedGroups(e, function(e) {
                            return r((n + e * s) / o, "groups")
                        })];
                    case 10:
                        g.sent(), g.label = 11;
                    case 11:
                        return n += s, a > 0 ? [4, getBadStateUsersError(e)] : [3, 13];
                    case 12:
                        if (c = g.sent()) return [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            error: c
                        }];
                        g.label = 13;
                    case 13:
                        return t.vaults.length > 0 ? [4, key_reset_vaults_1.correctCliAffectedVaults(e, function(e) {
                            return r((n + e * a) / o, "vaults")
                        })] : [3, 15];
                    case 14:
                        return d = g.sent(), [3, 16];
                    case 15:
                        d = {
                            succeeded: {},
                            succeededCsv: void 0
                        }, g.label = 16;
                    case 16:
                        return n += a, null !== (v = null === (p = (_ = d).errors) || void 0 === p ? void 0 : p.length) && void 0 !== v && v ? [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            vaultsResult: _
                        }] : 0 === t.files.length ? [3, 18] : [4, key_reset_files_1.correctCliAffectedFiles(e, function(e) {
                            return r((n + e * u) / o, "files")
                        })];
                    case 17:
                        g.sent(), g.label = 18;
                    case 18:
                        return n += u, r(1, "done"), [2, {
                            type: "affected_owner_result",
                            provResult: l,
                            vaultsResult: _
                        }]
                }
            })
        })
    },
    getUnwriteableFileVaultsError = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, s;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, key_reset_files_1.getUnwriteableFileVaults(e, t)];
                    case 1:
                        return (r = a.sent()).length > 0 ? (n = __spread([
                            ["Name", "ID"]
                        ], r.map(function(e) {
                            return [e.name, e.uuid]
                        })), i = papaparse_1.unparse(n, {
                            newline: "\n"
                        }), s = new Blob([i], {
                            type: "text/csv"
                        }), [2, {
                            type: "unwriteable_file_vaults",
                            vaults: r.map(function(e) {
                                return {
                                    name: e.name,
                                    uuid: e.uuid
                                }
                            }),
                            csv: s
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
                        return [4, partial_user_1.getPartialUsersV2(e, {
                            states: ["4"],
                            limit: 1
                        })];
                    case 1:
                        return (t = n.sent().totalCount) > 0 ? [2, {
                            type: "must_complete_provisioning",
                            count: t
                        }] : [4, partial_user_1.getPartialUsersV2(e, {
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
            var n, i, s, a, u, o;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return n = 0, i = key_reset_vaults_1.getCliPrivateVaultEffort(t.privateVaultAffected), s = key_reset_files_1.getCliFileEffort(t.files), a = i + s, t.privateVaultAffected ? [4, key_reset_vaults_1.correctCliAffectedPrivateVault(e, function(e) {
                            return r((n + e * i) / a, "p_vault")
                        })] : [3, 2];
                    case 1:
                        return o = l.sent(), [3, 3];
                    case 2:
                        o = void 0, l.label = 3;
                    case 3:
                        return u = o, n += i, 0 === t.files.length ? [3, 5] : [4, key_reset_files_1.correctCliAffectedPrivateFiles(e, function(e) {
                            return r((n + e * s) / a, "files")
                        })];
                    case 4:
                        l.sent(), l.label = 5;
                    case 5:
                        return n += s, r(1, "done"), [2, {
                            type: "affected_user_result",
                            privateVaultResult: u
                        }]
                }
            })
        })
    },
    getCveReportCsv = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, s, a, u;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, Promise.all([getVaultCsvRows(e, t.vaults), getFileCsvRows(e, t.files)])];
                    case 1:
                        return r = __read.apply(void 0, [o.sent(), 2]), n = r[0], i = r[1], s = __spread([{
                            kind: "Kind",
                            name: "Name",
                            uuid: "ID",
                            notes: "Notes"
                        }], getProvCsvRows(t.provInfo), getGroupCsvRows(t.groups), n, i), a = s.map(function(e) {
                            return [e.kind, e.name, e.uuid, e.notes]
                        }), u = papaparse_1.unparse(a, {
                            newline: "\n"
                        }), [2, new Blob([u], {
                            type: "text/csv"
                        })]
                }
            })
        })
    };
exports.getCveReportCsv = getCveReportCsv;
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
                                kind: e.type === vault_1.Vault.TypeProvision ? "Provisioned User Private Vault" : "Vault",
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
                        return r = key_reset_files_1.getVaultUuidsForFiles(t), [4, util.batchPromiseAll(key_reset_1.lockVault(e.session), 3, r)];
                    case 1:
                        return i.sent(), [4, util.batchPromiseAll(getFileCsvRow(e), 2, t)];
                    case 2:
                        return n = i.sent(), [4, util.batchPromiseAll(key_reset_1.unlockVault(e.session), 3, r)];
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
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, util.batchPromiseAll(key_reset_files_1.getHydratedRef(e, t.fileId), 5, t.references)];
                        case 1:
                            if (r = __read.apply(void 0, [s.sent()]), n = r[0], i = r.slice(1), void 0 === n) throw new Error("No file references found");
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