var __awaiter = this && this.__awaiter || function(e, n, t, r) {
        return new(t || (t = Promise))(function(o, i) {
            function a(e) {
                try {
                    f(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                try {
                    f(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function f(e) {
                var n;
                e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t(function(e) {
                    e(n)
                })).then(a, c)
            }
            f((r = r.apply(e, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, n) {
        var t, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function c(i) {
            return function(c) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                a.label++, r = i[1], i = [0];
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
                        i = n.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var n = "function" == typeof Symbol && Symbol.iterator,
            t = n && e[n],
            r = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && r >= e.length && (e = void 0), {
                    value: e && e[r++],
                    done: !e
                }
            }
        };
        throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
import * as api from "../api";
import * as model from "../model";
export var loadBackoffice = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.getBackoffice(e.session)];
                case 1:
                    return n = r.sent(), linkBackofficeRefs(t = {
                        sections: n
                    }), [2, t]
            }
        })
    })
};
export var performBackofficeAction = function(e, n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.performBackofficeAction(e.session, n, t)]
        })
    })
};
export var getBackofficeInvoice = function(e, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.getBackofficeInvoice(e.session, n)]
        })
    })
};
export var getBackofficeNextInvoice = function(e, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.getBackofficeNextInvoice(e.session, n)]
        })
    })
};
export var getBackofficeList = function(e, n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.getBackofficeList(e.session, n, t)]
        })
    })
};
var linkBackofficeRefs = function(e) {
        var n, t;
        if (e && e.sections) try {
            for (var r = __values(e.sections), o = r.next(); !o.done; o = r.next()) {
                var i = o.value;
                linkSectionRefs(i)
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = r.return) && t.call(r)
            } finally {
                if (n) throw n.error
            }
        }
    },
    linkSectionRefs = function(e) {
        var n, t;
        if (e.subsections) try {
            for (var r = __values(e.subsections), o = r.next(); !o.done; o = r.next()) {
                var i = o.value;
                i.section = e, linkSubsectionRefs(i)
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = r.return) && t.call(r)
            } finally {
                if (n) throw n.error
            }
        }
    },
    linkSubsectionRefs = function(e) {
        var n, t;
        if (e.actions) try {
            for (var r = __values(e.actions), o = r.next(); !o.done; o = r.next()) {
                var i = o.value;
                i.section = e.section, i.subsection = e, linkActionRefs(i)
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = r.return) && t.call(r)
            } finally {
                if (n) throw n.error
            }
        }
    },
    linkActionRefs = function(e) {
        var n, t;
        if (e.params) try {
            for (var r = __values(e.params), o = r.next(); !o.done; o = r.next()) {
                o.value.action = e
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = r.return) && t.call(r)
            } finally {
                if (n) throw n.error
            }
        }
    };
export var getBackofficeSigningKeysetForUser = function(e, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, api.getBackofficeSigningKeysetsForUser(e.session, n)];
                case 1:
                    return [2, t.sent().keySets.find(function(e) {
                        return e.encryptedBy === model.KID_MASTER_PASSWORD
                    })]
            }
        })
    })
};