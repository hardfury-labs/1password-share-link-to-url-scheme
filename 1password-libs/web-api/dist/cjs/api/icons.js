"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r]
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
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, u)
            }
            c((n = n.apply(t, e || [])).next())
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getIcons = exports.IconSet = void 0;
var t = __importStar(require("io-ts")),
    validator_1 = require("../util/validator");
exports.IconSet = t.readonly(t.type({
    version: t.string,
    icons: t.readonlyArray(t.type({
        url: t.string,
        description: t.string
    }))
}));
var getIcons = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.get("/api/v1/icons/" + e).then(validator_1.unsafeDecodeAs(exports.IconSet))]
        })
    })
};
exports.getIcons = getIcons;