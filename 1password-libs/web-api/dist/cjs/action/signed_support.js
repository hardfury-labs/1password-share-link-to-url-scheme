"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function s(e) {
                try {
                    a(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    a(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(s, u)
            }
            a((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = r.call(e, s)
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
                }([i, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getEnvFromSupportRequest = exports.parseAndVerifySupportRequest = exports.createSignedSupportRequest = void 0;
var contact_service_types_1 = require("@1password/contact-service-types"),
    crypto_v2_1 = require("../model/crypto_v2"),
    codec_1 = require("../util/codec"),
    errors_1 = require("../util/errors"),
    backoffice_1 = require("./backoffice"),
    createSignedSupportRequest = function(e, r) {
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
exports.createSignedSupportRequest = createSignedSupportRequest;
var signSupportRequest = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n;
            return __generator(this, function(o) {
                if (!e.user) throw new Error("Missing user.");
                if (!e.user.activeKeyset) throw new Error("User does not have active keyset.");
                if (!e.user.activeKeyset.hasSigningKeys || !(null === (n = null === (t = e.user.activeKeyset.skeyPair) || void 0 === t ? void 0 : t.priKey) || void 0 === n ? void 0 : n.jwk)) throw new Error("User does not have signing keys.");
                return [2, crypto_v2_1.sign(e.user.activeKeyset.skeyPair.priKey.jwk, codec_1.json2ab(r))]
            })
        })
    },
    parseSupportRequest = function(e) {
        return contact_service_types_1.supportRequestSignedPayloadValidator.runWithException(JSON.parse(codec_1.ab2str(codec_1.base64urlToBytes(e.payload))))
    },
    parseAndVerifySupportRequest = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, n;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return t = parseSupportRequest(r), [4, backoffice_1.getBackofficeSigningKeysetForUser(e, t.userUuid)];
                    case 1:
                        return n = o.sent(), [4, crypto_v2_1.verify(n.spubKey, r)];
                    case 2:
                        if (!o.sent().isValid) throw new errors_1.ClientError(114, "Failed to verify signature.");
                        return [2, t]
                }
            })
        })
    };
exports.parseAndVerifySupportRequest = parseAndVerifySupportRequest;
var getEnvFromSupportRequest = function(e) {
    try {
        return parseSupportRequest(e).env || ""
    } catch (e) {
        return ""
    }
};
exports.getEnvFromSupportRequest = getEnvFromSupportRequest;