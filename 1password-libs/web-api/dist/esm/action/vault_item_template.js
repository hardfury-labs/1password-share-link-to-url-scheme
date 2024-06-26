var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, o) {
            function i(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, u)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
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
                    for (; i;) try {
                        if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                        switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return i.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                    i.label = a[1], a = o;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(o);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = t.call(e, i)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = a = 0
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
import * as api from "../api";
import * as model from "../model";
import * as parser from "../parser";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/vault_item_template",
    makePromise = mp(codeLocation);
export var getTemplates = function(e, t) {
    return void 0 === t && (t = !1), __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.getAccountTemplates(e.session, t)];
                case 1:
                    return [2, r.sent().templates.map(parser.vaultItemTemplateFromAPI)]
            }
        })
    })
};
export var getAllTemplates = function(e) {
    return getTemplates(e, !0)
};
export var getDefaultIdentityTemplate = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.getDefaultTemplate(e.session, model.VaultItemTemplate.IdentityUuid)];
                case 1:
                    return t = r.sent(), [2, parser.vaultItemTemplateFromAPI(t)]
            }
        })
    })
};
export var getDefaultTemplate = function(e, t) {
    return makePromise("getDefaultTemplate", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, api.getDefaultTemplate(e.session, t)];
                    case 1:
                        return r = n.sent(), [2, parser.vaultItemTemplateFromAPI(r)]
                }
            })
        })
    })
};
export var postTemplate = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return r = parser.vaultItemTemplateToAPI(t), [4, api.postTemplate(e.session, r)];
                case 1:
                    return [2, n.sent()]
            }
        })
    })
};
export var changeTemplatesState = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return n = t.map(function(e) {
                        return e.uuid
                    }), [4, api.changeTemplatesState(e.session, n, r)];
                case 1:
                    return [2, a.sent()]
            }
        })
    })
};