var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(i, o) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, s)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = r.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    };
import {
    supportRequestSignedPayloadValidator
} from "@1password/contact-service-types";
import {
    sign,
    verify
} from "../model/crypto_v2";
import {
    ab2str,
    base64urlToBytes,
    json2ab
} from "../util/codec";
import {
    ClientError
} from "../util/errors";
import {
    getBackofficeSigningKeysetForUser
} from "./backoffice";
export var createSignedSupportRequest = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            if (!e.user) throw new Error("Missing user.");
            if (!e.account) throw new Error("Missing account.");
            if (!e.config.env) throw new Error("Missing env.");
            return t = __assign(__assign({}, r), {
                userUuid: e.user.uuid,
                email: e.user.email,
                name: e.user.name,
                env: e.config.env,
                accountUuid: e.account.uuid,
                timestamp: (new Date).toISOString()
            }), [2, signSupportRequest(e, t)]
        })
    })
};
var signSupportRequest = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n;
            return __generator(this, function(i) {
                if (!e.user) throw new Error("Missing user.");
                if (!e.user.activeKeyset) throw new Error("User does not have active keyset.");
                if (!e.user.activeKeyset.hasSigningKeys || !(null === (n = null === (t = e.user.activeKeyset.skeyPair) || void 0 === t ? void 0 : t.priKey) || void 0 === n ? void 0 : n.jwk)) throw new Error("User does not have signing keys.");
                return [2, sign(e.user.activeKeyset.skeyPair.priKey.jwk, json2ab(r))]
            })
        })
    },
    parseSupportRequest = function(e) {
        return supportRequestSignedPayloadValidator.runWithException(JSON.parse(ab2str(base64urlToBytes(e.payload))))
    };
export var parseAndVerifySupportRequest = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return t = parseSupportRequest(r), [4, getBackofficeSigningKeysetForUser(e, t.userUuid)];
                case 1:
                    return n = i.sent(), [4, verify(n.spubKey, r)];
                case 2:
                    if (!i.sent().isValid) throw new ClientError(114, "Failed to verify signature.");
                    return [2, t]
            }
        })
    })
};
export var getEnvFromSupportRequest = function(e) {
    try {
        return parseSupportRequest(e).env || ""
    } catch (e) {
        return ""
    }
};