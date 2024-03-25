"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(a, o) {
            function i(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var r;
                e.done ? a(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, s)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
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
                        o = r.call(e, i)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        t = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, a, o = t.call(e),
            i = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = o.next()).done;) i.push(n.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = o.return) && t.call(o)
            } finally {
                if (a) throw a.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.removePackage = exports.markPackageAsRead = exports.getMoreIncomingPackages = exports.getIncomingPackages = exports.sendPackage = exports.getReceivingVault = exports.getPackagesForVaultItem = exports.removePackages = exports.sendPackages = exports.processIncomingPackages = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    model_1 = require("../model"),
    parser = __importStar(require("../parser")),
    error_handler_1 = require("../util/error_handler"),
    make_promise_1 = require("../util/make_promise"),
    group_1 = require("./group"),
    pub_key_1 = require("./pub_key"),
    vault_1 = require("./vault"),
    vault_item_1 = require("./vault_item"),
    codeLocation = "action/package",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    makePromise = make_promise_1.makePromise(codeLocation),
    processIncomingPackages = function(e) {
        return Promise.resolve().then(function() {
            return e.account && !e.account.hasPackages ? Promise.resolve(void 0) : (console.log("Processing Incoming Packages"), exports.getReceivingVault(e, {
                mustReload: !0
            }).then(function(t) {
                return r = t, api.getIncomingPackages(e.session)
            }).then(function(r) {
                return Promise.all(lodash_es_1.map(r, function(r) {
                    return api.getIncomingPackage(e.session, r.uuid)
                }))
            }).then(function(t) {
                return Promise.all(lodash_es_1.map(t, function(t) {
                    return parser.packageFromAPI(e, r, t, function(r) {
                        return pub_key_1.getUserPubKeys(e, r)
                    })
                }))
            }).then(function(t) {
                return __awaiter(void 0, void 0, void 0, function() {
                    var n, a, o, i, s;
                    return __generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return [4, Promise.all(lodash_es_1.map(t, getValidPackageItem(e, r)))];
                            case 1:
                                return n = u.sent(), a = __read(n.reduce(function(e, r) {
                                    var t = __read(e, 2),
                                        n = t[0],
                                        a = t[1];
                                    return "string" == typeof r ? [__spread(n, [r]), a] : [n, __spread(a, [r])]
                                }, [
                                    [],
                                    []
                                ]), 2), o = a[0], i = a[1], o.length > 0 ? [4, api.removePackages(e.session, o)] : [3, 3];
                            case 2:
                                u.sent(), console.warn("Removed " + o.length + " invalid packages"), u.label = 3;
                            case 3:
                                return i.length > 0 ? [4, vault_item_1.patchVaultItems(e, i, r)] : [3, 5];
                            case 4:
                                return s = u.sent(), console.log("Processed " + i.length + " package(s)"), [2, s];
                            case 5:
                                return [2, void 0]
                        }
                    })
                })
            }));
            var r
        }).catch(errorHandler("processIncomingPackages"))
    };
exports.processIncomingPackages = processIncomingPackages;
var getValidPackageItem = function(e, r) {
        return function(t) {
            return __awaiter(void 0, void 0, void 0, function() {
                var n, a, o;
                return __generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if (!t.uuid) throw new Error("Really messed up package, missing UUID");
                            return t.item ? (n = t.item.details.documentAttributes) && !n.documentId ? (console.warn("Removing package with no document ID: " + t.uuid), [2, t.uuid]) : (a = t.item, o = a, [4, api.getVaultItemVersion(e.session, r.uuid, a.uuid)]) : (console.warn("Removing package with no item: " + t.uuid), [2, t.uuid]);
                        case 1:
                            return o.itemVersion = i.sent(), [2, a]
                    }
                })
            })
        }
    },
    sendPackages = function(e, r, t) {
        return makePromise("sendPackages", function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var n, a, o, i;
                return __generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, group_1.getRecoveryGroup(e, {
                                attrs: model.Group.Attr.PubKey
                            })];
                        case 1:
                            return n = s.sent(), [4, pub_key_1.getUserPubKeys(e, t)];
                        case 2:
                            return a = s.sent(), [4, createPackagesForPeople(e, r, a, n)];
                        case 3:
                            return o = s.sent(), i = o.map(parser.packageToAPI), [4, api.sendPackages(e.session, i)];
                        case 4:
                            return s.sent(), [2, o]
                    }
                })
            })
        })
    };
exports.sendPackages = sendPackages;
var createPackagesForPeople = function(e, r, t, n) {
        return makePromise("createPackagesForPeople", function() {
            var a = e.user;
            if (!a) throw new Error("Missing user");
            var o = lodash_es_1.flatten(t.map(function(e) {
                return r.map(function(r) {
                    return new model.Package(a, e, r).encryptAndSign(n)
                })
            }));
            return Promise.all(o)
        })
    },
    removePackages = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t;
            return __generator(this, function(n) {
                return t = r.map(function(e) {
                    if (!e.uuid) throw new Error("Missing package UUID");
                    return e.uuid
                }), [2, api.removePackages(e.session, t)]
            })
        })
    };
exports.removePackages = removePackages;
var getPackagesForVaultItem = function(e, r) {
    return Promise.resolve().then(function() {
        return api.getPackagesForVaultItem(e.session, r.vault.uuid, r.uuid).then(function(t) {
            return parser.packagesFromAPI(e, r.vault, t, function(r) {
                return pub_key_1.getUserPubKeys(e, r)
            })
        })
    }).catch(errorHandler("getPackagesForVaultItem"))
};
exports.getPackagesForVaultItem = getPackagesForVaultItem;
var getReceivingVault = function(e, r) {
    return Promise.resolve().then(function() {
        return e.user && model_1.User.isGuest(e.user) ? vault_1.getVaults(e, {
            mustReload: !0
        }).then(function(e) {
            return lodash_es_1.first(e)
        }) : vault_1.getPersonalVault(e, r)
    }).then(function(e) {
        if (!e) throw new Error("Current user does not have a receiving vault");
        return e
    }).catch(errorHandler("getReceivingVault"))
};
exports.getReceivingVault = getReceivingVault;
var sendPackage = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2]
        })
    })
};
exports.sendPackage = sendPackage;
var getIncomingPackages = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2]
        })
    })
};
exports.getIncomingPackages = getIncomingPackages;
var getMoreIncomingPackages = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2]
        })
    })
};
exports.getMoreIncomingPackages = getMoreIncomingPackages;
var markPackageAsRead = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.markPackageAsRead(e.session, r)]
        })
    })
};
exports.markPackageAsRead = markPackageAsRead;
var removePackage = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.removePackageV2(e.session, r)]
        })
    })
};
exports.removePackage = removePackage;