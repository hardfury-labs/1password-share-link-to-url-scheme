var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(r) {
            for (var e, t = 1, n = arguments.length; t < n; t++)
                for (var a in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
            return r
        }).apply(this, arguments)
    },
    __values = this && this.__values || function(r) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            t = e && r[e],
            n = 0;
        if (t) return t.call(r);
        if (r && "number" == typeof r.length) return {
            next: function() {
                return r && n >= r.length && (r = void 0), {
                    value: r && r[n++],
                    done: !r
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
import {
    omit,
    sortBy
} from "lodash-es";
import * as model from "../../model";
export var parseAvailableTiersFromAPI = function(r, e) {
    var t, n;
    if (!r || 0 === r.length) return [];
    var a = [];
    try {
        for (var s = __values(r), i = s.next(); !i.done; i = s.next()) {
            var o = i.value,
                l = tierFromAPI(o);
            e.tier && e.tier.name === l.name && (e.tier.plans = l.plans, l.sortOrder = -1), a.push(l)
        }
    } catch (r) {
        t = {
            error: r
        }
    } finally {
        try {
            i && !i.done && (n = s.return) && n.call(s)
        } finally {
            if (t) throw t.error
        }
    }
    return sortBy(a, "sortOrder")
};
export var parseTiersFromAPI = function(r) {
    return r.map(function(r) {
        return tierFromAPI(r)
    })
};
export var tierFromAPI = function(r, e) {
    var t = r.features.reduce(function(r, e) {
            var t;
            return __assign(__assign({}, r), ((t = {})[e] = !0, t))
        }, model.billing.getBlankTier().hasFeature),
        n = [];
    r.plans && (n = sortBy(r.plans, "sortOrder"));
    var a = __assign(__assign({}, omit(r, ["features"])), {
        marketingText: __assign(__assign({}, r.marketingText), {
            localizedFeatures: r.marketingText.localizedFeatures
        }),
        hasFeature: t,
        plans: n
    });
    return 0 === a.plans.length && e && e.plans && e.plans.length > 0 && e.name === a.name && (a.plans = e.plans), a
};