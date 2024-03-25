"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
        return new(r || (r = Promise))(function(a, i) {
            function o(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, u)
            }
            l((n = n.apply(e, t || [])).next())
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
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
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
                }([i, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getUpgradeTiers = exports.getAvailableTiers = exports.Tier = exports.Feature = void 0;
var t = __importStar(require("io-ts")),
    validator_1 = require("../../util/validator"),
    plan_1 = require("./plan");
exports.Feature = t.readonly(t.type({
    title: t.string,
    desc: t.string
}), "Feature"), exports.Tier = t.readonly(t.type({
    name: t.string,
    accountType: t.string,
    isPublic: t.boolean,
    sortOrder: t.number,
    trialDays: t.number,
    backupDays: t.number,
    guestsIncluded: t.number,
    maxGuests: t.number,
    membersIncluded: t.number,
    maxMembers: t.number,
    minQuantity: t.number,
    storagePerAccount: t.number,
    storagePerUser: t.number,
    marketingText: t.readonly(t.type({
        defaultPriceDisplayFrequency: plan_1.FrequencyCodec,
        localizedFeatures: validator_1.withDefault(t.readonlyArray(exports.Feature), []),
        name: t.string,
        viewDetailsURL: t.string
    })),
    features: validator_1.withDefault(t.readonlyArray(t.string), []),
    plans: validator_1.withDefault(t.readonlyArray(plan_1.Plan), [])
}), "Tier");
var getAvailableTiers = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, e.get("/api/v2/billing/tiers").then(validator_1.unsafeDecodeAs(t.readonlyArray(exports.Tier)))]
        })
    })
};
exports.getAvailableTiers = getAvailableTiers;
var getUpgradeTiers = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, e.get("/api/v2/billing/tiers/upgrades").then(validator_1.unsafeDecodeAs(t.readonlyArray(exports.Tier)))]
        })
    })
};
exports.getUpgradeTiers = getUpgradeTiers;