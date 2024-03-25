var __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, c) {
            function o(e) {
                try {
                    u(a.next(e))
                } catch (e) {
                    c(e)
                }
            }

            function i(e) {
                try {
                    u(a.throw(e))
                } catch (e) {
                    c(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, i)
            }
            u((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, c, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function i(c) {
            return function(i) {
                return function(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, a && (n = 2 & c[0] ? a.return : c[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, c[1])).done) return n;
                        switch (a = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                            case 0:
                            case 1:
                                n = c;
                                break;
                            case 4:
                                return o.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = c[1], c = [0];
                                continue;
                            case 7:
                                c = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                                    o.label = c[1];
                                    break
                                }
                                if (6 === c[0] && o.label < n[1]) {
                                    o.label = n[1], n = c;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(c);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        c = t.call(e, o)
                    } catch (e) {
                        c = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, i])
            }
        }
    };
import {
    ServiceAccountType
} from "../../../api";
import {
    createEmptySlackApp
} from "../../../model";
import {
    getSlackApp
} from "../../slack";
import {
    buildSummaryObject
} from "./summary";
export var getAndFormatSlackApp = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, a, n, c;
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return (null === (c = e.account) || void 0 === c ? void 0 : c.hasFeature.slack) ? [4, getSlackApp(e)] : [2, void 0];
                case 1:
                    return t = o.sent(), r = createEmptySlackApp("I"), "slack-app" !== t.type || "I" === t.slackApp.state ? [2, void 0] : (a = "slack-app" === t.type ? t.slackApp : r, n = {
                        type: "S",
                        uuid: "",
                        name: "Slack",
                        createdAt: "",
                        state: a.state,
                        creatorUuid: "",
                        serviceAccountType: ServiceAccountType.Slack,
                        email: "",
                        avatar: ""
                    }, [4, buildSummaryObject({
                        slackApp: a,
                        type: ServiceAccountType.Slack,
                        CTX: e
                    })]);
                case 2:
                    return [2, (n.summary = o.sent(), n)]
            }
        })
    })
};