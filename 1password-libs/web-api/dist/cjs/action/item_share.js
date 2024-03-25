"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
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
        return new(r || (r = Promise))(function(a, n) {
            function o(e) {
                try {
                    u(i.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                try {
                    u(i.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((i = i.apply(e, t || [])).next())
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
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function s(n) {
            return function(s) {
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
                }([n, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteItemShare = exports.getShareSeviceAuthToken = exports.getShareAuditDetails = exports.generateShareSecret = exports.derivePartsFromShareSecret = exports.decryptItemShare = exports.trimItemForSharing = exports.createItemShare = exports.getItemShareSettings = exports.getShareHistoryForItem = exports.ItemShareAvailableTo = void 0;
var lodash_es_1 = require("lodash-es"),
    item_share_1 = require("../api/item_share");
Object.defineProperty(exports, "ItemShareAvailableTo", {
    enumerable: !0,
    get: function() {
        return item_share_1.ItemShareAvailableTo
    }
});
var api = __importStar(require("../api/item_share")),
    model_1 = require("../model"),
    kdf_1 = require("../model/kdf"),
    vault_1 = require("../model/vault"),
    vault_item_1 = require("../model/vault_item"),
    vault_item_2 = require("../parser/vault_item"),
    util_1 = require("../util"),
    crypto_1 = require("../util/crypto"),
    errors_1 = require("../util/errors"),
    expirationOptions = [0, 3600, 86400, 604800, 1209600, 2592e3],
    expirationDefaultPriorities = [604800, 86400, 3600, 0, 1209600, 2592e3],
    availabilityOptions = [item_share_1.ItemShareAvailableTo.AnyoneWithTheLink, item_share_1.ItemShareAvailableTo.OnlySomePeople],
    getShareHistoryForItem = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return [2, api.getShareHistoryForItem(e.session, t.vault.uuid, t.uuid)]
            })
        })
    };
exports.getShareHistoryForItem = getShareHistoryForItem;
var getItemShareSettings = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return a.trys.push([0, 2, , 3]), [4, api.getItemSharePreflight(e.session, t.vault.uuid, t.uuid)];
                case 1:
                    return r = a.sent(), [2, {
                        type: "settings",
                        expirationMenu: {
                            entries: expirationOptions.filter(isAllowedExpiration(r.maxExpiry)),
                            default: expirationDefaultPriorities.find(isAllowedExpiration(r.maxExpiry))
                        },
                        availabilityMenu: {
                            entries: availabilityOptions.filter(function(e) {
                                return r.allowedTypes.includes(e)
                            }),
                            default: availabilityOptions.find(function(e) {
                                return r.allowedTypes.includes(e)
                            })
                        },
                        maxExpiry: r.maxExpiry
                    }];
                case 2:
                    if (i = a.sent(), util_1.errors.isNewServerError(i, "unsupported", 403)) return [2, {
                        type: "unsupported"
                    }];
                    if (util_1.errors.isNewServerError(i, "account_policy", 403)) return [2, {
                        type: "accountPolicy"
                    }];
                    throw i;
                case 3:
                    return [2]
            }
        })
    })
};
exports.getItemShareSettings = getItemShareSettings;
var isAllowedExpiration = function(e) {
        return function(t) {
            return 0 === t || t <= e
        }
    },
    createItemShare = function(e, t, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var i, a, n, o, s, u, l, c, _, d, m, p, h, v;
            return __generator(this, function(y) {
                switch (y.label) {
                    case 0:
                        return i = exports.generateShareSecret(), a = i.secret, n = i.uuid, o = i.token, s = i.rawKey, [4, (u = model_1.createSymmetricKey(n)).importRawKey(model_1.JWK_ALG_A256GCM, s)];
                    case 1:
                        return y.sent(), (l = new vault_1.Vault({
                            name: "Fake Vault",
                            type: "",
                            desc: ""
                        })).activeKey = u, (c = exports.trimItemForSharing(t.clone())).vault = l, [4, c.encrypt()];
                    case 2:
                        return y.sent(), [4, vault_item_2.vaultItemToApi(c)];
                    case 3:
                        if (!(_ = y.sent()).encDetails) throw new Error("Missing item details");
                        return d = 0 === r.expiration ? r.maxExpiry : r.expiration, m = 0 === r.expiration ? 1 : 0, p = {
                            uuid: n,
                            token: o,
                            vaultUuid: t.vault.uuid,
                            itemUuid: t.uuid,
                            itemVersion: t.itemVersion,
                            encOverview: _.encOverview,
                            encDetails: _.encDetails,
                            type: r.availability,
                            accessors: r.emails,
                            expiry: d,
                            maxViews: m
                        }, [4, api.createItemShare(e.session, p)];
                    case 4:
                        h = y.sent().url, v = [h, a].join("#");
                        try {
                            new URL(v)
                        } catch (e) {
                            throw new Error("Could not construct share link: " + errors_1.getErrorMessage(e))
                        }
                        return [2, v]
                }
            })
        })
    };
