"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function u(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function o(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(u, o)
            }
            s((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, i, a, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function o(a) {
            return function(o) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
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
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    u.label = a[1];
                                    break
                                }
                                if (6 === a[0] && u.label < i[1]) {
                                    u.label = i[1], i = a;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(a);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        a = e.call(t, u)
                    } catch (t) {
                        a = [6, t], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, o])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.patchVaultItems = exports.deleteVaultItemHistory = exports.postPurgeDeletedVaultItems = exports.getDeletedVaultItems = exports.getPreviousVersionOfItem = exports.getVaultItemHistory = exports.getVaultItemVersion = exports.getVaultItemDetails = exports.getVaultItems = exports.getVaultItemsOverviews = exports.VaultItem = exports.FileReference = void 0;
var t = __importStar(require("io-ts")),
    util = __importStar(require("../util"));
exports.FileReference = t.readonly(t.type({
    fileId: t.string,
    signature: t.string
}), "FileReference"), exports.VaultItem = t.intersection([t.type({
    uuid: t.string,
    templateUuid: t.string,
    itemVersion: t.number,
    encryptedBy: t.string,
    encOverview: util.crypto.JweB
}), t.partial({
    faveIndex: t.number,
    trashed: t.string,
    createdAt: t.string,
    updatedAt: t.string,
    changerUuid: t.string,
    packageUuid: t.string,
    encDetails: util.crypto.JweB,
    fileReferences: t.readonlyArray(exports.FileReference)
})], "VaultItem");
var getVaultItemsOverviews = function(t, e) {
    return t.get("/api/v1/vault/" + e + "/items/overviews").then(function(t) {
        return t.items || []
    })
};
exports.getVaultItemsOverviews = getVaultItemsOverviews;
var getVaultItems = function(t, e, r) {
    return t.get("/api/v2/vault/" + e + "/" + r + "/items")
};
exports.getVaultItems = getVaultItems;
var getVaultItemDetails = function(t, e, r) {
    return t.get("/api/v1/vault/" + e + "/item/" + r).then(function(t) {
        return t.item
    })
};
exports.getVaultItemDetails = getVaultItemDetails;
var getVaultItemVersion = function(t, e, r) {
    return t.get("/api/v1/vault/" + e + "/itemversion/" + r).then(function(t) {
        return t
    })
};
exports.getVaultItemVersion = getVaultItemVersion;
var getVaultItemHistory = function(t, e, r) {
    return t.get("/api/v1/vault/" + e + "/item/" + r + "/history")
};
exports.getVaultItemHistory = getVaultItemHistory;
var getPreviousVersionOfItem = function(t, e, r, n) {
    var i = "/api/v1/vault/" + e + "/item/" + r + "/history/" + n;
    return t.get(i)
};
exports.getPreviousVersionOfItem = getPreviousVersionOfItem;
var getDeletedVaultItems = function(t, e) {
    return t.get("/api/v1/vault/" + e + "/items/deleted")
};
exports.getDeletedVaultItems = getDeletedVaultItems;
var postPurgeDeletedVaultItems = function(t, e, r) {
    var n = "/api/v1/vault/" + e + "/items/deleted/purge";
    return t.post(n, r)
};
exports.postPurgeDeletedVaultItems = postPurgeDeletedVaultItems;
var deleteVaultItemHistory = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, t.delete("/api/v1/vault/" + e + "/item/" + r + "/history/all")];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
exports.deleteVaultItemHistory = deleteVaultItemHistory;
var patchVaultItems = function(t, e, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i;
        return __generator(this, function(a) {
            return i = "/api/v3/vault/" + e + "/" + r + "/items", [2, t.patch(i, n)]
        })
    })
};
exports.patchVaultItems = patchVaultItems;