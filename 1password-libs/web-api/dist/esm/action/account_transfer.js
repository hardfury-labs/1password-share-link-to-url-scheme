var __awaiter = this && this.__awaiter || function(t, r, e, n) {
        return new(e || (e = Promise))(function(a, i) {
            function o(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var r;
                t.done ? a(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
                    t(r)
                })).then(o, s)
            }
            u((n = n.apply(t, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, r) {
        var e, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (e = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = r.call(t, o)
                    } catch (t) {
                        i = [6, t], n = 0
                    } finally {
                        e = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
import * as t from "io-ts";
import flatten from "lodash-es/flatten";
import * as Papa from "papaparse";
import * as api from "../api";
import {
    batchChain,
    isValidEmail,
    unsafeDecodeAs
} from "../util";
export var getAccountTransfersDetails = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.getAccountTransfersDetails(t.session)]
        })
    })
};
var MIGRATING_USERS_BATCH_SIZE = 500;
export var addMigratingUsers = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, batchChain(function(r) {
                        return __awaiter(void 0, void 0, void 0, function() {
                            return __generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, api.postMigratingUsers(t.session, {
                                            emails: r
                                        })];
                                    case 1:
                                        return e.sent(), [2, []]
                                }
                            })
                        })
                    }, MIGRATING_USERS_BATCH_SIZE, r)];
                case 1:
                    return e.sent(), [2]
            }
        })
    })
};
export var MigratingUserEmails = t.readonly(t.array(t.string));
export var parseMigratingUsersCsv = function(t) {
    if ("undefined" == typeof Papa) throw new TypeError("Papa Parse must be loaded first.");
    try {
        var r = Papa.parse(t, {
                skipEmptyLines: !0
            }),
            e = flatten(r.data);
        if (r.data.length !== e.length) throw new Error("Unexpected columns in row.");
        var n = unsafeDecodeAs(MigratingUserEmails)(e).filter(function(t) {
            return isValidEmail(t)
        });
        if (0 === n.length) throw new Error("No valid emails.");
        return n
    } catch (t) {
        throw console.error("Failed to parse, CSV is not in expected format.", t), t
    }
};
export var updateMigratingUserState = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, api.patchMigratingUserState(t.session, r)];
                case 1:
                    return e.sent(), t.account && (t.account.mustMigrate = !1), [2]
            }
        })
    })
};
export var suspendMigratedUser = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, api.suspendMigratedUser(t.session)]
        })
    })
};