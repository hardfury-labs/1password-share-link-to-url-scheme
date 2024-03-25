"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
        void 0 === i && (i = n), Object.defineProperty(t, i, {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    } : function(t, e, n, i) {
        void 0 === i && (i = n), t[i] = e[n]
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
            for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && __createBinding(e, t, n);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, n, i) {
        return new(n || (n = Promise))(function(r, o) {
            function c(t) {
                try {
                    u(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    u(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(c, a)
            }
            u((i = i.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, i, r, o, c = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
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
                        if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                        switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return c.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = c.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    c.label = o[1];
                                    break
                                }
                                if (6 === o[0] && c.label < r[1]) {
                                    c.label = r[1], r = o;
                                    break
                                }
                                if (r && c.label < r[2]) {
                                    c.label = r[2], c.ops.push(o);
                                    break
                                }
                                r[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        o = e.call(t, c)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        n = r = 0
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
}), exports.attachAsChildAccount = exports.detachChildAccount = exports.checkChildAccountCode = exports.getChildAccountRelationship = exports.createChildAccountRelationship = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    errors_1 = require("../util/errors"),
    make_promise_1 = require("../util/make_promise"),
    account_1 = require("./account"),
    billing_1 = require("./billing"),
    context_1 = require("./context"),
    codeLocation = "action/child_account",
    makePromise = make_promise_1.makePromise(codeLocation),
    createChildAccountRelationship = function(t) {
        return makePromise("createChildAccountRelationship", function() {
            return api.billing.createChildAccountRelationship(t.session).then(model.ChildAccountRelationship)
        })
    };
exports.createChildAccountRelationship = createChildAccountRelationship;
var getChildAccountRelationship = function(t) {
    return makePromise("getChildAccountRelationship", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var e, n, i;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, api.billing.getChildAccountRelationship(t.session)];
                    case 1:
                        return e = r.sent(), [2, model.ChildAccountRelationship(e)];
                    case 2:
                        if (n = r.sent(), i = errors_1.getError(n), errors_1.isServerError(i, 117)) return [2, model.ChildAccountRelationship({})];
                        throw i;
                    case 3:
                        return [2]
                }
            })
        })
    })
};
exports.getChildAccountRelationship = getChildAccountRelationship;
var checkChildAccountCode = function(t, e) {
    return api.billing.checkChildAccountCode(t.session, e)
};
exports.checkChildAccountCode = checkChildAccountCode;
var detachChildAccount = function(t) {
    return api.billing.detachChildAccount(t.session)
};
exports.detachChildAccount = detachChildAccount;
var attachAsChildAccount = function(t, e) {
    return makePromise("attachAsChildAccount", function() {
        return api.billing.attachAsChildAccount(t.session, e).then(function() {
            return account_1.getAccountWithAttrs(t, ["billing"])
        }).then(function() {
            return billing_1.getSubscription(t)
        }).then(function(e) {
            return context_1.changed(t), e
        })
    })
};
exports.attachAsChildAccount = attachAsChildAccount;