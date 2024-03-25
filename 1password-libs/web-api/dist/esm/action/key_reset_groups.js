var __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(n, i) {
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
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, s)
            }
            a((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, n, i, u = {
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
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
                        i = r.call(e, u)
                    } catch (e) {
                        i = [6, e], o = 0
                    } finally {
                        t = n = 0
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
import * as api from "../api";
import * as model from "../model";
import * as util from "../util";
import {
    replaceGroupKeysets
} from "./group";
var ProvisionPeople = model.Permission.ProvisionPeople;
export var getCliAffectedGroups = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.getGroupsCreatedByCli(e.session)];
                case 1:
                    return [2, r.sent().groups.filter(function(e) {
                        return !model.BitSet.includes(e.permissions, ProvisionPeople)
                    })]
            }
        })
    })
};
var GroupCorrectionEffort = {
    getList: 1,
    fixOne: 11
};
export var getCliGroupEffort = function(e) {
    return 0 === e.length ? 0 : 2 * GroupCorrectionEffort.getList + GroupCorrectionEffort.fixOne * e.length
};
export var correctCliAffectedGroups = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o, n, i, u;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return r(0), [4, api.getGroupsCreatedByCli(e.session)];
                case 1:
                    if (t = s.sent().groups, (o = t.filter(function(e) {
                            return !model.BitSet.includes(e.permissions, ProvisionPeople)
                        })).length < t.length) throw new Error("correctCliAffectedGroups: Affected provisioning group still exists but should have already been handled. " + o.length + "/" + t.length);
                    return n = getCliGroupEffort(o), i = 0, r((i += GroupCorrectionEffort.getList) / n), [4, replaceGroupsKeysets(e, t, function() {
                        r((i += GroupCorrectionEffort.fixOne) / n)
                    })];
                case 2:
                    return s.sent(), [4, api.getGroupsCreatedByCli(e.session)];
                case 3:
                    if (0 !== (u = s.sent().groups).length) throw new Error("correctCliAffectedGroups: Some groups have not been updated: " + u.length);
                    return r(1), [2]
            }
        })
    })
};
var replaceGroupsKeysets = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return o = function(r) {
                        return replaceGroupKeysets(e, r).then(t)
                    }, [4, util.batchPromiseAll(o, 5, r)];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};