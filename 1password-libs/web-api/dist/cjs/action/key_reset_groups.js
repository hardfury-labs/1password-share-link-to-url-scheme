"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, o) {
        return new(r || (r = Promise))(function(n, i) {
            function u(e) {
                try {
                    a(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    a(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, s)
            }
            a((o = o.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, o, n, i, u = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                        switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return u.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < n[1]) {
                                    u.label = n[1], n = i;
                                    break
                                }
                                if (n && u.label < n[2]) {
                                    u.label = n[2], u.ops.push(i);
                                    break
                                }
                                n[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        i = t.call(e, u)
                    } catch (e) {
                        i = [6, e], o = 0
                    } finally {
                        r = n = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.correctCliAffectedGroups = exports.getCliGroupEffort = exports.getCliAffectedGroups = void 0;
var api = __importStar(require("../api")),
    model = __importStar(require("../model")),
    util = __importStar(require("../util")),
    group_1 = require("./group"),
    ProvisionPeople = model.Permission.ProvisionPeople,
    getCliAffectedGroups = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, api.getGroupsCreatedByCli(e.session)];
                    case 1:
                        return [2, t.sent().groups.filter(function(e) {
                            return !model.BitSet.includes(e.permissions, ProvisionPeople)
                        })]
                }
            })
        })
    };
exports.getCliAffectedGroups = getCliAffectedGroups;
var GroupCorrectionEffort = {
        getList: 1,
        fixOne: 11
    },
    getCliGroupEffort = function(e) {
        return 0 === e.length ? 0 : 2 * GroupCorrectionEffort.getList + GroupCorrectionEffort.fixOne * e.length
    };
exports.getCliGroupEffort = getCliGroupEffort;
var correctCliAffectedGroups = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o, n, i, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return t(0), [4, api.getGroupsCreatedByCli(e.session)];
                case 1:
                    if (r = s.sent().groups, (o = r.filter(function(e) {
                            return !model.BitSet.includes(e.permissions, ProvisionPeople)
                        })).length < r.length) throw new Error("correctCliAffectedGroups: Affected provisioning group still exists but should have already been handled. " + o.length + "/" + r.length);
                    return n = exports.getCliGroupEffort(o), i = 0, t((i += GroupCorrectionEffort.getList) / n), [4, replaceGroupsKeysets(e, r, function() {
                        t((i += GroupCorrectionEffort.fixOne) / n)
                    })];
                case 2:
                    return s.sent(), [4, api.getGroupsCreatedByCli(e.session)];
                case 3:
                    if (0 !== (u = s.sent().groups).length) throw new Error("correctCliAffectedGroups: Some groups have not been updated: " + u.length);
                    return t(1), [2]
            }
        })
    })
};
exports.correctCliAffectedGroups = correctCliAffectedGroups;
var replaceGroupsKeysets = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return o = function(t) {
                        return group_1.replaceGroupKeysets(e, t).then(r)
                    }, [4, util.batchPromiseAll(o, 5, t)];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};