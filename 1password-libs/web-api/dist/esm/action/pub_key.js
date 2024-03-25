var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, u)
            }
            s((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                    for (; a;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], n = 0
                    } finally {
                        r = o = 0
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
import {
    compact,
    keyBy
} from "lodash-es";
import * as api from "../api";
import * as util from "../util";
import {
    batchChain,
    getValidUserUuid
} from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/pub_key",
    makePromise = mp(codeLocation),
    PUBKEY_BATCH_SIZE = 195;
export var mergeInPubKeys = function(t, e) {
    var r = keyBy(t, "uuid");
    return e.map(function(t) {
        var e = r[t.uuid];
        if (void 0 === e) throw new Error("mergeInPubKeys: accessor not found");
        return __assign(__assign({}, e), {
            pubKey: t.pubKey
        })
    })
};
export var getUserPubKeys = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            return 0 === (r = compact(e.map(getValidUserUuid))).length ? [2, []] : [2, batchChain(function(e) {
                return __awaiter(void 0, void 0, void 0, function() {
                    return __generator(this, function(r) {
                        return [2, api.getUserPubKeys(t.session, e)]
                    })
                })
            }, PUBKEY_BATCH_SIZE, r)]
        })
    })
};
export var getGroupPubKeys = function(t, e) {
    return makePromise("getGroupPubKeys", function() {
        var r = compact(e.map(util.getValidGroupUuid));
        if (0 === r.length) return [];
        return batchChain(function(e) {
            return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(r) {
                    return [2, api.getGroupPubKeys(t.session, e)]
                })
            })
        }, PUBKEY_BATCH_SIZE, r)
    })
};