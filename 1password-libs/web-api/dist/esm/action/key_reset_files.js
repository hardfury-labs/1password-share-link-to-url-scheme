var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            c((n = n.apply(e, t || [])).next())
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
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, i, o = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) a.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };
import {
    every,
    isEqual
} from "lodash-es";
import * as api from "../api";
import * as model from "../model";
import {
    parseVaults
} from "../parser/vault";
import * as util from "../util";
import {
    sha256
} from "../util/crypto";
import {
    getPersonalVault,
    getVault
} from "./vault";
import {
    deleteVaultItemHistory,
    getDocument,
    getFile,
    getVaultItemHistory,
    getVaultItemWithUuid,
    patchVaultItems,
    uploadDocument,
    uploadFile
} from "./vault_item";
export var getCliAffectedFiles = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.getFilesCreatedByCli(e.session, null === t || void 0 === t ? void 0 : t.uuid)];
                case 1:
                    return [2, r.sent().files]
            }
        })
    })
};
var FileCorrectionEffort = {
    getList: 1,
    fixOne: 11
};
export var getCliFileEffort = function(e) {
    return 0 === e.length ? 0 : 2 * FileCorrectionEffort.getList + FileCorrectionEffort.fixOne * e.length
};
export var getVaultUuidsForFiles = function(e) {
    var t, r, n, i, o = {};
    try {
        for (var a = __values(e), u = a.next(); !u.done; u = a.next()) {
            var c = u.value;
            try {
                for (var s = (n = void 0, __values(c.references)), l = s.next(); !l.done; l = s.next()) {
                    o[l.value.vaultUuid] = !0
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    l && !l.done && (i = s.return) && i.call(s)
                } finally {
                    if (n) throw n.error
                }
            }
        }
    } catch (e) {
        t = {
            error: e
        }
    } finally {
        try {
            u && !u.done && (r = a.return) && r.call(a)
        } finally {
            if (t) throw t.error
        }
    }
    return Object.keys(o)
};
export var getUnwriteableFileVaults = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, o;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return 0 === t.length ? [2, []] : (r = getVaultUuidsForFiles(t), [4, util.batchPromiseAll(function(t) {
                        return api.getVault(e.session, t, model.Vault.Attr.CombinedAccess)
                    }, 3, r)]);
                case 1:
                    return n = a.sent(), i = model.BitSet.combine([model.vaultACL.ReadItem, model.vaultACL.UpdateItem, model.vaultACL.ArchiveItem, model.vaultACL.DeleteItem, model.vaultACL.ViewHistory]), o = n.filter(function(e) {
                        return !e.combinedAccess || !model.BitSet.includes(e.combinedAccess.acl, i)
                    }), [2, parseVaults(e, o)]
            }
        })
    })
};
export var correctCliAffectedFiles = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, o, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return t(0), [4, api.getFilesCreatedByCli(e.session, null === r || void 0 === r ? void 0 : r.uuid)];
                case 1:
                    return 0 === (n = u.sent().files).length ? (t(1), [2]) : (i = getCliFileEffort(n), o = 0, t((o += FileCorrectionEffort.getList) / i), [4, util.batchPromiseAll(replaceFile(e, function() {
                        t((o += FileCorrectionEffort.fixOne) / i)
                    }), 1, n)]);
                case 2:
                    return u.sent(), [4, api.getFilesCreatedByCli(e.session, null === r || void 0 === r ? void 0 : r.uuid)];
                case 3:
                    if (0 !== (a = u.sent().files).length) throw new Error("correctCliAffectedFiles: Some files have not been replaced: " + a.length + ". " + JSON.stringify(a));
                    return t(1), [2]
            }
        })
    })
};
export var getCliAffectedPrivateFiles = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, getPersonalVault(e)];
                case 1:
                    return (t = r.sent()) ? [2, getCliAffectedFiles(e, t)] : [2, []]
            }
        })
    })
};
export var correctCliAffectedPrivateFiles = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return t(0), [4, getPersonalVault(e)];
                case 1:
                    if (!(r = n.sent())) throw new Error("correctCliAffectedPrivateFiles: Missing private vault");
                    return [2, correctCliAffectedFiles(e, t, r)]
            }
        })
    })
};
var replaceFile = function(e, t) {
    return function(r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (0 === r.references.length) throw new Error("replaceFile: Missing file references for file " + r.fileId);
                        return [4, util.batchPromiseAll(getHydratedRef(e, r.fileId), 5, r.references)];
                    case 1:
                        return n = i.sent(), every(n, function(e) {
                            return "icon" === e.type
                        }) ? [4, reencryptIcon(e, n)] : [3, 3];
                    case 2:
                        return i.sent(), [3, 6];
                    case 3:
                        return every(n, function(e) {
                            return "document" === e.type
                        }) ? [4, reencryptDocument(e, n)] : [3, 5];
                    case 4:
                        return i.sent(), [3, 6];
                    case 5:
                        throw new Error("replaceFile: Not all references are the same type: " + n.map(function(e) {
                            return e.type
                        }).join(", ") + ".");
                    case 6:
                        return t(), [2]
                }
            })
        })
    }
};
export var getHydratedRef = function(e, t) {
    return function(r) {
        var n = r.vaultUuid,
            i = r.itemUuid;
        return __awaiter(void 0, void 0, void 0, function() {
            var r, o, a, u, c, s, l, d;
            return __generator(this, function(f) {
                switch (f.label) {
                    case 0:
                        return [4, getVault(e, n)];
                    case 1:
                        return r = f.sent(), [4, getVaultItemWithUuid(e, r, i)];
                    case 2:
                        if (o = f.sent(), (null === (u = null === (a = o.overview.icons) || void 0 === a ? void 0 : a.detail) || void 0 === u ? void 0 : u.fileId) === t) return [2, {
                            type: "icon",
                            attrs: o.overview.icons.detail,
                            item: o
                        }];
                        if ((null === (c = o.details.documentAttributes) || void 0 === c ? void 0 : c.documentId) === t) return [2, {
                            type: "document",
                            attrs: o.details.documentAttributes,
                            item: o
                        }];
                        throw new Error("getHydratedRef: Could not find reference to file " + t + " in vault " + n + " and item " + i + ". Icon: " + (null === (l = null === (s = o.overview.icons) || void 0 === s ? void 0 : s.detail) || void 0 === l ? void 0 : l.fileId) + ". Document: " + (null === (d = o.details.documentAttributes) || void 0 === d ? void 0 : d.documentId) + ".")
                }
            })
        })
    }
};
var reencryptIconData = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, getFile(e, t.item, t.attrs)];
                    case 1:
                        return r = a.sent(), [4, Promise.all([uploadFile(e, r), sha256(r)])];
                    case 2:
                        return n = __read.apply(void 0, [a.sent(), 2]), i = n[0], o = n[1], [2, {
                            newAttrs: i,
                            hash: o
                        }]
                }
            })
        })
    },
    reencryptIcon = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o, a, u, c, s, l, d, f, m;
            return __generator(this, function(v) {
                switch (v.label) {
                    case 0:
                        if (r = __read(t), n = r[0], i = r.slice(1), void 0 === n) throw new Error("reencryptIcon: Received empty references array.");
                        return i.forEach(function(e) {
                            if (!isEqual(e.attrs.encryptionKey, n.attrs.encryptionKey)) throw new Error("reencryptIcon: Encryption keys do not match. Icon encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Icon encryption key kid for item " + n.item.uuid + ", vault " + n.item.vault.uuid + ": " + n.attrs.encryptionKey.kid + ".");
                            if (e.attrs.fileId !== n.attrs.fileId) throw new Error("reencryptIcon: File IDs do not match. Icon file ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.fileId + ". Icon file ID for item " + n.item.uuid + ", vault " + n.item.vault.uuid + ": " + n.attrs.fileId + ".")
                        }), o = t.map(function(e) {
                            return e.item.itemVersion
                        }), [4, reencryptIconData(e, n)];
                    case 1:
                        return a = v.sent(), u = a.newAttrs, c = a.hash, [4, util.batchPromiseAll(function(t) {
                            var r = t.type,
                                n = t.item;
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if ("icon" !== r) throw new Error("reencryptIcon: Somehow this isn't an icon");
                                            if (!n.overview.icons) throw new Error("reencryptIcon: Item " + n.uuid + " is somehow now missing the icons attribute.");
                                            return n.overview.icons.detail = u, [4, patchVaultItems(e, [n], n.vault)];
                                        case 1:
                                            return t.sent(), [4, deleteVaultItemHistory(e, n)];
                                        case 2:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, 1, t)];
                    case 2:
                        return v.sent(), [4, util.batchPromiseAll(getHydratedRef(e, u.fileId), 5, t.map(function(e) {
                            var t = e.item;
                            return {
                                vaultUuid: t.vault.uuid,
                                itemUuid: t.uuid
                            }
                        }))];
                    case 3:
                        return s = v.sent().map(function(e) {
                            if ("icon" !== e.type) throw new Error("[check] reencryptIcon/freshRefs: Was an icon and now is not: " + e.item.vault.uuid + "/" + e.item.uuid);
                            return e
                        }), [4, Promise.all(s.map(function(t, r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var i, a, u;
                                return __generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (i = t.item.vault.uuid + "/" + t.item.uuid, isEqual(t.attrs.encryptionKey, n.attrs.encryptionKey)) throw new Error("[check] reencryptIcon: Encryption key did not change: " + t.attrs.encryptionKey.kid + " for icon " + t.attrs.fileId + " (originally " + n.attrs.fileId + ") in " + i);
                                            if (t.attrs.fileId === n.attrs.fileId) throw new Error("[check] reencryptIcon: File ID did not change: " + t.attrs.fileId + " in " + i);
                                            if (void 0 === (a = o[r])) throw new Error("[check] reencryptIcon: originalVersions index out of range");
                                            if (u = a + 1, t.item.itemVersion !== u) throw new Error("[check] reencryptIcon: Expected item version " + u + ", got " + t.item.itemVersion + ", for " + i);
                                            return [4, getVaultItemHistory(e, t.item)];
                                        case 1:
                                            if (c.sent().history.length > 0) throw new Error("[check] reencryptIcon: Item history was not purged for " + i);
                                            return [2]
                                    }
                                })
                            })
                        }))];
                    case 4:
                        if (v.sent(), l = __read(s), d = l[0], f = l.slice(1), void 0 === d) throw new Error("[check] reencryptIcon: firstFresh undefined");
                        return [4, getFile(e, d.item, d.attrs).then(sha256)];
                    case 5:
                        if (m = v.sent(), !isEqual(c, m)) throw new Error("[check] reencryptIcon: File data changed for icon in " + d.item.vault.uuid + "/" + d.item.uuid);
                        return f.forEach(function(e) {
                            if (!isEqual(e.attrs.encryptionKey, d.attrs.encryptionKey)) throw new Error("[check] reencryptIcon: New encryption keys do not match. Icon encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Icon encryption key kid for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.encryptionKey.kid + ".");
                            if (e.attrs.fileId !== d.attrs.fileId) throw new Error("[check] reencryptIcon: File IDs do not match. Icon file ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.fileId + ". Icon file ID for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.fileId + ".")
                        }), [2]
                }
            })
        })
    },
    reencryptDocumentData = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, getDocument(e, t.item, t.attrs)];
                    case 1:
                        return r = a.sent(), [4, Promise.all([uploadDocument(e, r, t.attrs.fileName), sha256(r)])];
                    case 2:
                        return n = __read.apply(void 0, [a.sent(), 2]), i = n[0], o = n[1], [2, {
                            newAttrs: i,
                            hash: o
                        }]
                }
            })
        })
    },
    reencryptDocument = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o, a, u, c, s, l, d, f, m;
            return __generator(this, function(v) {
                switch (v.label) {
                    case 0:
                        if (r = __read(t), n = r[0], i = r.slice(1), void 0 === n) throw new Error("reencryptIcon: Received empty references array.");
                        return i.forEach(function(e) {
                            if (!isEqual(e.attrs.encryptionKey, n.attrs.encryptionKey)) throw new Error("reencryptDocument: Encryption keys do not match. Document encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Document encryption key kid for item " + n.item.uuid + ", vault " + n.item.vault.uuid + ": " + n.attrs.encryptionKey.kid + ".");
                            if (e.attrs.documentId !== n.attrs.documentId) throw new Error("reencryptDocument: Document IDs do not match. Document ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.documentId + ". Document ID for item " + n.item.uuid + ", vault " + n.item.vault.uuid + ": " + n.attrs.documentId + ".")
                        }), o = t.map(function(e) {
                            return e.item.itemVersion
                        }), [4, reencryptDocumentData(e, n)];
                    case 1:
                        return a = v.sent(), u = a.newAttrs, c = a.hash, [4, util.batchPromiseAll(function(t) {
                            var r = t.type,
                                n = t.attrs,
                                i = t.item;
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if ("document" !== r) throw new Error("reencryptDocument: Somehow this isn't a document");
                                            return i.details.documentAttributes = __assign(__assign({}, u), {
                                                fileName: n.fileName
                                            }), [4, patchVaultItems(e, [i], i.vault)];
                                        case 1:
                                            return t.sent(), [4, deleteVaultItemHistory(e, i)];
                                        case 2:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, 1, t)];
                    case 2:
                        return v.sent(), [4, util.batchPromiseAll(getHydratedRef(e, u.documentId), 5, t.map(function(e) {
                            var t = e.item;
                            return {
                                vaultUuid: t.vault.uuid,
                                itemUuid: t.uuid
                            }
                        }))];
                    case 3:
                        return s = v.sent().map(function(e) {
                            if ("document" !== e.type) throw new Error("[check] reencryptDocument/freshRefs: Was a document and now is not: " + e.item.vault.uuid + "/" + e.item.uuid);
                            return e
                        }), [4, Promise.all(s.map(function(t, r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var i, a, u;
                                return __generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (i = t.item.vault.uuid + "/" + t.item.uuid, isEqual(t.attrs.encryptionKey, n.attrs.encryptionKey)) throw new Error("[check] reencryptDocument: Encryption key did not change: " + t.attrs.encryptionKey.kid + " for icon " + t.attrs.documentId + " (originally " + n.attrs.documentId + ") in " + i);
                                            if (t.attrs.documentId === n.attrs.documentId) throw new Error("[check] reencryptDocument: Document ID did not change: " + t.attrs.documentId + " in " + i);
                                            if (void 0 === (a = o[r])) throw new Error("[check] reencryptDocument: originalVersion index out of range");
                                            if (u = a + 1, t.item.itemVersion !== u) throw new Error("[check] reencryptDocument: Expected item version " + u + ", got " + t.item.itemVersion + ", for " + i);
                                            return [4, getVaultItemHistory(e, t.item)];
                                        case 1:
                                            if (c.sent().history.length > 0) throw new Error("[check] reencryptDocument: Item history was not purged for " + i);
                                            return [2]
                                    }
                                })
                            })
                        }))];
                    case 4:
                        if (v.sent(), l = __read(s), d = l[0], f = l.slice(1), void 0 === d) throw new Error("[check] reencryptDocument: No fresh refs available");
                        return [4, getDocument(e, d.item, d.attrs).then(sha256)];
                    case 5:
                        if (m = v.sent(), !isEqual(c, m)) throw new Error("[check] reencryptDocument: Document data changed for icon in " + d.item.vault.uuid + "/" + d.item.uuid);
                        return f.forEach(function(e) {
                            if (!isEqual(e.attrs.encryptionKey, d.attrs.encryptionKey)) throw new Error("[check] reencryptDocument: New encryption keys do not match. Document encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Document encryption key kid for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.encryptionKey.kid + ".");
                            if (e.attrs.documentId !== d.attrs.documentId) throw new Error("[check] reencryptDocument: Document IDs do not match. Document ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.documentId + ". Document ID for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.documentId + ".")
                        }), [2]
                }
            })
        })
    };