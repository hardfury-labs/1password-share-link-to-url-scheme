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
        return new(r || (r = Promise))(function(i, o) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, s)
            }
            u((n = n.apply(e, t || [])).next())
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
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
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
                }([o, s])
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
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAllCreditCardItems = exports.getPreviousVersionOfItem = exports.deleteVaultItemHistory = exports.getVaultItemHistory = exports.purgeDeletedVaultItemForVault = exports.getDeletedItemsForVault = exports.legacyDeleteAllArchivedItems = exports.patchVaultItems = exports.getCustomIconForItem = exports.uploadFile = exports.getFile = exports.uploadDocument = exports.getDocumentBlob = exports.getDocument = exports.getVaultItems = exports.getVaultItemsOverviews = exports.getVaultItemWithUuid = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    util = __importStar(require("../util")),
    error_handler_1 = require("../util/error_handler"),
    make_promise_1 = require("../util/make_promise"),
    vault_1 = require("./vault"),
    codeLocation = "action/vault_item",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    makePromise = make_promise_1.makePromise(codeLocation),
    getVaultItemWithUuid = function(e, t, r, n) {
        return __awaiter(void 0, void 0, void 0, function() {
            var i;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, api.getVaultItemDetails(e.session, t.uuid, r)];
                    case 1:
                        return i = o.sent(), [2, parser.vaultItemFromAPI(i, n || t)]
                }
            })
        })
    };
exports.getVaultItemWithUuid = getVaultItemWithUuid;
var getVaultItemsOverviews = function(e, t) {
    return Promise.resolve().then(function() {
        if (!t) throw new Error("Missing vault");
        var r = t.uuid;
        return api.getVaultItemsOverviews(e.session, r).then(function(e) {
            return parser.vaultItemsFromAPI(e, t)
        })
    }).catch(errorHandler("getVaultItemsOverviews"))
};
exports.getVaultItemsOverviews = getVaultItemsOverviews;
var getVaultItems = function(e, t) {
    return makePromise("getVaultItems", function() {
        return getVaultItemsBatch(e, t, 0, []).then(function(e) {
            return parser.vaultItemsFromAPI(e, t)
        })
    })
};
exports.getVaultItems = getVaultItems;
var getVaultItemsBatch = function(e, t, r, n) {
        return makePromise("getVaultItemsBatch", function() {
            return api.getVaultItems(e.session, t.uuid, r).then(function(r) {
                var i = r.items ? n.concat(r.items) : n;
                return r.batchComplete ? Promise.resolve(i) : getVaultItemsBatch(e, t, r.contentVersion, i)
            })
        })
    },
    getDocument = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, api.getFile(e.session, r, t.uuid, t.vault.uuid)];
                    case 1:
                        return n = i.sent(), [2, parser.decryptDocument(r, n)]
                }
            })
        })
    };
