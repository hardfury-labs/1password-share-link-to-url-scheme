"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, a) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(s, o)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, a, s = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function o(a) {
            return function(o) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < i[1]) {
                                    s.label = i[1], i = a;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(a);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, o])
            }
        }
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.suspendMigratedUser = exports.updateMigratingUserState = exports.parseMigratingUsersCsv = exports.MigratingUserEmails = exports.addMigratingUsers = exports.getAccountTransfersDetails = void 0;
var t = __importStar(require("io-ts")),
    flatten_1 = __importDefault(require("lodash-es/flatten")),
    Papa = __importStar(require("papaparse")),
    api = __importStar(require("../api")),
    util_1 = require("../util"),
    getAccountTransfersDetails = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, api.getAccountTransfersDetails(e.session)]
            })
        })
    };
exports.getAccountTransfersDetails = getAccountTransfersDetails;
var MIGRATING_USERS_BATCH_SIZE = 500,
    addMigratingUsers = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return r = function(t) {
                            return __awaiter(void 0, void 0, void 0, function() {
                                return __generator(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, api.postMigratingUsers(e.session, {
                                                emails: t
                                            })];
                                        case 1:
                                            return r.sent(), [2, []]
                                    }
                                })
                            })
                        }, [4, util_1.batchChain(r, MIGRATING_USERS_BATCH_SIZE, t)];
                    case 1:
                        return n.sent(), [2]
                }
            })
        })
    };
exports.addMigratingUsers = addMigratingUsers, exports.MigratingUserEmails = t.readonly(t.array(t.string));
var parseMigratingUsersCsv = function(e) {
    if (void 0 === Papa) throw new TypeError("Papa Parse must be loaded first.");
    try {
        var t = Papa.parse(e, {
                skipEmptyLines: !0
            }),
            r = flatten_1.default(t.data);
        if (t.data.length !== r.length) throw new Error("Unexpected columns in row.");
        var n = util_1.unsafeDecodeAs(exports.MigratingUserEmails)(r).filter(function(e) {
            return util_1.isValidEmail(e)
        });
        if (0 === n.length) throw new Error("No valid emails.");
        return n
    } catch (e) {
        throw console.error("Failed to parse, CSV is not in expected format.", e), e
    }
};
exports.parseMigratingUsersCsv = parseMigratingUsersCsv;
var updateMigratingUserState = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.patchMigratingUserState(e.session, t)];
                case 1:
                    return r.sent(), e.account && (e.account.mustMigrate = !1), [2]
            }
        })
    })
};
exports.updateMigratingUserState = updateMigratingUserState;
var suspendMigratedUser = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.suspendMigratedUser(e.session)]
        })
    })
};
exports.suspendMigratedUser = suspendMigratedUser;