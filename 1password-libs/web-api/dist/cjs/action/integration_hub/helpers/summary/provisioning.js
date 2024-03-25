"use strict";
var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function u(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(u, a)
            }
            l((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, u = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return u.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = u.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < o[1]) {
                                    u.label = o[1], o = i;
                                    break
                                }
                                if (o && u.label < o[2]) {
                                    u.label = o[2], u.ops.push(i);
                                    break
                                }
                                o[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        i = r.call(e, u)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getProvisioningSummaryInfo = void 0;
var api_1 = require("../../../../api"),
    util_1 = require("../../../../util"),
    group_1 = require("../../../group"),
    getProvisioningSummaryInfo = function(e) {
        var r = e.CTX,
            t = e.sa,
            n = e.releases;
        return __awaiter(void 0, void 0, void 0, function() {
            var e, o, i, u, a;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return e = function() {
                            var e;
                            switch (null === (e = r.account) || void 0 === e ? void 0 : e.settings.provisioning.identityProvider) {
                                case "Azure AD":
                                    return "/azure-logo.svg";
                                case "Okta":
                                    return "/okta-logo.svg";
                                case "OneLogin":
                                    return "/onelogin-logo.svg";
                                case "Rippling":
                                    return "/rippling-logo.svg";
                                case "JumpCloud":
                                    return "/jumpcloud-logo.svg";
                                default:
                                    return "/azure-logo.svg"
                            }
                        }, o = function() {
                            return __awaiter(void 0, void 0, void 0, function() {
                                var e;
                                return __generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return t.memberships ? [4, group_1.getGroups(r)] : [2, []];
                                        case 1:
                                            return e = n.sent(), [2, t.memberships.filter(function(e) {
                                                if (e.role === api_1.GroupMembership.Role.Manager) return e
                                            }).map(function(r) {
                                                var t = e.find(function(e) {
                                                    return e.uuid === r.groupUuid
                                                });
                                                return {
                                                    uuid: r.groupUuid,
                                                    avatar: t.avatar,
                                                    type: t.type
                                                }
                                            })]
                                    }
                                })
                            })
                        }, i = {
                            title: t.name,
                            icon: e()
                        }, [4, o()];
                    case 1:
                        return [2, (i.groups = l.sent(), i.active = void 0, i.tokens = void 0, i.syncActivity = void 0, i.createdAt = util_1.dateFromGolang(t.createdAt), i.version = "", i.buildNumber = null === (a = null === (u = null === n || void 0 === n ? void 0 : n.SCIM) || void 0 === u ? void 0 : u.release) || void 0 === a ? void 0 : a.buildnum, i.vaults = {
                            displayable: [],
                            total: 0
                        }, i)]
                }
            })
        })
    };
exports.getProvisioningSummaryInfo = getProvisioningSummaryInfo;