exports.getDocument = getDocument;
var getDocumentBlob = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, exports.getDocument(e, t, r)];
                case 1:
                    return n = i.sent(), [2, new Blob([n], {
                        type: "application/octet-stream"
                    })]
            }
        })
    })
};
exports.getDocumentBlob = getDocumentBlob;
var uploadDocument = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, o, a, s, u;
        return __generator(this, function(l) {
            switch (l.label) {
                case 0:
                    return [4, parser.encryptDocument(t, r)];
                case 1:
                    return n = l.sent(), i = n.data, o = n.attributes, [4, api.uploadFile(e.session, i)];
                case 2:
                    if (a = l.sent(), s = a.fileId, u = a.signingKey, s) return [2, __assign(__assign({}, o), {
                        documentId: s,
                        signingKey: u
                    })];
                    throw new Error("Session did not provide file ID.")
            }
        })
    })
};
exports.uploadDocument = uploadDocument;
var getFile = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.getFile(e.session, r, t.uuid, t.vault.uuid)];
                case 1:
                    return n = i.sent(), [2, parser.decryptFile(r, n)]
            }
        })
    })
};
exports.getFile = getFile;
var uploadFile = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, o, a, s;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, parser.encryptFile(t)];
                case 1:
                    return r = u.sent(), n = r.data, i = r.attributes, [4, api.uploadFile(e.session, n)];
                case 2:
                    if (o = u.sent(), a = o.fileId, s = o.signingKey, a) return [2, __assign(__assign({}, i), {
                        fileId: a,
                        signingKey: s
                    })];
                    throw new Error("Session did not provide file ID.")
            }
        })
    })
};
exports.uploadFile = uploadFile;
var getCustomIconForItem = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    if (!t.overview.icons || !t.overview.icons.detail) throw new Error("Missing icon");
                    return [4, exports.getFile(e, t, t.overview.icons.detail)];
                case 1:
                    return r = n.sent(), [2, util.blobToBase64DataURI(new Blob([r]))]
            }
        })
    })
};
exports.getCustomIconForItem = getCustomIconForItem;
var patchVaultItems = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, i, o, a, s, u, l, c, d, m, v, f, _, p, g;
        return __generator(this, function(h) {
            switch (h.label) {
                case 0:
                    return [4, vault_1.getVault(e, r.uuid)];
                case 1:
                    n = h.sent(), i = lodash_es_1.chunk(t, 100), o = {
                        contentVersion: 0,
                        updatedItems: {},
                        failedItems: {}
                    }, h.label = 2;
                case 2:
                    h.trys.push([2, 7, 8, 9]), a = __values(i), s = a.next(), h.label = 3;
                case 3:
                    return s.done ? [3, 6] : (u = s.value, [4, patchVaultItemsBatch(e, u, n)]);
                case 4:
                    l = h.sent();
                    try {
                        for (p = void 0, c = __values(u), d = c.next(); !d.done; d = c.next()) m = d.value, l.failedItems && l.failedItems[m.uuid] || m.itemVersion++
                    } catch (e) {
                        p = {
                            error: e
                        }
                    } finally {
                        try {
                            d && !d.done && (g = c.return) && g.call(c)
                        } finally {
                            if (p) throw p.error
                        }
                    }
                    n.contentVersion = l.contentVersion, o.contentVersion = l.contentVersion, o.updatedItems = lodash_es_1.merge(o.updatedItems, l.updatedItems), o.failedItems = lodash_es_1.merge(o.failedItems, l.failedItems), h.label = 5;
                case 5:
                    return s = a.next(), [3, 3];
                case 6:
                    return [3, 9];
                case 7:
                    return v = h.sent(), f = {
                        error: v
                    }, [3, 9];
                case 8:
                    try {
                        s && !s.done && (_ = a.return) && _.call(a)
                    } finally {
                        if (f) throw f.error
                    }
                    return [7];
                case 9:
                    if (0 === lodash_es_1.size(o.updatedItems) && lodash_es_1.size(o.failedItems) > 0) throw new Error("Failed to patch vault items.");
                    return [2, o]
            }
        })
    })
};
exports.patchVaultItems = patchVaultItems;
var patchVaultItemsBatch = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var n, i, o, a, s, u;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return [4, retrieveSigningKeys(e, t)];
                    case 1:
                        return n = l.sent(), [4, Promise.all(n.map(parser.vaultItemToApi))];
                    case 2:
                        return i = l.sent(), [4, api.patchVaultItems(e.session, r.uuid, r.contentVersion, i)];
                    case 3:
                        if (o = l.sent(), a = lodash_es_1.size(o.updatedItems), s = lodash_es_1.size(o.failedItems), 0 === a && 1 === s) {
                            if (void 0 !== (u = Object.keys(o.failedItems)[0]) && 104 === o.failedItems[u]) throw new Error("This item has been edited by someone else. Please refresh, then make your edits again.")
                        } else s > 0 && console.error(s + " item(s) failed to save. " + a + " item(s) saved successfully.");
                        return [2, o]
                }
            })
        })
    },
    legacyDeleteAllArchivedItems = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, api.legacyDeleteAllArchivedItems(e.session, t)];
                    case 1:
                        return r.sent(), t.contentVersion++, [2]
                }
            })
        })
    };
