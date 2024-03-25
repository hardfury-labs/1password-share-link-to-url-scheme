var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(r) {
            for (var e, t = 1, n = arguments.length; t < n; t++)
                for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
            return r
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(r, e, t, n) {
        return new(t || (t = Promise))(function(o, a) {
            function i(r) {
                try {
                    s(n.next(r))
                } catch (r) {
                    a(r)
                }
            }

            function u(r) {
                try {
                    s(n.throw(r))
                } catch (r) {
                    a(r)
                }
            }

            function s(r) {
                var e;
                r.done ? o(r.value) : (e = r.value, e instanceof t ? e : new t(function(r) {
                    r(e)
                })).then(i, u)
            }
            s((n = n.apply(r, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(r, e) {
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
                        a = e.call(r, i)
                    } catch (r) {
                        a = [6, r], n = 0
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
    __read = this && this.__read || function(r, e) {
        var t = "function" == typeof Symbol && r[Symbol.iterator];
        if (!t) return r;
        var n, o, a = t.call(r),
            i = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (r) {
            o = {
                error: r
            }
        } finally {
            try {
                n && !n.done && (t = a.return) && t.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var r = [], e = 0; e < arguments.length; e++) r = r.concat(__read(arguments[e]));
        return r
    };
import {
    some,
    none,
    isSome
} from "fp-ts/es6/Option";
import {
    chunk,
    compact as _compact,
    endsWith,
    includes,
    last,
    reduce,
    startsWith
} from "lodash-es";
import moment from "moment";
import * as sjcl from "sjcl";
import {
    COUNTRY_ADDRESS_FORMATS
} from "./large_constants";
import {
    compareStrings
} from "./sort";
export var ACCOUNT_NAME_MAX_LENGTH = 60;
export var SERVICE_ACCOUNT_NAME_MAX_LENGTH = 64;
export var SERVICE_ACCOUNT_TOKEN_NAME_MAX_LENGTH = 64;
export var URL_MAX_LENGTH = 100;
export var DOMAIN_MAX_LENGTH = 32;
export var DOMAIN_MIN_LENGTH = 5;
export var SHORT_DOMAIN_MIN_LENGTH = 3;
export var DOMAIN_INVALID_CHARS = /\W|_/g;
export var VAULT_AND_GROUP_NAME_MAX_LENGTH = 60;
export var VAULT_AND_GROUP_DESC_MAX_LENGTH = 255;
export var UUID_LENGTH = 26;
export var DEBUG = !1;
export var stringify = function(r) {
    return JSON.stringify(r) || typeof r
};
export var compact = _compact;
export var compactFilter = function(r, e) {
    return r.filter(function(r) {
        return !!r && e(r)
    })
};
export var mapObject = function(r, e, t) {
    return reduce(t, function(t, n, o) {
        var a;
        return __assign(__assign({}, t), ((a = {})[r(n, o)] = e(n, o), a))
    }, {})
};
export var joinPath = function() {
    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
    return r.reduce(function(r, e) {
        return "string" != typeof e || 0 === e.length ? r : 0 === r.length ? e : endsWith(r, "/") && startsWith(e, "/") ? r + e.slice(1) : endsWith(r, "/") || startsWith(e, "/") ? r + e : r + "/" + e
    }, "")
};
export var moveArrayItem = function(r, e, t) {
    if (e < 0 || e >= r.length) throw new Error("moveArrayItem: currentIndex out of bounds");
    if (t < 0 || t >= r.length) throw new Error("moveArrayItem: newIndex out of bounds");
    return e === t ? r.slice() : r.map(function(n, o) {
        return o === t ? r[e] : e <= o && o < t ? r[o + 1] : t < o && o <= e ? r[o - 1] : n
    })
};
export var normalizeUTF8 = function(r) {
    return r ? r.trim().normalize("NFKD") : ""
};
export var prehash = function(r) {
    if (0 === r.length) return "";
    var e = sjcl.hash.sha256.hash(r);
    return sjcl.codec.base64url.fromBits(e).replace(/=+$/, "")
};
export var blobToBase64DataURI = function(r) {
    return new Promise(function(e, t) {
        var n = new FileReader;
        n.onloadend = function() {
            var r = n.result;
            if ("string" == typeof r) {
                var o = "data:attachment/file" + r.slice(r.search(/[,;]/));
                e(o)
            } else t(new Error("Invalid FileReader result."))
        }, n.readAsDataURL(r)
    })
};
export var concatUint8Arrays = function(r) {
    var e = r.reduce(function(r, e) {
            return r + e.byteLength
        }, 0),
        t = new Uint8Array(e);
    return r.reduce(function(r, e) {
        return t.set(e, r), r + e.byteLength
    }, 0), t
};
export var ep = function(r, e) {
    return r.trim().toLowerCase() + ":" + e
};
var hmacSha256 = function(r, e) {
    return new sjcl.misc.hmac(r, sjcl.hash.sha256).encrypt(e)
};
export var hmacSha256Hex = function(r, e) {
    var t = sjcl.codec.hex.toBits(r),
        n = sjcl.codec.hex.toBits(e),
        o = hmacSha256(t, n);
    return sjcl.codec.hex.fromBits(o)
};
export var deriveHmacSha256 = function(r, e) {
    var t = sjcl.codec.base64url.toBits(r),
        n = sjcl.codec.utf8String.toBits(e),
        o = hmacSha256(t, n);
    return new sjcl.misc.hmac(o, sjcl.hash.sha256)
};
export var hmacWithSecretAndData = function(r, e) {
    if (32 !== r.byteLength) throw new Error("Invalid secret length: " + r.byteLength);
    var t = sjcl.codec.bytes.toBits(r),
        n = sjcl.codec.utf8String.toBits(e),
        o = sjcl.codec.bytes.fromBits(hmacSha256(t, n));
    return new Uint8Array(o)
};
var bitsAsServerUuid = function(r) {
    return sjcl.codec.base32.fromBits(r, !0).slice(0, UUID_LENGTH)
};
export var bitsAsClientUuid = function(r) {
    return bitsAsServerUuid(r).toLowerCase()
};
export var bytesAsClientUuid = function(r) {
    return bitsAsClientUuid(sjcl.codec.bytes.toBits(r))
};
export var generateUUIDStyleHash = function(r) {
    return bitsAsServerUuid(sjcl.hash.sha256.hash(r.toLowerCase()))
};
export var isValidNumber = function(r) {
    return "number" == typeof r && !Number.isNaN(r)
};
export var isValidEmail = function(r) {
    if (!r) return !1;
    if (r.length < 6) return !1;
    if (r.length > 255) return !1;
    var e = r.trim().split("@"),
        t = e[1];
    return 2 === e.length && /^[\w'+-]([\w'+.-]*[\w'+-])?@\w([\w.-]*\w)?\.[A-Za-z]{2,20}$/.test(r) && void 0 !== t && isValidDomain(t)
};
export var isValidDomain = function(r) {
    return /^([\da-z]([\da-z-]*[\da-z])?\.)+[\da-z]{2,}$/i.test(r)
};
export var isValidInviteDomain = function(r) {
    var e = startsWith(r, "*.") ? r.slice(2) : r;
    return isValidDomain(e)
};
export var isValidServerToken = function(r) {
    return /^[2-7A-Z]{13}$/.test(r)
};
export var PROMO_CODE_MAX_LENGTH = 20;
export var isValidPromoCodeFormat = function(r) {
    return /^[\dA-Z]{1,11}(-[\dA-Z]{8})?$/.test(r)
};
export var isValidPurchaseOrderTokenFormat = function(r) {
    return /^[\dA-Z]{26}$/.test(r)
};
var validSignupSources = ["B", "I", "A", "W", "M", "C", "P", "T"];
export var isValidSignupSource = function(r) {
    return includes(validSignupSources, r)
};
export var isNonWebSignupSource = function(r) {
    return "B" !== r && "O" !== r && "T" !== r
};
export var isValidSignupVerificationCode = function(r) {
    return /^\d{6}$/.test(r)
};
export var wait = function(r) {
    return new Promise(function(e) {
        setTimeout(e, r)
    })
};
export var getCallbackPromise = function() {
    var r, e, t = none,
        n = none,
        o = function() {
            return isSome(t) ? "Promise was already resolved" : isSome(n) ? "Promise was already rejected" : void 0
        },
        a = new Promise(function(a, i) {
            r = function(r) {
                var e = o();
                return e || (t = some(r), a(r)), e
            }, e = function(r) {
                var e = o();
                return e || (n = some(r), i(r)), e
            }
        });
    if (!r || !e) throw new Error("CallbackPromise functions were not initialized");
    return {
        resolve: r,
        reject: e,
        promise: a
    }
};
export var batchChain = function(r, e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, chunk(t, e).reduce(function(e, t) {
                return e.then(function(e) {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var n;
                        return __generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, r(t)];
                                case 1:
                                    return n = o.sent(), [2, __spread(e, n)]
                            }
                        })
                    })
                })
            }, Promise.resolve([]))]
        })
    })
};
export var batchPromiseAll = function(r, e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, batchChain(function(e) {
                return Promise.all(e.map(r))
            }, e, t)]
        })
    })
};
export var chainPromises = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, o, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    t = [], n = 0, i.label = 1;
                case 1:
                    return n < e ? (a = (o = t).push, [4, r()]) : [3, 4];
                case 2:
                    a.apply(o, [i.sent()]), i.label = 3;
                case 3:
                    return n++, [3, 1];
                case 4:
                    return [2, t]
            }
        })
    })
};
export var commaSeparatedListToArray = function(r) {
    return r ? r.split(",").map(function(r) {
        return r.trim()
    }).filter(function(r) {
        return "" !== r
    }) : []
};
export var formatCommaSeparatedList = function(r, e) {
    if (!r) return "";
    var t = e ? ", " : ",";
    return commaSeparatedListToArray(r).join(t)
};
export var clean = function(r) {
    return r.toLowerCase().replace(/\s/g, "")
};
export var getTime = function(r) {
    return r instanceof Date ? r.valueOf() : "string" == typeof r ? moment(r).valueOf() : 0
};
export var getAddressConfigForCountryCode = function(r) {
    return r || (r = "Default"), COUNTRY_ADDRESS_FORMATS[r.toLowerCase()] || COUNTRY_ADDRESS_FORMATS.Default
};
export var getAllCountryCodes = function() {
    return Object.keys(COUNTRY_ADDRESS_FORMATS).slice(1)
};
export var getCountryNameForCode = function(r) {
    return getAddressConfigForCountryCode(r).COUNTRY
};
export var COUNTRIES_SORTED_BY_NAME = getAllCountryCodes().filter(function(r) {
    return "uk" !== r
}).map(function(r) {
    return {
        code: r,
        name: getCountryNameForCode(r).replace("The ", "")
    }
}).sort(function(r, e) {
    var t = r.name,
        n = e.name;
    return compareStrings(t, n)
});
var exportComplianceExclusions = ["cu", "ir", "kp", "sy"];
export var BILLING_COUNTRIES_SORTED_BY_NAME = COUNTRIES_SORTED_BY_NAME.filter(function(r) {
    return !1 === includes(exportComplianceExclusions, r.code)
});
export var getModifierKey = function() {
    return navigator.userAgent.includes("Mac OS X") ? "⌘" : "ctrl"
};
export var getFileExtension = function(r) {
    var e, t;
    return r && r.includes(".") && null !== (t = null === (e = last(r.split("."))) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== t ? t : ""
};
export var getSanitizedName = function(r) {
    return r ? r.replace(/["%;<>[\\\]{}]/g, "").replace(/\/{2,}/g, "/") : ""
};
export var readFile = function(r) {
    return new Promise(function(e, t) {
        var n = new FileReader;
        n.addEventListener("load", function() {
            n.result && "object" == typeof n.result && "byteLength" in n.result ? (console.log("Read file (%d bytes)", n.result.byteLength), e(n.result)) : t(new Error("Invalid FileReader result."))
        }), n.addEventListener("error", function() {
            t(n.error)
        }), n.readAsArrayBuffer(r)
    })
};
export var asValidDomain = function(r) {
    var e = r.trim().toLowerCase().replace(/^https:\/\//, "").replace(/\.1password\.com(.*)/, "").replace(/\s+/g, "-").replace(/[^\da-z-]/g, "").replace(/-+/g, "-");
    return e.length > DOMAIN_MAX_LENGTH && (e = e.slice(0, DOMAIN_MAX_LENGTH)), e
};
export var asValidAccountName = function(r) {
    return getSanitizedName(r).slice(0, ACCOUNT_NAME_MAX_LENGTH)
};
export var filterCharacters = function(r, e) {
    if (!r) return "";
    if (!e) return r;
    var t = new RegExp("[^" + e + "]", "g");
    return r.replace(t, "")
};
var URL_PROTOCOL_REGEX = /[\d+.A-Za-z-]+/;
export var addProtocolToUrlIfNeeded = function(r) {
    return new RegExp("^" + URL_PROTOCOL_REGEX.source + ":").test(r) ? r : "https://" + r
};
export var getServerDomainFromAccountDomain = function(r) {
    if (!r) return "";
    var e = r.split(".");
    return !e || e.length < 2 ? "" : e.slice(1).join(".")
};
export var usTerritories = ["as", "gu", "mh", "mp", "fm", "pw", "pr", "vi"];
export var getCountryCodeFromDomain = function(r) {
    if (!r) return "us";
    var e = r.split(".");
    if (!e || e.length < 2) return "us";
    var t = e[e.length - 1];
    if (void 0 !== t && includes(t, ":")) {
        var n = __read(t.split(":"), 1)[0];
        void 0 !== n && (t = n)
    }
    return "com" === t ? "us" : t
};
export var inBetween = function(r, e, t) {
    return r > e && r <= t
};