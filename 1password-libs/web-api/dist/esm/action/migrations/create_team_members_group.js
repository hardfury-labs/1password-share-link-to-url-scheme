var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function i(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
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
                })).then(i, u)
            }
            s((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = r.call(e, i)
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
                }([a, u])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, a = t.call(e),
            i = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) i.push(n.value)
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
        return i
    };
import {
    GroupMembership
} from "../../api";
import {
    Group,
    Permission,
    Person
} from "../../model";
import {
    generateNewKeysetForGroup,
    getRecoveryGroup,
    sendGroup
} from "../group";
import {
    getPartialUsers
} from "../partial_user";
import {
    getPerson
} from "../user";
export var createTeamMembersGroup = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return e.user && e.account && e.user.hasPermission(Permission.ManageGroups) && !e.account.teamMembersGroup && e.account.hasFeature.members ? [2, function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var r, t, n, o, a, i;
                    return __generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return r = new Group({
                                    name: "Team Members",
                                    type: Group.TypeTeamMembers,
                                    desc: "All team members."
                                }), [4, getRecoveryGroup(e, {
                                    attrs: Group.Attr.PubKey
                                })];
                            case 1:
                                return t = u.sent(), [4, Promise.all([generateNewKeysetForGroup(e, r, t), getPartialUsers(e)])];
                            case 2:
                                return n = __read.apply(void 0, [u.sent(), 2]), o = n[0], a = n[1], i = a.filter(function(e) {
                                    return "R" === e.type
                                }).map(function(t) {
                                    return __awaiter(void 0, void 0, void 0, function() {
                                        var n;
                                        return __generator(this, function(a) {
                                            switch (a.label) {
                                                case 0:
                                                    return [4, getPerson(e, t, {
                                                        attrs: Person.Attr.PubKey
                                                    })];
                                                case 1:
                                                    return n = a.sent(), [4, r.addMembership(o, n, {
                                                        role: GroupMembership.Role.Member
                                                    })];
                                                case 2:
                                                    return a.sent(), [2]
                                            }
                                        })
                                    })
                                }), [4, Promise.all(i)];
                            case 3:
                                return u.sent(), [4, sendGroup(e, r)];
                            case 4:
                                return u.sent(), [2]
                        }
                    })
                })
            }] : [2, void 0]
        })
    })
};