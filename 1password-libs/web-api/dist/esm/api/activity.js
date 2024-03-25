var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function a(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
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
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], n = 0
                    } finally {
                        r = i = 0
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
import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util";
import {
    PartialUser
} from "./partial_user";
import {
    dataToParamString
} from "./util";
export var ACTIVITIES_BATCH_SIZE = 100;
export var LegacyActivity = t.readonly(t.intersection([t.type({
    actorUuid: t.string,
    eid: t.number,
    time: t.string,
    action: t.string
}), t.partial({
    objectType: t.string,
    objectUuid: t.string,
    auxUUID: t.string,
    auxInfo: t.string
})]), "LegacyActivity");
export var Activity = t.readonly(t.intersection([t.type({
    actor: PartialUser,
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
export var getFilteredActivities = function(e, r, n, i) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(a) {
            return o = dataToParamString(i && {
                date: i.date,
                object_types: i.objectTypes,
                actor_uuid: i.actorUuid,
                object_uuid: i.objectUuid
            } || {}), [2, e.get("/api/v2/auditevents/" + r + "/" + n + o).then(function(e) {
                if (!e) throw new Error("Server response is empty");
                return unsafeDecodeAs(t.readonlyArray(Activity))(e)
            })]
        })
    })
};