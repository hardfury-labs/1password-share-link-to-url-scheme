var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function o(e) {
                try {
                    u(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    u(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, n, a, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
                        switch (i = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, i = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < n[1]) {
                                    o.label = n[1], n = a;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(a);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = t.call(e, o)
                    } catch (e) {
                        a = [6, e], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    };
import {
    groupBy,
    map
} from "lodash-es";
import {
    ItemShareAvailableTo
} from "../api/item_share";
import * as api from "../api/item_share";
import {
    createSymmetricKey,
    JWK_ALG_A256GCM
} from "../model";
import {
    HKDF
} from "../model/kdf";
import {
    Vault
} from "../model/vault";
import {
    VaultItem
} from "../model/vault_item";
import {
    vaultItemFromAPI,
    vaultItemToApi
} from "../parser/vault_item";
import {
    base64urlToBytes,
    bytesAsClientUuid,
    bytesToBase64url,
    compare,
    errors,
    fromStringEnum,
    str2ab
} from "../util";
import {
    getRandomBytes
} from "../util/crypto";
import {
    getErrorMessage
} from "../util/errors";
export {
    ItemShareAvailableTo
};
var expirationOptions = [0, 3600, 86400, 604800, 1209600, 2592e3],
    expirationDefaultPriorities = [604800, 86400, 3600, 0, 1209600, 2592e3],
    availabilityOptions = [ItemShareAvailableTo.AnyoneWithTheLink, ItemShareAvailableTo.OnlySomePeople];
export var getShareHistoryForItem = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.getShareHistoryForItem(e.session, t.vault.uuid, t.uuid)]
        })
    })
};
export var getItemShareSettings = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, i;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.getItemSharePreflight(e.session, t.vault.uuid, t.uuid)];
                case 1:
                    return r = n.sent(), [2, {
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
                    if (i = n.sent(), errors.isNewServerError(i, "unsupported", 403)) return [2, {
                        type: "unsupported"
                    }];
                    if (errors.isNewServerError(i, "account_policy", 403)) return [2, {
                        type: "accountPolicy"
                    }];
                    throw i;
                case 3:
                    return [2]
            }
        })
    })
};
var isAllowedExpiration = function(e) {
    return function(t) {
        return 0 === t || t <= e
    }
};
export var createItemShare = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var i, n, a, o, s, u, l, c, p, d, m, y, v, f;
        return __generator(this, function(h) {
            switch (h.label) {
                case 0:
                    return i = generateShareSecret(), n = i.secret, a = i.uuid, o = i.token, s = i.rawKey, [4, (u = createSymmetricKey(a)).importRawKey(JWK_ALG_A256GCM, s)];
                case 1:
                    return h.sent(), (l = new Vault({
                        name: "Fake Vault",
                        type: "",
                        desc: ""
                    })).activeKey = u, (c = trimItemForSharing(t.clone())).vault = l, [4, c.encrypt()];
                case 2:
                    return h.sent(), [4, vaultItemToApi(c)];
                case 3:
                    if (!(p = h.sent()).encDetails) throw new Error("Missing item details");
                    return d = 0 === r.expiration ? r.maxExpiry : r.expiration, m = 0 === r.expiration ? 1 : 0, y = {
                        uuid: a,
                        token: o,
                        vaultUuid: t.vault.uuid,
                        itemUuid: t.uuid,
                        itemVersion: t.itemVersion,
                        encOverview: p.encOverview,
                        encDetails: p.encDetails,
                        type: r.availability,
                        accessors: r.emails,
                        expiry: d,
                        maxViews: m
                    }, [4, api.createItemShare(e.session, y)];
                case 4:
                    v = h.sent().url, f = [v, n].join("#");
                    try {
                        new URL(f)
                    } catch (e) {
                        throw new Error("Could not construct share link: " + getErrorMessage(e))
                    }
                    return [2, f]
            }
        })
    })
};
export var trimItemForSharing = function(e) {
    return e.details.passwordHistory = void 0, e.overview.icons = void 0, e.details.documentAttributes = void 0, e.details.sections = e.details.sections.map(function(e) {
        var t;
        return __assign(__assign({}, e), {
            fields: (null !== (t = e.fields) && void 0 !== t ? t : []).filter(isShareableField)
        })
    }), e
};
var fieldTypeEnumCodec = fromStringEnum(VaultItem.FieldType, "VaultItem.FieldType"),
    isShareableField = function(e) {
        if (!fieldTypeEnumCodec.is(e.k)) return !1;
        switch (e.k) {
            case VaultItem.FieldType.String:
            case VaultItem.FieldType.Concealed:
            case VaultItem.FieldType.Date:
            case VaultItem.FieldType.Phone:
            case VaultItem.FieldType.Address:
            case VaultItem.FieldType.Url:
            case VaultItem.FieldType.Email:
            case VaultItem.FieldType.MonthYear:
            case VaultItem.FieldType.Gender:
            case VaultItem.FieldType.CreditCardType:
            case VaultItem.FieldType.Menu:
            case VaultItem.FieldType.Country:
            case VaultItem.FieldType.Month:
            case VaultItem.FieldType.OneTimePassword:
                return !0;
            case VaultItem.FieldType.File:
            case VaultItem.FieldType.Reference:
                return !1
        }
    };
