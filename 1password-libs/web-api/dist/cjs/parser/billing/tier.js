"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, a = arguments.length; t < a; t++)
                for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, a) {
        void 0 === a && (a = t), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, a) {
        void 0 === a && (a = t), e[a] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __values = this && this.__values || function(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
            t = r && e[r],
            a = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && a >= e.length && (e = void 0), {
                    value: e && e[a++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.tierFromAPI = exports.parseTiersFromAPI = exports.parseAvailableTiersFromAPI = void 0;
var lodash_es_1 = require("lodash-es"),
    model = __importStar(require("../../model")),
    parseAvailableTiersFromAPI = function(e, r) {
        var t, a;
        if (!e || 0 === e.length) return [];
        var n = [];
        try {
            for (var i = __values(e), s = i.next(); !s.done; s = i.next()) {
                var o = s.value,
                    l = exports.tierFromAPI(o);
                r.tier && r.tier.name === l.name && (r.tier.plans = l.plans, l.sortOrder = -1), n.push(l)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                s && !s.done && (a = i.return) && a.call(i)
            } finally {
                if (t) throw t.error
            }
        }
        return lodash_es_1.sortBy(n, "sortOrder")
    };
exports.parseAvailableTiersFromAPI = parseAvailableTiersFromAPI;
var parseTiersFromAPI = function(e) {
    return e.map(function(e) {
        return exports.tierFromAPI(e)
    })
};
exports.parseTiersFromAPI = parseTiersFromAPI;
var tierFromAPI = function(e, r) {
    var t = e.features.reduce(function(e, r) {
            var t;
            return __assign(__assign({}, e), ((t = {})[r] = !0, t))
        }, model.billing.getBlankTier().hasFeature),
        a = [];
    e.plans && (a = lodash_es_1.sortBy(e.plans, "sortOrder"));
    var n = __assign(__assign({}, lodash_es_1.omit(e, ["features"])), {
        marketingText: __assign(__assign({}, e.marketingText), {
            localizedFeatures: e.marketingText.localizedFeatures
        }),
        hasFeature: t,
        plans: a
    });
    return 0 === n.plans.length && r && r.plans && r.plans.length > 0 && r.name === n.name && (n.plans = r.plans), n
};
exports.tierFromAPI = tierFromAPI;