var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = t.call(e, o)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
import * as t from "io-ts";
import {
    fromStringEnum,
    IsoStringDate,
    unsafeDecodeAs,
    withDefault
} from "../util";
export var ItemShareAvailableTo;
! function(e) {
    e.AnyoneWithTheLink = "P", e.OnlySomePeople = "A"
}(ItemShareAvailableTo || (ItemShareAvailableTo = {}));
var AvailableToCodec = fromStringEnum(ItemShareAvailableTo, "ItemShareAvailableTo"),
    ItemSharePreflightResponse = t.readonly(t.type({
        allowedTypes: t.readonlyArray(AvailableToCodec),
        maxExpiry: t.number,
        allowedEmailDomains: t.union([t.readonlyArray(t.string), t.undefined])
    }), "ItemSharePreflightResponse");
export var ItemShareState;
! function(e) {
    e.Active = "A", e.Inactive = "I"
}(ItemShareState || (ItemShareState = {}));
var StateCodec = fromStringEnum(ItemShareState, "ItemShareState"),
    ShareDetails = t.readonly(t.type({
        uuid: t.string,
        state: StateCodec,
        itemVersion: t.number,
        createdAt: IsoStringDate,
        expiresAt: IsoStringDate,
        sharedBy: t.readonly(t.type({
            uuid: t.string,
            name: t.union([t.string, t.undefined])
        })),
        type: AvailableToCodec,
        accessors: t.union([t.readonlyArray(t.string), t.undefined]),
        viewCount: t.number,
        maxViews: t.union([t.number, t.undefined]),
        canDelete: t.boolean
    })),
    ShareHistoryForItemResponse = t.readonly(t.type({
        shares: t.readonlyArray(ShareDetails)
    }));
export var getShareHistoryForItem = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, e.get("/api/v3/itemshare/" + t + "/" + r).then(unsafeDecodeAs(ShareHistoryForItemResponse))]
        })
    })
};
export var getItemSharePreflight = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, e.get("/api/v3/itemshare/preflight/" + t + "/" + r).then(unsafeDecodeAs(ItemSharePreflightResponse))]
        })
    })
};
var CreateItemShareResponse = t.readonly(t.type({
    url: t.string
}), "CreateItemShareResponse");
export var createItemShare = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, e.post("/api/v3/itemshare", t).then(unsafeDecodeAs(CreateItemShareResponse))]
        })
    })
};
var ItemShareAuditEvent = t.readonly(t.type({
        uuid: t.string,
        ip: t.string,
        accessorEmail: t.string,
        timestamp: IsoStringDate,
        action: t.string,
        location: t.union([t.readonly(t.type({
            city: t.string,
            country: t.string,
            countryCode: t.string
        }), "ItemShareAuditLocation"), t.undefined])
    }), "ItemShareAuditEvent"),
    ItemShareAuditDetailsResponse = t.readonly(t.type({
        createdAt: IsoStringDate,
        expiresAt: IsoStringDate,
        maxViews: t.union([t.number, t.undefined]),
        state: t.string,
        accessType: AvailableToCodec,
        sharedBy: t.string,
        accessorEmails: withDefault(t.readonlyArray(t.string), []),
        events: withDefault(t.readonlyArray(ItemShareAuditEvent), [])
    }), "ItemShareAuditDetailsResponse");
export var getItemShareAuditDetails = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, e.get("/api/v3/itemshare/audit/" + t).then(unsafeDecodeAs(ItemShareAuditDetailsResponse))]
        })
    })
};
var ShareSeviceAuthTokenResponse = t.readonly(t.type({
    token: t.string,
    email: t.string,
    expiresAt: IsoStringDate
}), "ShareSeviceAuthTokenResponse");
export var getShareSeviceAuthToken = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, e.get("/api/v3/itemshare/token").then(unsafeDecodeAs(ShareSeviceAuthTokenResponse))]
        })
    })
};
export var deleteItemShare = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return [4, e.delete("/api/v3/itemshare/" + t + "/" + r + "/" + n)];
                case 1:
                    return a.sent(), [2]
            }
        })
    })
};