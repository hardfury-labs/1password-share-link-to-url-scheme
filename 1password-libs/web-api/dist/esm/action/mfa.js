var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, s)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, i, o = {
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
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
                        i = t.call(e, o)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = a = 0
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
import * as sjcl from "sjcl";
import * as api from "../api";
import {
    EMAIL_KEY_HANDLE,
    MFAType,
    TOTP_KEY_HANDLE
} from "../api/mfa";
import {
    dateFromAPI
} from "../parser/date";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/mfa",
    makePromise = mp(codeLocation);
export {
    EMAIL_KEY_HANDLE,
    MFAType,
    TOTP_KEY_HANDLE
};
export var enableMFA = function(e, t) {
    return makePromise("enableMFA", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, api.enableMFA(e.session, t)];
                    case 1:
                        return r = n.sent(), e.user && (r && r.dsecret && (e.user.dSecret = r.dsecret), e.user.hasMFAEnabled = !0), [2, null !== r && void 0 !== r ? r : void 0]
                }
            })
        })
    })
};
export var disableMFA = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.disableMFA(e.session, t)];
                case 1:
                    return n.sent(), e.user && (e.user.dSecret = void 0, e.user.hasMFAEnabled = !1), [3, 3];
                case 2:
                    throw r = n.sent(), console.error("disableMFA failed: " + r), r;
                case 3:
                    return [2]
            }
        })
    })
};
export var sendMFACode = function(e, t) {
    return makePromise("sendMFACode", function() {
        return api.sendMFACode(e.session, t)
    })
};
export var getMFA = function(e) {
    return makePromise("getMFA", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, api.getMFA(e.session)];
                    case 1:
                        return [2, t.sent().map(function(e) {
                            return __assign(__assign({}, e), {
                                createdAt: dateFromAPI(e.createdAt),
                                updatedAt: dateFromAPI(e.updatedAt)
                            })
                        })]
                }
            })
        })
    })
};
export var getMFAConfig = function(e) {
    return makePromise("getMFAConfig", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, api.getMFAConfig(e.session)]
            })
        })
    })
};
export var verifyTotp = function(e, t) {
    return makePromise("verifyTotp", function() {
        return api.verifyTotp(e.session, t)
    })
};
export var generateDSecretHmac = function(e, t) {
    var r = new sjcl.misc.hmac(sjcl.codec.base64url.toBits(e), sjcl.hash.sha256).encrypt(sjcl.codec.base32.toBits(t));
    return sjcl.codec.base64url.fromBits(r).slice(0, 8)
};
export var makeWebAuthnCredential = function(e, t, r, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var a, i, o, s, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    if (!navigator.credentials || !navigator.credentials.create) throw new Error("Browser does not support WebAuthn.");
                    if (!e.user) throw new Error("Missing user");
                    return a = r.map(function(e) {
                        return {
                            type: "public-key",
                            id: util.base64urlToBytes(e)
                        }
                    }), [4, navigator.credentials.create({
                        publicKey: {
                            challenge: util.base64urlToBytes(n),
                            rp: {
                                id: e.config.server.split(":")[0],
                                name: "1Password"
                            },
                            user: {
                                id: util.str2ab(e.user.uuid),
                                name: e.user.email,
                                displayName: e.user.name
                            },
                            pubKeyCredParams: [{
                                type: "public-key",
                                alg: -7
                            }],
                            timeout: 6e4,
                            attestation: "none",
                            authenticatorSelection: {
                                authenticatorAttachment: "cross-platform",
                                userVerification: "discouraged"
                            },
                            excludeCredentials: a
                        }
                    })];
                case 1:
                    if (!(i = c.sent())) throw new Error("Credential is missing.");
                    return o = i.response, s = o.attestationObject, u = o.clientDataJSON, [2, {
                        type: MFAType.WebAuthn,
                        keyHandle: i.id,
                        keyValue: util.bytesToBase64url(new Uint8Array(s)),
                        keyName: t,
                        webAuthnClientData: util.bytesToBase64url(new Uint8Array(u))
                    }]
            }
        })
    })
};
export var getWebAuthnAssertion = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var n, a, i, o, s, u;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    if (!navigator.credentials || !navigator.credentials.get) throw Error;
                    if (0 === (n = t.map(function(e) {
                            return {
                                type: "public-key",
                                id: util.base64urlToBytes(e)
                            }
                        })).length) throw Error;
                    return [4, navigator.credentials.get({
                        publicKey: {
                            challenge: util.base64urlToBytes(r),
                            rpId: e.config.server.split(":")[0],
                            allowCredentials: n,
                            userVerification: "discouraged",
                            timeout: 6e4
                        }
                    })];
                case 1:
                    if (!(a = c.sent())) throw Error;
                    return i = a.response, o = i.signature, s = i.authenticatorData, u = i.clientDataJSON, [2, {
                        keyHandle: a.id,
                        signature: util.bytesToBase64url(new Uint8Array(o)),
                        authData: util.bytesToBase64url(new Uint8Array(s)),
                        clientData: util.bytesToBase64url(new Uint8Array(u))
                    }]
            }
        })
    })
};
export var browserSupportsWebAuthn = function() {
    return !!(navigator.credentials && navigator.credentials.get && navigator.credentials.create && window.PublicKeyCredential)
};