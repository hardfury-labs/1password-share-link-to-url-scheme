"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, i) {
        void 0 === i && (i = r), Object.defineProperty(t, i, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, i) {
        void 0 === i && (i = r), t[i] = e[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, i) {
        return new(r || (r = Promise))(function(n, o) {
            function a(t) {
                try {
                    c(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    c(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, u)
            }
            c((i = i.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, i, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < n[1]) {
                                    a.label = n[1], n = o;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(o);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFilteredActivities = exports.Activity = exports.LegacyActivity = exports.ACTIVITIES_BATCH_SIZE = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util"),
    partial_user_1 = require("./partial_user"),
    util_2 = require("./util");
exports.ACTIVITIES_BATCH_SIZE = 100, exports.LegacyActivity = t.readonly(t.intersection([t.type({
    actorUuid: t.string,
    eid: t.number,
    time: t.string,
    action: t.string
}), t.partial({
    objectType: t.string,
    objectUuid: t.string,
    auxUUID: t.string,
    auxInfo: t.string
})]), "LegacyActivity"), exports.Activity = t.readonly(t.intersection([t.type({
    actor: partial_user_1.PartialUser,
    eid: t.number,
    time: t.string,
    ipAddress: t.string,
    action: t.string
}), t.partial({
    objectType: t.string,
    objectUuid: t.string,
    auxInfo: t.string,
    auxUUID: t.string
})]));
var getFilteredActivities = function(e, r, i, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(a) {
            return o = util_2.dataToParamString(n && {
                date: n.date,
                object_types: n.objectTypes,
                actor_uuid: n.actorUuid,
                object_uuid: n.objectUuid
            } || {}), [2, e.get("/api/v2/auditevents/" + r + "/" + i + o).then(function(e) {
                if (!e) throw new Error("Server response is empty");
                return util_1.unsafeDecodeAs(t.readonlyArray(exports.Activity))(e)
            })]
        })
    })
};
exports.getFilteredActivities = getFilteredActivities;