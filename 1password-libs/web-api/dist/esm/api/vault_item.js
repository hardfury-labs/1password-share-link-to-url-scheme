var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function u(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function o(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function l(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(u, o)
            }
            l((n = n.apply(t, e || [])).next())
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
import * as t from "io-ts";
import * as util from "../util";
export var FileReference = t.readonly(t.type({
    fileId: t.string,
    signature: t.string
}), "FileReference");
export var VaultItem = t.intersection([t.type({
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
    fileReferences: t.readonlyArray(FileReference)
})], "VaultItem");
export var getVaultItemsOverviews = function(t, e) {
    return t.get("/api/v1/vault/" + e + "/items/overviews").then(function(t) {
        return t.items || []
    })
};
export var getVaultItems = function(t, e, r) {
    return t.get("/api/v2/vault/" + e + "/" + r + "/items")
};
export var getVaultItemDetails = function(t, e, r) {
    return t.get("/api/v1/vault/" + e + "/item/" + r).then(function(t) {
        return t.item
    })
};
export var getVaultItemVersion = function(t, e, r) {
    return t.get("/api/v1/vault/" + e + "/itemversion/" + r).then(function(t) {
        return t
    })
};
export var getVaultItemHistory = function(t, e, r) {
    return t.get("/api/v1/vault/" + e + "/item/" + r + "/history")
};
export var getPreviousVersionOfItem = function(t, e, r, n) {
    var i = "/api/v1/vault/" + e + "/item/" + r + "/history/" + n;
    return t.get(i)
};
export var getDeletedVaultItems = function(t, e) {
    return t.get("/api/v1/vault/" + e + "/items/deleted")
};
export var postPurgeDeletedVaultItems = function(t, e, r) {
    var n = "/api/v1/vault/" + e + "/items/deleted/purge";
    return t.post(n, r)
};
export var deleteVaultItemHistory = function(t, e, r) {
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
export var patchVaultItems = function(t, e, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i;
        return __generator(this, function(a) {
            return i = "/api/v3/vault/" + e + "/" + r + "/items", [2, t.patch(i, n)]
        })
    })
};