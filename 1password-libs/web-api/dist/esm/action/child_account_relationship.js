var __awaiter = this && this.__awaiter || function(t, e, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function c(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(c, a)
            }
            u((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, r, i, o, c = {
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return c.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    c.label = o[1];
                                    break
                                }
                                if (6 === o[0] && c.label < i[1]) {
                                    c.label = i[1], i = o;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(o);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        o = e.call(t, c)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
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
import * as api from "../api";
import * as model from "../model";
import {
    getError,
    isServerError
} from "../util/errors";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getAccountWithAttrs
} from "./account";
import {
    getSubscription
} from "./billing";
import {
    changed
} from "./context";
var codeLocation = "action/child_account",
    makePromise = mp(codeLocation);
export var createChildAccountRelationship = function(t) {
    return makePromise("createChildAccountRelationship", function() {
        return api.billing.createChildAccountRelationship(t.session).then(model.ChildAccountRelationship)
    })
};
export var getChildAccountRelationship = function(t) {
    return makePromise("getChildAccountRelationship", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var e, n, r;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, api.billing.getChildAccountRelationship(t.session)];
                    case 1:
                        return e = i.sent(), [2, model.ChildAccountRelationship(e)];
                    case 2:
                        if (n = i.sent(), r = getError(n), isServerError(r, 117)) return [2, model.ChildAccountRelationship({})];
                        throw r;
                    case 3:
                        return [2]
                }
            })
        })
    })
};
export var checkChildAccountCode = function(t, e) {
    return api.billing.checkChildAccountCode(t.session, e)
};
export var detachChildAccount = function(t) {
    return api.billing.detachChildAccount(t.session)
};
export var attachAsChildAccount = function(t, e) {
    return makePromise("attachAsChildAccount", function() {
        return api.billing.attachAsChildAccount(t.session, e).then(function() {
            return getAccountWithAttrs(t, ["billing"])
        }).then(function() {
            return getSubscription(t)
        }).then(function(e) {
            return changed(t), e
        })
    })
};