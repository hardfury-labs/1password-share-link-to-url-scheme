"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
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
        return new(r || (r = Promise))(function(n, o) {
            function a(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, u)
            }
            c((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < n[1]) {
                                    a.label = n[1], n = o;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(o);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], i = 0
                    } finally {
                        r = n = 0
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
            i = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var i, n, o = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = o.next()).done;) a.push(i.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (r = o.return) && r.call(o)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getHydratedRef = exports.correctCliAffectedPrivateFiles = exports.getCliAffectedPrivateFiles = exports.correctCliAffectedFiles = exports.getUnwriteableFileVaults = exports.getVaultUuidsForFiles = exports.getCliFileEffort = exports.getCliAffectedFiles = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    vault_1 = require("../parser/vault"),
    util = __importStar(require("../util")),
    crypto_1 = require("../util/crypto"),
    vault_2 = require("./vault"),
    vault_item_1 = require("./vault_item"),
    getCliAffectedFiles = function(e, t) {
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
exports.getCliAffectedFiles = getCliAffectedFiles;
var FileCorrectionEffort = {
        getList: 1,
        fixOne: 11
    },
    getCliFileEffort = function(e) {
        return 0 === e.length ? 0 : 2 * FileCorrectionEffort.getList + FileCorrectionEffort.fixOne * e.length
    };
exports.getCliFileEffort = getCliFileEffort;
var getVaultUuidsForFiles = function(e) {
    var t, r, i, n, o = {};
    try {
        for (var a = __values(e), u = a.next(); !u.done; u = a.next()) {
            var c = u.value;
            try {
                for (var l = (i = void 0, __values(c.references)), s = l.next(); !s.done; s = l.next()) {
                    o[s.value.vaultUuid] = !0
                }
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    s && !s.done && (n = l.return) && n.call(l)
                } finally {
                    if (i) throw i.error
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
exports.getVaultUuidsForFiles = getVaultUuidsForFiles;
var getUnwriteableFileVaults = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, i, n, o;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return 0 === t.length ? [2, []] : (r = exports.getVaultUuidsForFiles(t), [4, util.batchPromiseAll(function(t) {
                        return api.getVault(e.session, t, model.Vault.Attr.CombinedAccess)
                    }, 3, r)]);
                case 1:
                    return i = a.sent(), n = model.BitSet.combine([model.vaultACL.ReadItem, model.vaultACL.UpdateItem, model.vaultACL.ArchiveItem, model.vaultACL.DeleteItem, model.vaultACL.ViewHistory]), o = i.filter(function(e) {
                        return !e.combinedAccess || !model.BitSet.includes(e.combinedAccess.acl, n)
                    }), [2, vault_1.parseVaults(e, o)]
            }
        })
    })
};
exports.getUnwriteableFileVaults = getUnwriteableFileVaults;
var correctCliAffectedFiles = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, n, o, a;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return t(0), [4, api.getFilesCreatedByCli(e.session, null === r || void 0 === r ? void 0 : r.uuid)];
                case 1:
                    return 0 === (i = u.sent().files).length ? (t(1), [2]) : (n = exports.getCliFileEffort(i), o = 0, t((o += FileCorrectionEffort.getList) / n), [4, util.batchPromiseAll(replaceFile(e, function() {
                        t((o += FileCorrectionEffort.fixOne) / n)
                    }), 1, i)]);
                case 2:
                    return u.sent(), [4, api.getFilesCreatedByCli(e.session, null === r || void 0 === r ? void 0 : r.uuid)];
                case 3:
                    if (0 !== (a = u.sent().files).length) throw new Error("correctCliAffectedFiles: Some files have not been replaced: " + a.length + ". " + JSON.stringify(a));
                    return t(1), [2]
            }
        })
    })
};
exports.correctCliAffectedFiles = correctCliAffectedFiles;
var getCliAffectedPrivateFiles = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, vault_2.getPersonalVault(e)];
                case 1:
                    return (t = r.sent()) ? [2, exports.getCliAffectedFiles(e, t)] : [2, []]
            }
        })
    })
};
exports.getCliAffectedPrivateFiles = getCliAffectedPrivateFiles;
var correctCliAffectedPrivateFiles = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return t(0), [4, vault_2.getPersonalVault(e)];
                case 1:
                    if (!(r = i.sent())) throw new Error("correctCliAffectedPrivateFiles: Missing private vault");
                    return [2, exports.correctCliAffectedFiles(e, t, r)]
            }
        })
    })
};
exports.correctCliAffectedPrivateFiles = correctCliAffectedPrivateFiles;
var replaceFile = function(e, t) {
        return function(r) {
            return __awaiter(void 0, void 0, void 0, function() {
                var i;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (0 === r.references.length) throw new Error("replaceFile: Missing file references for file " + r.fileId);
                            return [4, util.batchPromiseAll(exports.getHydratedRef(e, r.fileId), 5, r.references)];
                        case 1:
                            return i = n.sent(), lodash_es_1.every(i, function(e) {
                                return "icon" === e.type
                            }) ? [4, reencryptIcon(e, i)] : [3, 3];
                        case 2:
                            return n.sent(), [3, 6];
                        case 3:
                            return lodash_es_1.every(i, function(e) {
                                return "document" === e.type
                            }) ? [4, reencryptDocument(e, i)] : [3, 5];
                        case 4:
                            return n.sent(), [3, 6];
                        case 5:
                            throw new Error("replaceFile: Not all references are the same type: " + i.map(function(e) {
                                return e.type
                            }).join(", ") + ".");
                        case 6:
                            return t(), [2]
                    }
                })
            })
        }
    },
    getHydratedRef = function(e, t) {
        return function(r) {
            var i = r.vaultUuid,
                n = r.itemUuid;
            return __awaiter(void 0, void 0, void 0, function() {
                var r, o, a, u, c, l, s, d;
                return __generator(this, function(f) {
                    switch (f.label) {
                        case 0:
                            return [4, vault_2.getVault(e, i)];
                        case 1:
                            return r = f.sent(), [4, vault_item_1.getVaultItemWithUuid(e, r, n)];
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
                            throw new Error("getHydratedRef: Could not find reference to file " + t + " in vault " + i + " and item " + n + ". Icon: " + (null === (s = null === (l = o.overview.icons) || void 0 === l ? void 0 : l.detail) || void 0 === s ? void 0 : s.fileId) + ". Document: " + (null === (d = o.details.documentAttributes) || void 0 === d ? void 0 : d.documentId) + ".")
                    }
                })
            })
        }
    };
