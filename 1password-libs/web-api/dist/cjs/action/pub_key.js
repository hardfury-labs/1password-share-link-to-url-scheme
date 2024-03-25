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
            function u(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, a)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return u.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    u.label = o[1];
                                    break
                                }
                                if (6 === o[0] && u.label < i[1]) {
                                    u.label = i[1], i = o;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(o);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        o = t.call(e, u)
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
                }([o, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getGroupPubKeys = exports.getUserPubKeys = exports.mergeInPubKeys = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    util = __importStar(require("../util")),
    util_1 = require("../util"),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "action/pub_key",
    makePromise = make_promise_1.makePromise(codeLocation),
    PUBKEY_BATCH_SIZE = 195,
    mergeInPubKeys = function(e, t) {
        var r = lodash_es_1.keyBy(e, "uuid");
        return t.map(function(e) {
            var t = r[e.uuid];
            if (void 0 === t) throw new Error("mergeInPubKeys: accessor not found");
            return __assign(__assign({}, t), {
                pubKey: e.pubKey
            })
        })
    };
exports.mergeInPubKeys = mergeInPubKeys;
var getUserPubKeys = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, n;
        return __generator(this, function(i) {
            return 0 === (r = lodash_es_1.compact(t.map(util_1.getValidUserUuid))).length ? [2, []] : (n = function(t) {
                return __awaiter(void 0, void 0, void 0, function() {
                    return __generator(this, function(r) {
                        return [2, api.getUserPubKeys(e.session, t)]
                    })
                })
            }, [2, util_1.batchChain(n, PUBKEY_BATCH_SIZE, r)])
        })
    })
};
exports.getUserPubKeys = getUserPubKeys;
var getGroupPubKeys = function(e, t) {
    return makePromise("getGroupPubKeys", function() {
        var r = lodash_es_1.compact(t.map(util.getValidGroupUuid));
        if (0 === r.length) return [];
        return util_1.batchChain(function(t) {
            return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(r) {
                    return [2, api.getGroupPubKeys(e.session, t)]
                })
            })
        }, PUBKEY_BATCH_SIZE, r)
    })
};
exports.getGroupPubKeys = getGroupPubKeys;