exports.legacyDeleteAllArchivedItems = legacyDeleteAllArchivedItems;
var retrieveSigningKeys = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, i, o, a, s, u, l, c, d, m, v, f, _, p, g;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        r = [], n = {};
                        try {
                            for (i = __values(t), o = i.next(); !o.done; o = i.next()) {
                                if (a = o.value, (s = a.details.documentAttributes) && !s.signingKey) {
                                    if (!s.documentId) throw new Error("Invalid document item, missing document ID.");
                                    n[s.documentId] = s, r.push(api.getFileKey(e.session, s.documentId))
                                }(u = a.overview && a.overview.icons && a.overview.icons.detail) && !u.signingKey && (u.fileId ? (n[u.fileId] = u, r.push(api.getFileKey(e.session, u.fileId))) : delete a.overview.icons)
                            }
                        } catch (e) {
                            f = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (_ = i.return) && _.call(i)
                            } finally {
                                if (f) throw f.error
                            }
                        }
                        return [4, Promise.all(r)];
                    case 1:
                        l = h.sent();
                        try {
                            for (c = __values(l), d = c.next(); !d.done; d = c.next()) {
                                if (m = d.value, !(v = n[m.fileId])) throw new Error("Missing file attributes.");
                                v.signingKey = m.signingKey
                            }
                        } catch (e) {
                            p = {
                                error: e
                            }
                        } finally {
                            try {
                                d && !d.done && (g = c.return) && g.call(c)
                            } finally {
                                if (p) throw p.error
                            }
                        }
                        return [2, t]
                }
            })
        })
    },
    getDeletedItemsForVault = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, api.getDeletedVaultItems(e.session, t.uuid)];
                    case 1:
                        return r = n.sent(), [2, parser.vaultItemsFromAPI(r, t)]
                }
            })
        })
    };
exports.getDeletedItemsForVault = getDeletedItemsForVault;
var purgeDeletedVaultItemForVault = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.postPurgeDeletedVaultItems(e.session, t.uuid, [r])];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
exports.purgeDeletedVaultItemForVault = purgeDeletedVaultItemForVault;
var getVaultItemHistory = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.getVaultItemHistory(e.session, t.vault.uuid, t.uuid)];
                case 1:
                    return [2, r.sent()]
            }
        })
    })
};
exports.getVaultItemHistory = getVaultItemHistory;
var deleteVaultItemHistory = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.deleteVaultItemHistory(e.session, t.vault.uuid, t.uuid)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.deleteVaultItemHistory = deleteVaultItemHistory;
var getPreviousVersionOfItem = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, o;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return i = t.uuid, [4, api.getPreviousVersionOfItem(e.session, i, r.uuid, n)];
                case 1:
                    return o = a.sent(), [2, parser.vaultItemFromAPI(o, t)]
            }
        })
    })
};
exports.getPreviousVersionOfItem = getPreviousVersionOfItem;
var getAllCreditCardItems = function(e) {
    return makePromise("getAllCreditCardItems", function() {
        return vault_1.getPersonalVault(e)
    }).then(function(t) {
        return t ? exports.getVaultItemsOverviews(e, t) : Promise.reject(new Error("Missing Personal vault"))
    }).then(function(t) {
        var r = lodash_es_1.filter(t, function(e) {
            return e.templateUuid === model.VaultItemTemplate.CreditCardUuid && "N" === e.state
        }).map(function(t) {
            return exports.getVaultItemWithUuid(e, t.vault, t.uuid, t)
        });
        return Promise.all(r)
    })
};
exports.getAllCreditCardItems = getAllCreditCardItems;