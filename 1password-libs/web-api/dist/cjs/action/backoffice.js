"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
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
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function c(e) {
                try {
                    f(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    f(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function f(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(c, a)
            }
            f((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
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
                        o = t.call(e, c)
                    } catch (e) {
                        o = [6, e], r = 0
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
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getBackofficeSigningKeysetForUser = exports.getBackofficeList = exports.getBackofficeNextInvoice = exports.getBackofficeInvoice = exports.performBackofficeAction = exports.loadBackoffice = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    loadBackoffice = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, api.getBackoffice(e.session)];
                    case 1:
                        return t = r.sent(), linkBackofficeRefs(n = {
                            sections: t
                        }), [2, n]
                }
            })
        })
    };
exports.loadBackoffice = loadBackoffice;
var performBackofficeAction = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.performBackofficeAction(e.session, t, n)]
        })
    })
};
exports.performBackofficeAction = performBackofficeAction;
var getBackofficeInvoice = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.getBackofficeInvoice(e.session, t)]
        })
    })
};
exports.getBackofficeInvoice = getBackofficeInvoice;
var getBackofficeNextInvoice = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.getBackofficeNextInvoice(e.session, t)]
        })
    })
};
exports.getBackofficeNextInvoice = getBackofficeNextInvoice;
var getBackofficeList = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.getBackofficeList(e.session, t, n)]
        })
    })
};
exports.getBackofficeList = getBackofficeList;
var linkBackofficeRefs = function(e) {
        var t, n;
        if (e && e.sections) try {
            for (var r = __values(e.sections), i = r.next(); !i.done; i = r.next()) {
                var o = i.value;
                linkSectionRefs(o)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r)
            } finally {
                if (t) throw t.error
            }
        }
    },
    linkSectionRefs = function(e) {
        var t, n;
        if (e.subsections) try {
            for (var r = __values(e.subsections), i = r.next(); !i.done; i = r.next()) {
                var o = i.value;
                o.section = e, linkSubsectionRefs(o)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r)
            } finally {
                if (t) throw t.error
            }
        }
    },
    linkSubsectionRefs = function(e) {
        var t, n;
        if (e.actions) try {
            for (var r = __values(e.actions), i = r.next(); !i.done; i = r.next()) {
                var o = i.value;
                o.section = e.section, o.subsection = e, linkActionRefs(o)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r)
            } finally {
                if (t) throw t.error
            }
        }
    },
    linkActionRefs = function(e) {
        var t, n;
        if (e.params) try {
            for (var r = __values(e.params), i = r.next(); !i.done; i = r.next()) {
                i.value.action = e
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = r.return) && n.call(r)
            } finally {
                if (t) throw t.error
            }
        }
    },
    getBackofficeSigningKeysetForUser = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, api.getBackofficeSigningKeysetsForUser(e.session, t)];
                    case 1:
                        return [2, n.sent().keySets.find(function(e) {
                            return e.encryptedBy === model.KID_MASTER_PASSWORD
                        })]
                }
            })
        })
    };
exports.getBackofficeSigningKeysetForUser = getBackofficeSigningKeysetForUser;