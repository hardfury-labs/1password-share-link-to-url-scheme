var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util/validator";
import {
    PartialUser
} from "./partial_user";
import {
    Vault
} from "./vault";
export var getAccountHasUsedCli = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.get("/api/v1/account/hasusedcli").then(unsafeDecodeAs(t.type({
                        hasUsedCli: t.boolean
                    })))];
                case 1:
                    return [2, r.sent().hasUsedCli]
            }
        })
    })
};
var CliProvisionedUsers = t.readonly(t.type({
    provisionedUsers: t.readonlyArray(PartialUser),
    provisionManagersGroupUuid: t.string
}));
export var getProvisionedUsersCreatedByCli = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.get("/api/v1/provision/users/cli", void 0, {
                timeout: 12e4
            }).then(unsafeDecodeAs(CliProvisionedUsers))]
        })
    })
};
var PartialGroup = t.readonly(t.type({
        uuid: t.string,
        name: t.string,
        avatar: t.string,
        permissions: t.number
    })),
    CliGroups = t.readonly(t.type({
        groups: t.readonlyArray(PartialGroup)
    }));
export var getGroupsCreatedByCli = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.get("/api/v1/groups/cli").then(unsafeDecodeAs(CliGroups))]
        })
    })
};
var CliVaults = t.readonly(t.type({
    vaults: t.readonlyArray(Vault),
    hasVaultsInStateT: t.boolean
}));
export var getVaultsCreatedByCli = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.get("/api/v1/vaults/cli", void 0, {
                timeout: 12e4
            }).then(unsafeDecodeAs(CliVaults))]
        })
    })
};
var CliPrivateVault = t.readonly(t.type({
    isCreatedByCli: t.boolean
}));
export var getCliAffectedPrivateVaultStatus = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.get("/api/v1/vault/personal/cli").then(unsafeDecodeAs(CliPrivateVault))]
        })
    })
};
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
    }));
export var getFilesCreatedByCli = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            return r = "string" == typeof t ? "?vault=" + t : "", [2, e.get("/api/v1/files/cli" + r, void 0, {
                timeout: 12e4
            }).then(unsafeDecodeAs(CliFiles))]
        })
    })
};
export var lockVault = function(e) {
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
export var unlockVault = function(e) {
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
export var replaceVault = function(e, t) {
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
export var replaceGroup = function(e, t) {
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
export var replaceGroupKeysets = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return r = {
                        group: t
                    }, [4, e.put("/api/v1/group/" + t.uuid + "/keyset", r, {
                        timeout: 3e5
                    })];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
export var replaceKeysetForProvisionedUser = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return n = "/api/v1/provision/user/" + encodeURIComponent(t) + "/keyset", [4, e.put(n, r)];
                case 1:
                    return i.sent(), [2]
            }
        })
    })
};
var CliUsers = t.readonly(t.intersection([t.type({
    totalCount: t.number,
    users: t.readonlyArray(PartialUser)
}), t.partial({
    affectedProvisionManager: PartialUser
})]));
export var getUsersWithCliAffectedData = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.get("/api/v1/users/vaultorfiles/cli", void 0, {
                        timeout: 12e4
                    }).then(unsafeDecodeAs(CliUsers))];
                case 1:
                    if ((t = r.sent()).totalCount !== t.users.length) throw new Error("getUsersWithCliAffectedData: Missing some users from the response: " + t.totalCount + " !== " + t.users.length);
                    return [2, t]
            }
        })
    })
};