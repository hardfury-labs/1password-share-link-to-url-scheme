var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(i, a) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function y(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var r;
                e.done ? i(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, y)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, i, a, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: y(0),
            throw: y(1),
            return: y(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function y(a) {
            return function(y) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < i[1]) {
                                    o.label = i[1], i = a;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(a);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = r.call(e, o)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, y])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, i, a = t.call(e),
            o = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = a.next()).done;) o.push(n.value)
        } catch (e) {
            i = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (i) throw i.error
            }
        }
        return o
    };
import * as t from "io-ts";
import {
    generateUUID
} from "../../util";
import {
    decodeBytes,
    json2ab
} from "../../util/codec";
import {
    JwkEcPriKey,
    JwkRsaPriKey
} from "../../util/crypto";
import {
    generateJwkPair as generateEcKeyPair
} from "../ecdsa";
import {
    generateKeyPair as generateRsaKeyPair
} from "../rsa";
import {
    decrypt,
    encrypt
} from "./encryption";
export var KeysetEncKeyData = t.readonly(t.type({
    ePriKey: JwkRsaPriKey,
    sPriKey: JwkEcPriKey
}), "KeysetEncKeyData");
export var Keyset;
! function(e) {
    var r = this;
    e.fromClassicKeyset = function(e) {
        var r, t, n, i;
        if (!e.ekeyPair.priKey.jwk || !e.ekeyPair.pubKey.jwk) throw new Error("Missing encryption key pair");
        if (!(null === (t = null === (r = e.skeyPair) || void 0 === r ? void 0 : r.priKey) || void 0 === t ? void 0 : t.jwk) || !(null === (i = null === (n = e.skeyPair) || void 0 === n ? void 0 : n.pubKey) || void 0 === i ? void 0 : i.jwk)) throw new Error("Missing signing key pair");
        return {
            uuid: e.uuid,
            sn: e.sn,
            spec: 2,
            encryptionKeyPair: {
                priKey: e.ekeyPair.priKey.jwk,
                pubKey: e.ekeyPair.pubKey.jwk
            },
            signingKeyPair: {
                priKey: e.skeyPair.priKey.jwk,
                pubKey: e.skeyPair.pubKey.jwk
            }
        }
    }, e.generate = function() {
        return __awaiter(r, void 0, void 0, function() {
            var e, r, t, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return e = generateUUID(), [4, Promise.all([generateRsaKeyPair(e), generateEcKeyPair(e)])];
                    case 1:
                        return r = __read.apply(void 0, [i.sent(), 2]), t = r[0], n = r[1], [2, {
                            uuid: e,
                            sn: 0,
                            spec: 2,
                            encryptionKeyPair: t,
                            signingKeyPair: n
                        }]
                }
            })
        })
    }, e.encryptKeyset = function(e, t) {
        return __awaiter(r, void 0, void 0, function() {
            var r, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return r = {
                            ePriKey: t.encryptionKeyPair.priKey,
                            sPriKey: t.signingKeyPair.priKey
                        }, [4, encrypt(e, json2ab(r))];
                    case 1:
                        return n = i.sent(), [2, {
                            uuid: t.uuid,
                            sn: t.sn,
                            spec: 2,
                            ePubKey: t.encryptionKeyPair.pubKey,
                            sPubKey: t.signingKeyPair.pubKey,
                            encKeyData: n
                        }]
                }
            })
        })
    }, e.decryptKeyset = function(e, t) {
        return __awaiter(r, void 0, void 0, function() {
            var r, n, i, a, o, y, u, s, c, p;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return r = t.uuid, n = t.sn, i = t.spec, a = t.ePubKey, o = t.sPubKey, y = t.encKeyData, [4, decrypt(e, y)];
                    case 1:
                        return u = l.sent(), s = decodeBytes(u.content, KeysetEncKeyData), c = s.ePriKey, p = s.sPriKey, [2, {
                            uuid: r,
                            sn: n,
                            spec: i,
                            encryptionKeyPair: {
                                priKey: c,
                                pubKey: a
                            },
                            signingKeyPair: {
                                priKey: p,
                                pubKey: o
                            }
                        }]
                }
            })
        })
    }
}(Keyset || (Keyset = {}));