exports.createItemShare = createItemShare;
var trimItemForSharing = function(e) {
    return e.details.passwordHistory = void 0, e.overview.icons = void 0, e.details.documentAttributes = void 0, e.details.sections = e.details.sections.map(function(e) {
        var t;
        return __assign(__assign({}, e), {
            fields: (null !== (t = e.fields) && void 0 !== t ? t : []).filter(isShareableField)
        })
    }), e
};
exports.trimItemForSharing = trimItemForSharing;
var fieldTypeEnumCodec = util_1.fromStringEnum(vault_item_1.VaultItem.FieldType, "VaultItem.FieldType"),
    isShareableField = function(e) {
        if (!fieldTypeEnumCodec.is(e.k)) return !1;
        switch (e.k) {
            case vault_item_1.VaultItem.FieldType.String:
            case vault_item_1.VaultItem.FieldType.Concealed:
            case vault_item_1.VaultItem.FieldType.Date:
            case vault_item_1.VaultItem.FieldType.Phone:
            case vault_item_1.VaultItem.FieldType.Address:
            case vault_item_1.VaultItem.FieldType.Url:
            case vault_item_1.VaultItem.FieldType.Email:
            case vault_item_1.VaultItem.FieldType.MonthYear:
            case vault_item_1.VaultItem.FieldType.Gender:
            case vault_item_1.VaultItem.FieldType.CreditCardType:
            case vault_item_1.VaultItem.FieldType.Menu:
            case vault_item_1.VaultItem.FieldType.Country:
            case vault_item_1.VaultItem.FieldType.Month:
            case vault_item_1.VaultItem.FieldType.OneTimePassword:
                return !0;
            case vault_item_1.VaultItem.FieldType.File:
            case vault_item_1.VaultItem.FieldType.Reference:
                return !1
        }
    },
    decryptItemShare = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, i, a;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return r = __assign(__assign({}, e), {
                            itemVersion: 1,
                            encryptedBy: e.encOverview.kid
                        }), [4, (i = model_1.createSymmetricKey(e.uuid)).importRawKey(model_1.JWK_ALG_A256GCM, t)];
                    case 1:
                        return n.sent(), (a = new vault_1.Vault({
                            name: "Fake Vault",
                            type: "",
                            desc: ""
                        })).activeKey = i, [4, vault_item_2.vaultItemFromAPI(r, a)];
                    case 2:
                        return [2, n.sent()]
                }
            })
        })
    };
exports.decryptItemShare = decryptItemShare;
var derivePartsFromShareSecret = function(e) {
    var t = util_1.base64urlToBytes(e);
    return derivePartsFromShareSecretBytes(t)
};
exports.derivePartsFromShareSecret = derivePartsFromShareSecret;
var derivePartsFromShareSecretBytes = function(e) {
        if (32 !== e.byteLength) throw new Error("Incorrect secret byte length: " + e.byteLength.toString(10));
        return {
            uuid: util_1.bytesAsClientUuid(kdf_1.HKDF("sha256", e, util_1.str2ab("share_item_uuid"), new Uint8Array, 16)),
            token: util_1.bytesAsClientUuid(kdf_1.HKDF("sha256", e, util_1.str2ab("share_item_token"), new Uint8Array, 16)),
            rawKey: kdf_1.HKDF("sha256", e, util_1.str2ab("share_item_encryption_key"), new Uint8Array, 32)
        }
    },
    generateShareSecret = function() {
        var e = crypto_1.getRandomBytes(32),
            t = derivePartsFromShareSecretBytes(e),
            r = t.uuid,
            i = t.token,
            a = t.rawKey;
        return {
            secret: util_1.bytesToBase64url(e),
            uuid: r,
            token: i,
            rawKey: a
        }
    };
exports.generateShareSecret = generateShareSecret;
var getShareAuditDetails = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.getItemShareAuditDetails(e.session, t)];
                case 1:
                    return r = i.sent(), [2, withSortedEvents(r)]
            }
        })
    })
};
exports.getShareAuditDetails = getShareAuditDetails;
var withSortedEvents = function(e) {
        var t = e.events,
            r = e.accessType;
        if (r === api.ItemShareAvailableTo.OnlySomePeople) {
            var i = e.accessorEmails.map(function(e) {
                return {
                    accessorEmail: e,
                    events: t.filter(function(t) {
                        return t.accessorEmail === e
                    })
                }
            }).sort(util_1.compare.strings(function(e) {
                return e.accessorEmail
            }));
            return __assign(__assign({}, e), {
                accessType: r,
                sortedEvents: i
            })
        }
        var a = lodash_es_1.groupBy(t, function(e) {
            return e.timestamp.toISOString().slice(0, 10)
        });
        i = lodash_es_1.map(a, function(e, t) {
            return {
                dateString: t,
                events: e
            }
        }).sort(util_1.compare.desc.dates(function(e) {
            return new Date(e.dateString)
        }));
        return __assign(__assign({}, e), {
            accessType: r,
            sortedEvents: i
        })
    },
    getShareSeviceAuthToken = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, api.getShareSeviceAuthToken(e.session)]
            })
        })
    };
exports.getShareSeviceAuthToken = getShareSeviceAuthToken;
var deleteItemShare = function(e, t, r, i) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(a) {
            return [2, api.deleteItemShare(e.session, t, r, i)]
        })
    })
};
exports.deleteItemShare = deleteItemShare;