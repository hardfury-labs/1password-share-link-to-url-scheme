"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, a) {
        void 0 === a && (a = r), Object.defineProperty(e, a, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, a) {
        void 0 === a && (a = r), e[a] = t[r]
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
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, o) {
            function i(e) {
                try {
                    u(a.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                try {
                    u(a.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, l)
            }
            u((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, o, i = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function l(o) {
            return function(l) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, a && (n = 2 & o[0] ? a.return : o[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, o[1])).done) return n;
                        switch (a = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                            case 0:
                            case 1:
                                n = o;
                                break;
                            case 4:
                                return i.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, a = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < n[1]) {
                                    i.label = n[1], n = o;
                                    break
                                }
                                if (n && i.label < n[2]) {
                                    i.label = n[2], i.ops.push(o);
                                    break
                                }
                                n[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = t.call(e, i)
                    } catch (e) {
                        o = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, l])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.changeTemplatesState = exports.postTemplate = exports.getDefaultTemplate = exports.getDefaultIdentityTemplate = exports.getAllTemplates = exports.getTemplates = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    parser = __importStar(require("../parser")),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "action/vault_item_template",
    makePromise = make_promise_1.makePromise(codeLocation),
    getTemplates = function(e, t) {
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
exports.getTemplates = getTemplates;
var getAllTemplates = function(e) {
    return exports.getTemplates(e, !0)
};
exports.getAllTemplates = getAllTemplates;
var getDefaultIdentityTemplate = function(e) {
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
exports.getDefaultIdentityTemplate = getDefaultIdentityTemplate;
var getDefaultTemplate = function(e, t) {
    return makePromise("getDefaultTemplate", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, api.getDefaultTemplate(e.session, t)];
                    case 1:
                        return r = a.sent(), [2, parser.vaultItemTemplateFromAPI(r)]
                }
            })
        })
    })
};
exports.getDefaultTemplate = getDefaultTemplate;
var postTemplate = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return r = parser.vaultItemTemplateToAPI(t), [4, api.postTemplate(e.session, r)];
                case 1:
                    return [2, a.sent()]
            }
        })
    })
};
exports.postTemplate = postTemplate;
var changeTemplatesState = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return a = t.map(function(e) {
                        return e.uuid
                    }), [4, api.changeTemplatesState(e.session, a, r)];
                case 1:
                    return [2, n.sent()]
            }
        })
    })
};
exports.changeTemplatesState = changeTemplatesState;