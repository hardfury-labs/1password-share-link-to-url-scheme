var __awaiter = this && this.__awaiter || function(t, n, e, i) {
        return new(e || (e = Promise))(function(r, o) {
            function a(t) {
                try {
                    s(i.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    s(i.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                var n;
                t.done ? r(t.value) : (n = t.value, n instanceof e ? n : new e(function(t) {
                    t(n)
                })).then(a, u)
            }
            s((i = i.apply(t, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, n) {
        var e, i, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (e = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                        switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1], r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = n.call(t, a)
                    } catch (t) {
                        o = [6, t], i = 0
                    } finally {
                        e = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util/validator";
import {
    IconSet
} from "./icons";
var InvitationDetails = t.readonly(t.type({
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
        iconSet: IconSet
    })),
    InviteVault = t.readonly(t.type({
        acl: t.number,
        uuid: t.string
    })),
    InviteVaultList = t.readonly(t.type({
        shouldConfirm: t.boolean,
        vaults: t.array(InviteVault)
    }));
export var lookUpInvitation = function(t, n, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(i) {
            return [2, t.get("/api/v1/invite/" + n + "/" + e).then(unsafeDecodeAs(InvitationDetails))]
        })
    })
};
export var lookUpTeamInvitation = function(t, n) {
    return t.get("/api/v1/teaminvite/" + n)
};
export var getPendingInvitations = function(t) {
    return t.get("/api/v1/invites")
};
export var inviteViaSlack = function(t, n) {
    return t.post("/api/v1/invite/slack", n, {
        timeout: 6e4
    })
};
export var inviteUsersViaEmail = function(t, n, e, i) {
    var r = i ? "?source=" + i : "";
    return t.post("/api/v1/invite" + r, {
        invites: n,
        type: e
    })
};
export var teamInvitePerson = function(t, n) {
    return t.postUnencrypted("/api/v1/teaminvite", n).then(function() {})
};
export var resendInvitations = function(t, n) {
    return t.get("/api/v1/invite/resend/" + n.join(","))
};
export var revokeInvitations = function(t, n) {
    return t.delete("/api/v1/invite/" + n.join(",")).then(function() {})
};
export var generateReplyToConfirmation = function(t, n) {
    return t.post("/api/v1/invite/replyto/begin", {
        email: n
    })
};
export var completeReplyToConfirmation = function(t, n, e) {
    return t.post("/api/v1/invite/replyto/complete", {
        token: e,
        email: n
    })
};
export var regenerateSignUpLink = function(t) {
    return t.put("/api/v1/account/teaminvite/regenerate")
};
export var getPendingInviteVaults = function(t) {
    return t.get("/api/v1/invitevaults")
};