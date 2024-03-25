"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        void 0 === i && (i = r), e[i] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(a, n) {
            function o(e) {
                try {
                    s(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function u(e) {
                try {
                    s(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            s((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, a, n, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function u(n) {
            return function(u) {
                return function(n) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, i && (a = 2 & n[0] ? i.return : n[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, n[1])).done) return a;
                        switch (i = 0, a && (n = [2 & n[0], a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return o.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                    o.label = n[1];
                                    break
                                }
                                if (6 === n[0] && o.label < a[1]) {
                                    o.label = a[1], a = n;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(n);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        n = t.call(e, o)
                    } catch (e) {
                        n = [6, e], i = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUsersWithCliAffectedData = exports.replaceKeysetForProvisionedUser = exports.replaceGroupKeysets = exports.replaceGroup = exports.replaceVault = exports.unlockVault = exports.lockVault = exports.getFilesCreatedByCli = exports.getCliAffectedPrivateVaultStatus = exports.getVaultsCreatedByCli = exports.getGroupsCreatedByCli = exports.getProvisionedUsersCreatedByCli = exports.getAccountHasUsedCli = void 0;
var t = __importStar(require("io-ts")),
    validator_1 = require("../util/validator"),
    partial_user_1 = require("./partial_user"),
    vault_1 = require("./vault"),
    getAccountHasUsedCli = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, e.get("/api/v1/account/hasusedcli").then(validator_1.unsafeDecodeAs(t.type({
                            hasUsedCli: t.boolean
                        })))];
                    case 1:
                        return [2, r.sent().hasUsedCli]
                }
            })
        })
    };
exports.getAccountHasUsedCli = getAccountHasUsedCli;
var CliProvisionedUsers = t.readonly(t.type({
        provisionedUsers: t.readonlyArray(partial_user_1.PartialUser),
        provisionManagersGroupUuid: t.string
    })),
    getProvisionedUsersCreatedByCli = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, e.get("/api/v1/provision/users/cli", void 0, {
                    timeout: 12e4
                }).then(validator_1.unsafeDecodeAs(CliProvisionedUsers))]
            })
        })
    };
exports.getProvisionedUsersCreatedByCli = getProvisionedUsersCreatedByCli;
var PartialGroup = t.readonly(t.type({
        uuid: t.string,
        name: t.string,
        avatar: t.string,
        permissions: t.number
    })),
    CliGroups = t.readonly(t.type({
        groups: t.readonlyArray(PartialGroup)
    })),
    getGroupsCreatedByCli = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, e.get("/api/v1/groups/cli").then(validator_1.unsafeDecodeAs(CliGroups))]
            })
        })
    };
exports.getGroupsCreatedByCli = getGroupsCreatedByCli;
var CliVaults = t.readonly(t.type({
        vaults: t.readonlyArray(vault_1.Vault),
        hasVaultsInStateT: t.boolean
    })),
    getVaultsCreatedByCli = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, e.get("/api/v1/vaults/cli", void 0, {
                    timeout: 12e4
                }).then(validator_1.unsafeDecodeAs(CliVaults))]
            })
        })
    };
exports.getVaultsCreatedByCli = getVaultsCreatedByCli;
var CliPrivateVault = t.readonly(t.type({
        isCreatedByCli: t.boolean
    })),
    getCliAffectedPrivateVaultStatus = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, e.get("/api/v1/vault/personal/cli").then(validator_1.unsafeDecodeAs(CliPrivateVault))]
            })
        })
    };
exports.getCliAffectedPrivateVaultStatus = getCliAffectedPrivateVaultStatus;
var FileCreatedByCliReference = t.readonly(t.type({
        vaultUuid: t.string,
        itemUuid: t.string
    })),
    FileCreatedByCli = t.readonly(t.type({
        fileId: t.string,
        references: t.readonlyArray(FileCreatedByCliReference)
    })),
    CliFiles = t.readonly(t.type({
        files: t.readonlyArray(FileCreatedByCli)
    })),
    getFilesCreatedByCli = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(i) {
                return r = "string" == typeof t ? "?vault=" + t : "", [2, e.get("/api/v1/files/cli" + r, void 0, {
                    timeout: 12e4
                }).then(validator_1.unsafeDecodeAs(CliFiles))]
            })
        })
    };
exports.getFilesCreatedByCli = getFilesCreatedByCli;
var lockVault = function(e) {
    return function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, e.post("/api/v1/vault/" + t + "/lock")];
                    case 1:
                        return r.sent(), [2]
                }
            })
        })
    }
};
exports.lockVault = lockVault;
var unlockVault = function(e) {
    return function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, e.post("/api/v1/vault/" + t + "/unlock")];
                    case 1:
                        return r.sent(), [2]
                }
            })
        })
    }
};
exports.unlockVault = unlockVault;
var replaceVault = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.put("/api/v1/vault/" + t.oldUuid + "/replace", t.newVault)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.replaceVault = replaceVault;
var replaceGroup = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.put("/api/v1/group/" + t.oldUuid + "/replace/" + t.newUuid)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.replaceGroup = replaceGroup;
var replaceGroupKeysets = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return r = {
                        group: t
                    }, [4, e.put("/api/v1/group/" + t.uuid + "/keyset", r, {
                        timeout: 3e5
                    })];
                case 1:
                    return i.sent(), [2]
            }
        })
    })
};
exports.replaceGroupKeysets = replaceGroupKeysets;
var replaceKeysetForProvisionedUser = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return i = "/api/v1/provision/user/" + encodeURIComponent(t) + "/keyset", [4, e.put(i, r)];
                case 1:
                    return a.sent(), [2]
            }
        })
    })
};
exports.replaceKeysetForProvisionedUser = replaceKeysetForProvisionedUser;
var CliUsers = t.readonly(t.intersection([t.type({
        totalCount: t.number,
        users: t.readonlyArray(partial_user_1.PartialUser)
    }), t.partial({
        affectedProvisionManager: partial_user_1.PartialUser
    })])),
    getUsersWithCliAffectedData = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, e.get("/api/v1/users/vaultorfiles/cli", void 0, {
                            timeout: 12e4
                        }).then(validator_1.unsafeDecodeAs(CliUsers))];
                    case 1:
                        if ((t = r.sent()).totalCount !== t.users.length) throw new Error("getUsersWithCliAffectedData: Missing some users from the response: " + t.totalCount + " !== " + t.users.length);
                        return [2, t]
                }
            })
        })
    };
exports.getUsersWithCliAffectedData = getUsersWithCliAffectedData;