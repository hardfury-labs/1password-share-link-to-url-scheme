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
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            c((n = n.apply(e, t || [])).next())
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
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
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
                }([a, u])
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
    compact,
    flatMap,
    keyBy,
    map,
    values
} from "lodash-es";
import * as model from "../model";
import {
    VaultItem
} from "../model";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    dateFromAPI,
    dateToAPI
} from "./date";
import {
    parseVault
} from "./vault";
var codeLocation = "parser/vault_item",
    makePromise = mp(codeLocation);
export var reportSectionItemUsageFromApi = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n, i, a;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return 0 === t.itemUsages.length ? [2, []] : (r = compact(values(t.vaults)), i = keyBy, [4, Promise.all(map(r, function(t) {
                        return parseVault(e, t)
                    }))]);
                case 1:
                    return n = i.apply(void 0, [o.sent(), "uuid"]), a = {}, [4, Promise.all(t.itemUsages.map(function(e) {
                        var r = t.vaultItems[e.itemUuid];
                        if (r) {
                            var i = n[e.vaultUuid];
                            if (i && !a[e.itemUuid]) return vaultItemFromAPI(r, i)
                        }
                    }))];
                case 2:
                    return o.sent().forEach(function(e) {
                        e && (a[e.uuid] = e)
                    }), [2, compact(t.itemUsages.map(function(e) {
                        var t = a[e.itemUuid];
                        if (void 0 !== t) return __assign(__assign({}, e), {
                            vaultItem: t
                        })
                    }))]
            }
        })
    })
};
export var vaultItemsFromAPI = function(e, t) {
    return makePromise("vaultItemsFromAPI", function() {
        return Promise.all(e.map(function(e) {
            return vaultItemFromAPI(e, t)
        }))
    })
};
export var vaultItemFromAPI = function(e, t) {
    return makePromise("vaultItemFromAPI", function() {
        var r = t instanceof model.Vault ? new VaultItem(t, void 0, e.uuid) : t;
        return r.templateUuid = e.templateUuid, r.faveIndex = e.faveIndex || 0, r.state = e.trashed || "", r.createdAt = dateFromAPI(e.createdAt), r.updatedAt = dateFromAPI(e.updatedAt), r.changerUuid = e.changerUuid || "", r.itemVersion = e.itemVersion, r.encryptedBy = e.encryptedBy, r.decrypt(e.encOverview, e.encDetails)
    })
};
export var vaultItemToApi = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, e.encrypt()];
                case 1:
                    if (!(t = a.sent()).templateUuid) throw new Error("Missing templateUuid");
                    if (!t.encryptedBy) throw new Error("Missing encryptedBy");
                    if (!t.encOverview) throw new Error("Missing encOverview");
                    return r = {
                        uuid: t.uuid,
                        templateUuid: t.templateUuid,
                        packageUuid: t.packageUuid,
                        itemVersion: t.itemVersion,
                        encryptedBy: t.encryptedBy,
                        encOverview: t.encOverview,
                        encDetails: t.encDetails,
                        trashed: t.state
                    }, t.updatedAt && (r.updatedAt = dateToAPI(t.updatedAt)), t.createdAt && (r.createdAt = dateToAPI(t.createdAt)), "number" == typeof t.faveIndex && t.faveIndex > 0 && (r.faveIndex = t.faveIndex), n = flatMap(null !== (i = e.details.sections) && void 0 !== i ? i : [], function(e) {
                        var t;
                        return compact((null !== (t = e.fields) && void 0 !== t ? t : []).map(function(e) {
                            return VaultItem.getDocumentAttributesFromField(e)
                        }))
                    }), r.fileReferences = util.compact(__spread([t.details.documentAttributes, t.overview && t.overview.icons && t.overview.icons.detail], n)).map(function(e) {
                        if (!e.signingKey) throw new Error("Cannot handle file with no signing key");
                        var r = new model.File(fileId(e), e.signingKey);
                        return {
                            fileId: r.fileId,
                            signature: r.signReference(t.uuid, t.itemVersion)
                        }
                    }), [2, r]
            }
        })
    })
};
var fileId = function(e) {
    return e.documentId || e.fileId
};