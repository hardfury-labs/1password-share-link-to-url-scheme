var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, s) {
            function i(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(i, a)
            }
            u((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, o, s, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(s) {
            return function(a) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                        switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                            case 0:
                            case 1:
                                o = s;
                                break;
                            case 4:
                                return i.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                    i.label = s[1];
                                    break
                                }
                                if (6 === s[0] && i.label < o[1]) {
                                    i.label = o[1], o = s;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(s);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        s = e.call(t, i)
                    } catch (t) {
                        s = [6, t], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, a])
            }
        }
    };
import * as t from "io-ts";
import {
    fromStringEnum,
    unsafeDecodeAs,
    withDefault,
    reportError,
    ExceptionType
} from "../util";
import * as util from "../util";
import {
    MFAType
} from "./mfa";
export var AuthParams = t.type({
    method: t.string,
    alg: t.string,
    iterations: t.number,
    salt: t.string
});
export var StartAuthResponse = t.intersection([t.type({
    status: t.string
}), t.partial({
    sessionID: t.string,
    accountKeyFormat: t.string,
    accountKeyUuid: t.string,
    userAuth: AuthParams,
    newDomain: t.string,
    newHost: t.string,
    newEmail: t.string
})]);
export var startAuth = function(t, e) {
    var r = {
        headers: {
            "X-AgileBits-Client": util.config.clientDescriptor
        }
    };
    return t.post("/api/v3/auth/start", e, r).then(function(t) {
        if (!t) throw new Error("Server response is empty");
        return unsafeDecodeAs(StartAuthResponse)(t)
    })
};
export var SRPResponse = t.type({
    sessionID: t.string,
    userB: t.string
});
export var postAuth = function(t, e, r) {
    return t.post("/api/v1/auth", {
        sessionID: e,
        userA: r
    }).then(function(t) {
        if (!t) throw new Error("Server response is empty");
        return unsafeDecodeAs(SRPResponse)(t)
    })
};
export var DSecretResponse = t.type({
    enabled: t.boolean
});
export var DSecretProxyResponse = t.type({
    enabled: t.boolean
});
export var TOTPResponse = t.type({
    enabled: t.boolean,
    digits: t.number
});
export var DuoResponse = t.intersection([t.type({
    enabled: t.boolean,
    host: t.string,
    sigRequest: t.string
}), t.partial({
    authURL: t.string
})], "DuoResponse");
export var WebAuthnResponse = t.type({
    enabled: t.boolean,
    keyHandles: t.array(t.string),
    challenge: t.string
});
export var MustEnableResponse = t.intersection([t.type({
    enabled: t.boolean,
    availableTypes: withDefault(t.array(fromStringEnum(MFAType, "MFAType")), [])
}), t.partial({
    webAuthnChallenge: t.string
})]);
export var CodeResponse = t.readonly(t.type({
    enabled: t.boolean,
    digits: withDefault(t.number, 0),
    methods: t.array(t.string)
}));
export var MFAResponse = t.partial({
    dsecret: DSecretResponse,
    dsecretProxy: DSecretProxyResponse,
    totp: TOTPResponse,
    duo: DuoResponse,
    webAuthn: WebAuthnResponse,
    mustEnable: MustEnableResponse,
    code: CodeResponse
});
export var VerifyAuthResponse = t.intersection([t.type({
    notifier: t.string
}), t.partial({
    accountUuid: t.string,
    userUuid: t.string,
    serverVerifyHash: t.string,
    mfa: MFAResponse
})]);
export var verifyAuth = function(t, e) {
    return t.post("/api/v2/auth/verify", e).then(function(t) {
        if (!t) throw new Error("Server response is empty");
        try {
            return unsafeDecodeAs(VerifyAuthResponse)(t)
        } catch (e) {
            return reportError(ExceptionType.ValidationError, [{
                file: "web-api/api/auth.ts",
                method: "verifyAuth"
            }]), t
        }
    })
};
export var VerifyMFAResponse = t.partial({
    dsecret: t.string
});
export var verifyMFA = function(t, e) {
    return t.post("/api/v1/auth/mfa", e).then(function(t) {
        if (!t) throw new Error("Server response is empty");
        return unsafeDecodeAs(VerifyMFAResponse)(t)
    })
};
export var enableMFAWithAuth = function(t, e) {
    return t.post("/api/v1/auth/mfa/enable", e).then(function(t) {
        if (!t) throw new Error("Server response is empty");
        return unsafeDecodeAs(VerifyMFAResponse)(t)
    })
};
export var submitNewUserAuth = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.post("/api/v1/user/auth", e).then(function() {})]
        })
    })
};
export var extendSession = function(t) {
    return t.put("/api/v1/session/touch").then(function() {})
};
export var signOut = function(t) {
    return t.put("/api/v1/session/signout").then(function() {})
};