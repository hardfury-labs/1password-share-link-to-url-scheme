"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, n, i) {
        void 0 === i && (i = n), Object.defineProperty(t, i, {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    } : function(t, e, n, i) {
        void 0 === i && (i = n), t[i] = e[n]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && __createBinding(e, t, n);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, n, i) {
        return new(n || (n = Promise))(function(o, r) {
            function a(t) {
                try {
                    s(i.next(t))
                } catch (t) {
                    r(t)
                }
            }

            function u(t) {
                try {
                    s(i.throw(t))
                } catch (t) {
                    r(t)
                }
            }

            function s(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(a, u)
            }
            s((i = i.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, i, o, r, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r;

        function u(r) {
            return function(u) {
                return function(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                        switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                            case 0:
                            case 1:
                                o = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < o[1]) {
                                    a.label = o[1], o = r;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(r);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (t) {
                        r = [6, t], i = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }([r, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getPendingInviteVaults = exports.regenerateSignUpLink = exports.completeReplyToConfirmation = exports.generateReplyToConfirmation = exports.revokeInvitations = exports.resendInvitations = exports.teamInvitePerson = exports.inviteUsersViaEmail = exports.inviteViaSlack = exports.getPendingInvitations = exports.lookUpTeamInvitation = exports.lookUpInvitation = void 0;
var t = __importStar(require("io-ts")),
    validator_1 = require("../util/validator"),
    icons_1 = require("./icons"),
    InvitationDetails = t.readonly(t.type({
        uuid: t.string,
        token: t.union([t.string, t.undefined]),
        accountUuid: t.string,
        accountName: t.union([t.string, t.undefined]),
        accountType: t.union([t.string, t.undefined]),
        accountHost: t.string,
        email: t.string,
        language: t.string,
        senderFullName: t.union([t.string, t.undefined]),
        state: t.union([t.string, t.undefined]),
        type: t.union([t.string, t.undefined]),
        sentAt: t.union([t.string, t.undefined]),
        timeout: t.union([t.number, t.undefined]),
        acceptedAt: t.union([t.string, t.undefined]),
        revokedAt: t.union([t.string, t.undefined]),
        migratingFrom: t.union([t.string, t.undefined]),
        accountUsesNewKeysets: t.boolean,
        passwordRules: t.string,
        iconSet: icons_1.IconSet
    })),
    InviteVault = t.readonly(t.type({
        acl: t.number,
        uuid: t.string
    })),
    InviteVaultList = t.readonly(t.type({
        shouldConfirm: t.boolean,
        vaults: t.array(InviteVault)
    })),
    lookUpInvitation = function(t, e, n) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(i) {
                return [2, t.get("/api/v1/invite/" + e + "/" + n).then(validator_1.unsafeDecodeAs(InvitationDetails))]
            })
        })
    };
exports.lookUpInvitation = lookUpInvitation;
var lookUpTeamInvitation = function(t, e) {
    return t.get("/api/v1/teaminvite/" + e)
};
exports.lookUpTeamInvitation = lookUpTeamInvitation;
var getPendingInvitations = function(t) {
    return t.get("/api/v1/invites")
};
exports.getPendingInvitations = getPendingInvitations;
var inviteViaSlack = function(t, e) {
    return t.post("/api/v1/invite/slack", e, {
        timeout: 6e4
    })
};
exports.inviteViaSlack = inviteViaSlack;
var inviteUsersViaEmail = function(t, e, n, i) {
    var o = i ? "?source=" + i : "";
    return t.post("/api/v1/invite" + o, {
        invites: e,
        type: n
    })
};
exports.inviteUsersViaEmail = inviteUsersViaEmail;
var teamInvitePerson = function(t, e) {
    return t.postUnencrypted("/api/v1/teaminvite", e).then(function() {})
};
exports.teamInvitePerson = teamInvitePerson;
var resendInvitations = function(t, e) {
    return t.get("/api/v1/invite/resend/" + e.join(","))
};
exports.resendInvitations = resendInvitations;
var revokeInvitations = function(t, e) {
    return t.delete("/api/v1/invite/" + e.join(",")).then(function() {})
};
exports.revokeInvitations = revokeInvitations;
var generateReplyToConfirmation = function(t, e) {
    return t.post("/api/v1/invite/replyto/begin", {
        email: e
    })
};
exports.generateReplyToConfirmation = generateReplyToConfirmation;
var completeReplyToConfirmation = function(t, e, n) {
    return t.post("/api/v1/invite/replyto/complete", {
        token: n,
        email: e
    })
};
exports.completeReplyToConfirmation = completeReplyToConfirmation;
var regenerateSignUpLink = function(t) {
    return t.put("/api/v1/account/teaminvite/regenerate")
};
exports.regenerateSignUpLink = regenerateSignUpLink;
var getPendingInviteVaults = function(t) {
    return t.get("/api/v1/invitevaults")
};
exports.getPendingInviteVaults = getPendingInviteVaults;