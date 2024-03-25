"use strict";
var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function u(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function i(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, i)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, a, u = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function i(a) {
            return function(i) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return u.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    u.label = a[1];
                                    break
                                }
                                if (6 === a[0] && u.label < o[1]) {
                                    u.label = o[1], o = a;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(a);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        a = r.call(e, u)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, i])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, a = t.call(e),
            u = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) u.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return u
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.createTeamMembersGroup = void 0;
var api_1 = require("../../api"),
    model_1 = require("../../model"),
    group_1 = require("../group"),
    partial_user_1 = require("../partial_user"),
    user_1 = require("../user"),
    createTeamMembersGroup = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return e.user && e.account && e.user.hasPermission(model_1.Permission.ManageGroups) && !e.account.teamMembersGroup && e.account.hasFeature.members ? [2, function() {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var r, t, n, o, a, u;
                        return __generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return r = new model_1.Group({
                                        name: "Team Members",
                                        type: model_1.Group.TypeTeamMembers,
                                        desc: "All team members."
                                    }), [4, group_1.getRecoveryGroup(e, {
                                        attrs: model_1.Group.Attr.PubKey
                                    })];
                                case 1:
                                    return t = i.sent(), [4, Promise.all([group_1.generateNewKeysetForGroup(e, r, t), partial_user_1.getPartialUsers(e)])];
                                case 2:
                                    return n = __read.apply(void 0, [i.sent(), 2]), o = n[0], a = n[1], u = a.filter(function(e) {
                                        return "R" === e.type
                                    }).map(function(t) {
                                        return __awaiter(void 0, void 0, void 0, function() {
                                            var n;
                                            return __generator(this, function(a) {
                                                switch (a.label) {
                                                    case 0:
                                                        return [4, user_1.getPerson(e, t, {
                                                            attrs: model_1.Person.Attr.PubKey
                                                        })];
                                                    case 1:
                                                        return n = a.sent(), [4, r.addMembership(o, n, {
                                                            role: api_1.GroupMembership.Role.Member
                                                        })];
                                                    case 2:
                                                        return a.sent(), [2]
                                                }
                                            })
                                        })
                                    }), [4, Promise.all(u)];
                                case 3:
                                    return i.sent(), [4, group_1.sendGroup(e, r)];
                                case 4:
                                    return i.sent(), [2]
                            }
                        })
                    })
                }] : [2, void 0]
            })
        })
    };
exports.createTeamMembersGroup = createTeamMembersGroup;