export var decryptItemShare = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, i, n;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return r = __assign(__assign({}, e), {
                        itemVersion: 1,
                        encryptedBy: e.encOverview.kid
                    }), [4, (i = createSymmetricKey(e.uuid)).importRawKey(JWK_ALG_A256GCM, t)];
                case 1:
                    return a.sent(), (n = new Vault({
                        name: "Fake Vault",
                        type: "",
                        desc: ""
                    })).activeKey = i, [4, vaultItemFromAPI(r, n)];
                case 2:
                    return [2, a.sent()]
            }
        })
    })
};
export var derivePartsFromShareSecret = function(e) {
    var t = base64urlToBytes(e);
    return derivePartsFromShareSecretBytes(t)
};
var derivePartsFromShareSecretBytes = function(e) {
    if (32 !== e.byteLength) throw new Error("Incorrect secret byte length: " + e.byteLength.toString(10));
    return {
        uuid: bytesAsClientUuid(HKDF("sha256", e, str2ab("share_item_uuid"), new Uint8Array, 16)),
        token: bytesAsClientUuid(HKDF("sha256", e, str2ab("share_item_token"), new Uint8Array, 16)),
        rawKey: HKDF("sha256", e, str2ab("share_item_encryption_key"), new Uint8Array, 32)
    }
};
export var generateShareSecret = function() {
    var e = getRandomBytes(32),
        t = derivePartsFromShareSecretBytes(e),
        r = t.uuid,
        i = t.token,
        n = t.rawKey;
    return {
        secret: bytesToBase64url(e),
        uuid: r,
        token: i,
        rawKey: n
    }
};
export var getShareAuditDetails = function(e, t) {
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
        }).sort(compare.strings(function(e) {
            return e.accessorEmail
        }));
        return __assign(__assign({}, e), {
            accessType: r,
            sortedEvents: i
        })
    }
    var n = groupBy(t, function(e) {
        return e.timestamp.toISOString().slice(0, 10)
    });
    i = map(n, function(e, t) {
        return {
            dateString: t,
            events: e
        }
    }).sort(compare.desc.dates(function(e) {
        return new Date(e.dateString)
    }));
    return __assign(__assign({}, e), {
        accessType: r,
        sortedEvents: i
    })
};
export var getShareSeviceAuthToken = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.getShareSeviceAuthToken(e.session)]
        })
    })
};
export var deleteItemShare = function(e, t, r, i) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.deleteItemShare(e.session, t, r, i)]
        })
    })
};