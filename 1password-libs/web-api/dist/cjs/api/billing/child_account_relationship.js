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
        return new(n || (n = Promise))(function(o, r) {
            function c(t) {
                try {
                    u(i.next(t))
                } catch (t) {
                    r(t)
                }
            }

            function a(t) {
                try {
                    u(i.throw(t))
                } catch (t) {
                    r(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(c, a)
            }
            u((i = i.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, i, o, r, c = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r;

        function a(r) {
            return function(a) {
                return function(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                        switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                            case 0:
                            case 1:
                                o = r;
                                break;
                            case 4:
                                return c.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, i = r[1], r = [0];
                                continue;
                            case 7:
                                r = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = c.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                    c.label = r[1];
                                    break
                                }
                                if (6 === r[0] && c.label < o[1]) {
                                    c.label = o[1], o = r;
                                    break
                                }
                                if (o && c.label < o[2]) {
                                    c.label = o[2], c.ops.push(r);
                                    break
                                }
                                o[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        r = e.call(t, c)
                    } catch (t) {
                        r = [6, t], i = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.detachChildAccount = exports.checkChildAccountCode = exports.attachAsChildAccount = exports.getChildAccountRelationship = exports.createChildAccountRelationship = exports.ChildAccountRelationship = void 0;
var t = __importStar(require("io-ts")),
    validator_1 = require("../../util/validator");
exports.ChildAccountRelationship = t.readonly(t.type({
    code: t.string,
    state: t.string
}), "ChildAccountRelationship");
var createChildAccountRelationship = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.post("/api/v1/account/child").then(validator_1.unsafeDecodeAs(exports.ChildAccountRelationship))]
        })
    })
};
exports.createChildAccountRelationship = createChildAccountRelationship;
var getChildAccountRelationship = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, t.get("/api/v1/account/child").then(validator_1.unsafeDecodeAs(exports.ChildAccountRelationship))]
        })
    })
};
exports.getChildAccountRelationship = getChildAccountRelationship;
var attachAsChildAccount = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return n = {
                        code: e
                    }, [4, t.post("/api/v1/account/child/attach", n)];
                case 1:
                    return i.sent(), [2]
            }
        })
    })
};
exports.attachAsChildAccount = attachAsChildAccount;
var checkChildAccountCode = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, t.post("/api/v1/account/child/" + encodeURIComponent(e) + "/check")];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
exports.checkChildAccountCode = checkChildAccountCode;
var detachChildAccount = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, t.delete("/api/v1/account/child")];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
exports.detachChildAccount = detachChildAccount;