exports.getHydratedRef = getHydratedRef;
var reencryptIconData = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, i, n, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, vault_item_1.getFile(e, t.item, t.attrs)];
                    case 1:
                        return r = a.sent(), [4, Promise.all([vault_item_1.uploadFile(e, r), crypto_1.sha256(r)])];
                    case 2:
                        return i = __read.apply(void 0, [a.sent(), 2]), n = i[0], o = i[1], [2, {
                            newAttrs: n,
                            hash: o
                        }]
                }
            })
        })
    },
    reencryptIcon = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, i, n, o, a, u, c, l, s, d, f, m;
            return __generator(this, function(v) {
                switch (v.label) {
                    case 0:
                        if (r = __read(t), i = r[0], n = r.slice(1), void 0 === i) throw new Error("reencryptIcon: Received empty references array.");
                        return n.forEach(function(e) {
                            if (!lodash_es_1.isEqual(e.attrs.encryptionKey, i.attrs.encryptionKey)) throw new Error("reencryptIcon: Encryption keys do not match. Icon encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Icon encryption key kid for item " + i.item.uuid + ", vault " + i.item.vault.uuid + ": " + i.attrs.encryptionKey.kid + ".");
                            if (e.attrs.fileId !== i.attrs.fileId) throw new Error("reencryptIcon: File IDs do not match. Icon file ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.fileId + ". Icon file ID for item " + i.item.uuid + ", vault " + i.item.vault.uuid + ": " + i.attrs.fileId + ".")
                        }), o = t.map(function(e) {
                            return e.item.itemVersion
                        }), [4, reencryptIconData(e, i)];
                    case 1:
                        return a = v.sent(), u = a.newAttrs, c = a.hash, [4, util.batchPromiseAll(function(t) {
                            var r = t.type,
                                i = t.item;
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if ("icon" !== r) throw new Error("reencryptIcon: Somehow this isn't an icon");
                                            if (!i.overview.icons) throw new Error("reencryptIcon: Item " + i.uuid + " is somehow now missing the icons attribute.");
                                            return i.overview.icons.detail = u, [4, vault_item_1.patchVaultItems(e, [i], i.vault)];
                                        case 1:
                                            return t.sent(), [4, vault_item_1.deleteVaultItemHistory(e, i)];
                                        case 2:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, 1, t)];
                    case 2:
                        return v.sent(), [4, util.batchPromiseAll(exports.getHydratedRef(e, u.fileId), 5, t.map(function(e) {
                            var t = e.item;
                            return {
                                vaultUuid: t.vault.uuid,
                                itemUuid: t.uuid
                            }
                        }))];
                    case 3:
                        return l = v.sent().map(function(e) {
                            if ("icon" !== e.type) throw new Error("[check] reencryptIcon/freshRefs: Was an icon and now is not: " + e.item.vault.uuid + "/" + e.item.uuid);
                            return e
                        }), [4, Promise.all(l.map(function(t, r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n, a, u;
                                return __generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (n = t.item.vault.uuid + "/" + t.item.uuid, lodash_es_1.isEqual(t.attrs.encryptionKey, i.attrs.encryptionKey)) throw new Error("[check] reencryptIcon: Encryption key did not change: " + t.attrs.encryptionKey.kid + " for icon " + t.attrs.fileId + " (originally " + i.attrs.fileId + ") in " + n);
                                            if (t.attrs.fileId === i.attrs.fileId) throw new Error("[check] reencryptIcon: File ID did not change: " + t.attrs.fileId + " in " + n);
                                            if (void 0 === (a = o[r])) throw new Error("[check] reencryptIcon: originalVersions index out of range");
                                            if (u = a + 1, t.item.itemVersion !== u) throw new Error("[check] reencryptIcon: Expected item version " + u + ", got " + t.item.itemVersion + ", for " + n);
                                            return [4, vault_item_1.getVaultItemHistory(e, t.item)];
                                        case 1:
                                            if (c.sent().history.length > 0) throw new Error("[check] reencryptIcon: Item history was not purged for " + n);
                                            return [2]
                                    }
                                })
                            })
                        }))];
                    case 4:
                        if (v.sent(), s = __read(l), d = s[0], f = s.slice(1), void 0 === d) throw new Error("[check] reencryptIcon: firstFresh undefined");
                        return [4, vault_item_1.getFile(e, d.item, d.attrs).then(crypto_1.sha256)];
                    case 5:
                        if (m = v.sent(), !lodash_es_1.isEqual(c, m)) throw new Error("[check] reencryptIcon: File data changed for icon in " + d.item.vault.uuid + "/" + d.item.uuid);
                        return f.forEach(function(e) {
                            if (!lodash_es_1.isEqual(e.attrs.encryptionKey, d.attrs.encryptionKey)) throw new Error("[check] reencryptIcon: New encryption keys do not match. Icon encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Icon encryption key kid for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.encryptionKey.kid + ".");
                            if (e.attrs.fileId !== d.attrs.fileId) throw new Error("[check] reencryptIcon: File IDs do not match. Icon file ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.fileId + ". Icon file ID for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.fileId + ".")
                        }), [2]
                }
            })
        })
    },
    reencryptDocumentData = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, i, n, o;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, vault_item_1.getDocument(e, t.item, t.attrs)];
                    case 1:
                        return r = a.sent(), [4, Promise.all([vault_item_1.uploadDocument(e, r, t.attrs.fileName), crypto_1.sha256(r)])];
                    case 2:
                        return i = __read.apply(void 0, [a.sent(), 2]), n = i[0], o = i[1], [2, {
                            newAttrs: n,
                            hash: o
                        }]
                }
            })
        })
    },
    reencryptDocument = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, i, n, o, a, u, c, l, s, d, f, m;
            return __generator(this, function(v) {
                switch (v.label) {
                    case 0:
                        if (r = __read(t), i = r[0], n = r.slice(1), void 0 === i) throw new Error("reencryptIcon: Received empty references array.");
                        return n.forEach(function(e) {
                            if (!lodash_es_1.isEqual(e.attrs.encryptionKey, i.attrs.encryptionKey)) throw new Error("reencryptDocument: Encryption keys do not match. Document encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Document encryption key kid for item " + i.item.uuid + ", vault " + i.item.vault.uuid + ": " + i.attrs.encryptionKey.kid + ".");
                            if (e.attrs.documentId !== i.attrs.documentId) throw new Error("reencryptDocument: Document IDs do not match. Document ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.documentId + ". Document ID for item " + i.item.uuid + ", vault " + i.item.vault.uuid + ": " + i.attrs.documentId + ".")
                        }), o = t.map(function(e) {
                            return e.item.itemVersion
                        }), [4, reencryptDocumentData(e, i)];
                    case 1:
                        return a = v.sent(), u = a.newAttrs, c = a.hash, [4, util.batchPromiseAll(function(t) {
                            var r = t.type,
                                i = t.attrs,
                                n = t.item;
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            if ("document" !== r) throw new Error("reencryptDocument: Somehow this isn't a document");
                                            return n.details.documentAttributes = __assign(__assign({}, u), {
                                                fileName: i.fileName
                                            }), [4, vault_item_1.patchVaultItems(e, [n], n.vault)];
                                        case 1:
                                            return t.sent(), [4, vault_item_1.deleteVaultItemHistory(e, n)];
                                        case 2:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, 1, t)];
                    case 2:
                        return v.sent(), [4, util.batchPromiseAll(exports.getHydratedRef(e, u.documentId), 5, t.map(function(e) {
                            var t = e.item;
                            return {
                                vaultUuid: t.vault.uuid,
                                itemUuid: t.uuid
                            }
                        }))];
                    case 3:
                        return l = v.sent().map(function(e) {
                            if ("document" !== e.type) throw new Error("[check] reencryptDocument/freshRefs: Was a document and now is not: " + e.item.vault.uuid + "/" + e.item.uuid);
                            return e
                        }), [4, Promise.all(l.map(function(t, r) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var n, a, u;
                                return __generator(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (n = t.item.vault.uuid + "/" + t.item.uuid, lodash_es_1.isEqual(t.attrs.encryptionKey, i.attrs.encryptionKey)) throw new Error("[check] reencryptDocument: Encryption key did not change: " + t.attrs.encryptionKey.kid + " for icon " + t.attrs.documentId + " (originally " + i.attrs.documentId + ") in " + n);
                                            if (t.attrs.documentId === i.attrs.documentId) throw new Error("[check] reencryptDocument: Document ID did not change: " + t.attrs.documentId + " in " + n);
                                            if (void 0 === (a = o[r])) throw new Error("[check] reencryptDocument: originalVersion index out of range");
                                            if (u = a + 1, t.item.itemVersion !== u) throw new Error("[check] reencryptDocument: Expected item version " + u + ", got " + t.item.itemVersion + ", for " + n);
                                            return [4, vault_item_1.getVaultItemHistory(e, t.item)];
                                        case 1:
                                            if (c.sent().history.length > 0) throw new Error("[check] reencryptDocument: Item history was not purged for " + n);
                                            return [2]
                                    }
                                })
                            })
                        }))];
                    case 4:
                        if (v.sent(), s = __read(l), d = s[0], f = s.slice(1), void 0 === d) throw new Error("[check] reencryptDocument: No fresh refs available");
                        return [4, vault_item_1.getDocument(e, d.item, d.attrs).then(crypto_1.sha256)];
                    case 5:
                        if (m = v.sent(), !lodash_es_1.isEqual(c, m)) throw new Error("[check] reencryptDocument: Document data changed for icon in " + d.item.vault.uuid + "/" + d.item.uuid);
                        return f.forEach(function(e) {
                            if (!lodash_es_1.isEqual(e.attrs.encryptionKey, d.attrs.encryptionKey)) throw new Error("[check] reencryptDocument: New encryption keys do not match. Document encryption key kid for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.encryptionKey.kid + ". Document encryption key kid for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.encryptionKey.kid + ".");
                            if (e.attrs.documentId !== d.attrs.documentId) throw new Error("[check] reencryptDocument: Document IDs do not match. Document ID for item " + e.item.uuid + ", vault " + e.item.vault.uuid + ": " + e.attrs.documentId + ". Document ID for item " + d.item.uuid + ", vault " + d.item.vault.uuid + ": " + d.attrs.documentId + ".")
                        }), [2]
                }
            })
        })
    };