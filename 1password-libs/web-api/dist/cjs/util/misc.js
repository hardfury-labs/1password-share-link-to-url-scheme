"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, o = arguments.length; t < o; t++)
                for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(n, i) {
            function a(e) {
                try {
                    u(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    u(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(a, s)
            }
            u((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, n, i, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
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
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                        switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < n[1]) {
                                    a.label = n[1], n = i;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(i);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = r.call(e, a)
                    } catch (e) {
                        i = [6, e], o = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, n, i = t.call(e),
            a = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = i.next()).done;) a.push(o.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = i.return) && t.call(i)
            } finally {
                if (n) throw n.error
            }
        }
        return a
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    },
    __importDefault = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAddressConfigForCountryCode = exports.getTime = exports.clean = exports.formatCommaSeparatedList = exports.commaSeparatedListToArray = exports.chainPromises = exports.batchPromiseAll = exports.batchChain = exports.getCallbackPromise = exports.wait = exports.isValidSignupVerificationCode = exports.isNonWebSignupSource = exports.isValidSignupSource = exports.isValidPurchaseOrderTokenFormat = exports.isValidPromoCodeFormat = exports.PROMO_CODE_MAX_LENGTH = exports.isValidServerToken = exports.isValidInviteDomain = exports.isValidDomain = exports.isValidEmail = exports.isValidNumber = exports.generateUUIDStyleHash = exports.bytesAsClientUuid = exports.bitsAsClientUuid = exports.hmacWithSecretAndData = exports.deriveHmacSha256 = exports.hmacSha256Hex = exports.ep = exports.concatUint8Arrays = exports.blobToBase64DataURI = exports.prehash = exports.normalizeUTF8 = exports.moveArrayItem = exports.joinPath = exports.mapObject = exports.compactFilter = exports.compact = exports.stringify = exports.DEBUG = exports.UUID_LENGTH = exports.VAULT_AND_GROUP_DESC_MAX_LENGTH = exports.VAULT_AND_GROUP_NAME_MAX_LENGTH = exports.DOMAIN_INVALID_CHARS = exports.SHORT_DOMAIN_MIN_LENGTH = exports.DOMAIN_MIN_LENGTH = exports.DOMAIN_MAX_LENGTH = exports.URL_MAX_LENGTH = exports.SERVICE_ACCOUNT_TOKEN_NAME_MAX_LENGTH = exports.SERVICE_ACCOUNT_NAME_MAX_LENGTH = exports.ACCOUNT_NAME_MAX_LENGTH = void 0, exports.inBetween = exports.getCountryCodeFromDomain = exports.usTerritories = exports.getServerDomainFromAccountDomain = exports.addProtocolToUrlIfNeeded = exports.filterCharacters = exports.asValidAccountName = exports.asValidDomain = exports.readFile = exports.getSanitizedName = exports.getFileExtension = exports.getModifierKey = exports.BILLING_COUNTRIES_SORTED_BY_NAME = exports.COUNTRIES_SORTED_BY_NAME = exports.getCountryNameForCode = exports.getAllCountryCodes = void 0;
var Option_1 = require("fp-ts/es6/Option"),
    lodash_es_1 = require("lodash-es"),
    moment_1 = __importDefault(require("moment")),
    sjcl = __importStar(require("sjcl")),
    large_constants_1 = require("./large_constants"),
    sort_1 = require("./sort");
exports.ACCOUNT_NAME_MAX_LENGTH = 60, exports.SERVICE_ACCOUNT_NAME_MAX_LENGTH = 64, exports.SERVICE_ACCOUNT_TOKEN_NAME_MAX_LENGTH = 64, exports.URL_MAX_LENGTH = 100, exports.DOMAIN_MAX_LENGTH = 32, exports.DOMAIN_MIN_LENGTH = 5, exports.SHORT_DOMAIN_MIN_LENGTH = 3, exports.DOMAIN_INVALID_CHARS = /\W|_/g, exports.VAULT_AND_GROUP_NAME_MAX_LENGTH = 60, exports.VAULT_AND_GROUP_DESC_MAX_LENGTH = 255, exports.UUID_LENGTH = 26, exports.DEBUG = !1;
var stringify = function(e) {
    return JSON.stringify(e) || typeof e
};
exports.stringify = stringify, exports.compact = lodash_es_1.compact;
var compactFilter = function(e, r) {
    return e.filter(function(e) {
        return !!e && r(e)
    })
};
exports.compactFilter = compactFilter;
var mapObject = function(e, r, t) {
    return lodash_es_1.reduce(t, function(t, o, n) {
        var i;
        return __assign(__assign({}, t), ((i = {})[e(o, n)] = r(o, n), i))
    }, {})
};
exports.mapObject = mapObject;
var joinPath = function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return e.reduce(function(e, r) {
        return "string" != typeof r || 0 === r.length ? e : 0 === e.length ? r : lodash_es_1.endsWith(e, "/") && lodash_es_1.startsWith(r, "/") ? e + r.slice(1) : lodash_es_1.endsWith(e, "/") || lodash_es_1.startsWith(r, "/") ? e + r : e + "/" + r
    }, "")
};
exports.joinPath = joinPath;
var moveArrayItem = function(e, r, t) {
    if (r < 0 || r >= e.length) throw new Error("moveArrayItem: currentIndex out of bounds");
    if (t < 0 || t >= e.length) throw new Error("moveArrayItem: newIndex out of bounds");
    return r === t ? e.slice() : e.map(function(o, n) {
        return n === t ? e[r] : r <= n && n < t ? e[n + 1] : t < n && n <= r ? e[n - 1] : o
    })
};
exports.moveArrayItem = moveArrayItem;
var normalizeUTF8 = function(e) {
    return e ? e.trim().normalize("NFKD") : ""
};
exports.normalizeUTF8 = normalizeUTF8;
var prehash = function(e) {
    if (0 === e.length) return "";
    var r = sjcl.hash.sha256.hash(e);
    return sjcl.codec.base64url.fromBits(r).replace(/=+$/, "")
};
exports.prehash = prehash;
var blobToBase64DataURI = function(e) {
    return new Promise(function(r, t) {
        var o = new FileReader;
        o.onloadend = function() {
            var e = o.result;
            if ("string" == typeof e) {
                var n = "data:attachment/file" + e.slice(e.search(/[,;]/));
                r(n)
            } else t(new Error("Invalid FileReader result."))
        }, o.readAsDataURL(e)
    })
};
exports.blobToBase64DataURI = blobToBase64DataURI;
var concatUint8Arrays = function(e) {
    var r = e.reduce(function(e, r) {
            return e + r.byteLength
        }, 0),
        t = new Uint8Array(r);
    return e.reduce(function(e, r) {
        return t.set(r, e), e + r.byteLength
    }, 0), t
};
exports.concatUint8Arrays = concatUint8Arrays;
var ep = function(e, r) {
    return e.trim().toLowerCase() + ":" + r
};
exports.ep = ep;
var hmacSha256 = function(e, r) {
        return new sjcl.misc.hmac(e, sjcl.hash.sha256).encrypt(r)
    },
    hmacSha256Hex = function(e, r) {
        var t = sjcl.codec.hex.toBits(e),
            o = sjcl.codec.hex.toBits(r),
            n = hmacSha256(t, o);
        return sjcl.codec.hex.fromBits(n)
    };
exports.hmacSha256Hex = hmacSha256Hex;
var deriveHmacSha256 = function(e, r) {
    var t = sjcl.codec.base64url.toBits(e),
        o = sjcl.codec.utf8String.toBits(r),
        n = hmacSha256(t, o);
    return new sjcl.misc.hmac(n, sjcl.hash.sha256)
};
exports.deriveHmacSha256 = deriveHmacSha256;
var hmacWithSecretAndData = function(e, r) {
    if (32 !== e.byteLength) throw new Error("Invalid secret length: " + e.byteLength);
    var t = sjcl.codec.bytes.toBits(e),
        o = sjcl.codec.utf8String.toBits(r),
        n = sjcl.codec.bytes.fromBits(hmacSha256(t, o));
    return new Uint8Array(n)
};
exports.hmacWithSecretAndData = hmacWithSecretAndData;
var bitsAsServerUuid = function(e) {
        return sjcl.codec.base32.fromBits(e, !0).slice(0, exports.UUID_LENGTH)
    },
    bitsAsClientUuid = function(e) {
        return bitsAsServerUuid(e).toLowerCase()
    };
exports.bitsAsClientUuid = bitsAsClientUuid;
var bytesAsClientUuid = function(e) {
    return exports.bitsAsClientUuid(sjcl.codec.bytes.toBits(e))
};
exports.bytesAsClientUuid = bytesAsClientUuid;
var generateUUIDStyleHash = function(e) {
    return bitsAsServerUuid(sjcl.hash.sha256.hash(e.toLowerCase()))
};
exports.generateUUIDStyleHash = generateUUIDStyleHash;
var isValidNumber = function(e) {
    return "number" == typeof e && !Number.isNaN(e)
};
exports.isValidNumber = isValidNumber;
var isValidEmail = function(e) {
    if (!e) return !1;
    if (e.length < 6) return !1;
    if (e.length > 255) return !1;
    var r = e.trim().split("@"),
        t = r[1];
    return 2 === r.length && /^[\w'+-]([\w'+.-]*[\w'+-])?@\w([\w.-]*\w)?\.[A-Za-z]{2,20}$/.test(e) && void 0 !== t && exports.isValidDomain(t)
};
exports.isValidEmail = isValidEmail;
var isValidDomain = function(e) {
    return /^([\da-z]([\da-z-]*[\da-z])?\.)+[\da-z]{2,}$/i.test(e)
};
exports.isValidDomain = isValidDomain;
var isValidInviteDomain = function(e) {
    var r = lodash_es_1.startsWith(e, "*.") ? e.slice(2) : e;
    return exports.isValidDomain(r)
};
exports.isValidInviteDomain = isValidInviteDomain;
var isValidServerToken = function(e) {
    return /^[2-7A-Z]{13}$/.test(e)
};
exports.isValidServerToken = isValidServerToken, exports.PROMO_CODE_MAX_LENGTH = 20;
var isValidPromoCodeFormat = function(e) {
    return /^[\dA-Z]{1,11}(-[\dA-Z]{8})?$/.test(e)
};
exports.isValidPromoCodeFormat = isValidPromoCodeFormat;
var isValidPurchaseOrderTokenFormat = function(e) {
    return /^[\dA-Z]{26}$/.test(e)
};
exports.isValidPurchaseOrderTokenFormat = isValidPurchaseOrderTokenFormat;
var validSignupSources = ["B", "I", "A", "W", "M", "C", "P", "T"],
    isValidSignupSource = function(e) {
        return lodash_es_1.includes(validSignupSources, e)
    };
exports.isValidSignupSource = isValidSignupSource;
var isNonWebSignupSource = function(e) {
    return "B" !== e && "O" !== e && "T" !== e
};
exports.isNonWebSignupSource = isNonWebSignupSource;
var isValidSignupVerificationCode = function(e) {
    return /^\d{6}$/.test(e)
};
exports.isValidSignupVerificationCode = isValidSignupVerificationCode;
var wait = function(e) {
    return new Promise(function(r) {
        setTimeout(r, e)
    })
};
exports.wait = wait;
var getCallbackPromise = function() {
    var e, r, t = Option_1.none,
        o = Option_1.none,
        n = function() {
            return Option_1.isSome(t) ? "Promise was already resolved" : Option_1.isSome(o) ? "Promise was already rejected" : void 0
        },
        i = new Promise(function(i, a) {
            e = function(e) {
                var r = n();
                return r || (t = Option_1.some(e), i(e)), r
            }, r = function(e) {
                var r = n();
                return r || (o = Option_1.some(e), a(e)), r
            }
        });
    if (!e || !r) throw new Error("CallbackPromise functions were not initialized");
    return {
        resolve: e,
        reject: r,
        promise: i
    }
};
exports.getCallbackPromise = getCallbackPromise;
var batchChain = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            return [2, lodash_es_1.chunk(t, r).reduce(function(r, t) {
                return r.then(function(r) {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var o;
                        return __generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, e(t)];
                                case 1:
                                    return o = n.sent(), [2, __spread(r, o)]
                            }
                        })
                    })
                })
            }, Promise.resolve([]))]
        })
    })
};
exports.batchChain = batchChain;
var batchPromiseAll = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            return [2, exports.batchChain(function(r) {
                return Promise.all(r.map(e))
            }, r, t)]
        })
    })
};
exports.batchPromiseAll = batchPromiseAll;
var chainPromises = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, o, n, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    t = [], o = 0, a.label = 1;
                case 1:
                    return o < r ? (i = (n = t).push, [4, e()]) : [3, 4];
                case 2:
                    i.apply(n, [a.sent()]), a.label = 3;
                case 3:
                    return o++, [3, 1];
                case 4:
                    return [2, t]
            }
        })
    })
};
exports.chainPromises = chainPromises;
var commaSeparatedListToArray = function(e) {
    return e ? e.split(",").map(function(e) {
        return e.trim()
    }).filter(function(e) {
        return "" !== e
    }) : []
};
exports.commaSeparatedListToArray = commaSeparatedListToArray;
var formatCommaSeparatedList = function(e, r) {
    if (!e) return "";
    var t = r ? ", " : ",";
    return exports.commaSeparatedListToArray(e).join(t)
};
exports.formatCommaSeparatedList = formatCommaSeparatedList;
var clean = function(e) {
    return e.toLowerCase().replace(/\s/g, "")
};
exports.clean = clean;
var getTime = function(e) {
    return e instanceof Date ? e.valueOf() : "string" == typeof e ? moment_1.default(e).valueOf() : 0
};
exports.getTime = getTime;
var getAddressConfigForCountryCode = function(e) {
    return e || (e = "Default"), large_constants_1.COUNTRY_ADDRESS_FORMATS[e.toLowerCase()] || large_constants_1.COUNTRY_ADDRESS_FORMATS.Default
};
exports.getAddressConfigForCountryCode = getAddressConfigForCountryCode;
var getAllCountryCodes = function() {
    return Object.keys(large_constants_1.COUNTRY_ADDRESS_FORMATS).slice(1)
};
exports.getAllCountryCodes = getAllCountryCodes;
var getCountryNameForCode = function(e) {
    return exports.getAddressConfigForCountryCode(e).COUNTRY
};
exports.getCountryNameForCode = getCountryNameForCode, exports.COUNTRIES_SORTED_BY_NAME = exports.getAllCountryCodes().filter(function(e) {
    return "uk" !== e
}).map(function(e) {
    return {
        code: e,
        name: exports.getCountryNameForCode(e).replace("The ", "")
    }
}).sort(function(e, r) {
    var t = e.name,
        o = r.name;
    return sort_1.compareStrings(t, o)
});
var exportComplianceExclusions = ["cu", "ir", "kp", "sy"];
exports.BILLING_COUNTRIES_SORTED_BY_NAME = exports.COUNTRIES_SORTED_BY_NAME.filter(function(e) {
    return !1 === lodash_es_1.includes(exportComplianceExclusions, e.code)
});
var getModifierKey = function() {
    return navigator.userAgent.includes("Mac OS X") ? "⌘" : "ctrl"
};
exports.getModifierKey = getModifierKey;
var getFileExtension = function(e) {
    var r, t;
    return e && e.includes(".") && null !== (t = null === (r = lodash_es_1.last(e.split("."))) || void 0 === r ? void 0 : r.toLowerCase()) && void 0 !== t ? t : ""
};
exports.getFileExtension = getFileExtension;
var getSanitizedName = function(e) {
    return e ? e.replace(/["%;<>[\\\]{}]/g, "").replace(/\/{2,}/g, "/") : ""
};
exports.getSanitizedName = getSanitizedName;
var readFile = function(e) {
    return new Promise(function(r, t) {
        var o = new FileReader;
        o.addEventListener("load", function() {
            o.result && "object" == typeof o.result && "byteLength" in o.result ? (console.log("Read file (%d bytes)", o.result.byteLength), r(o.result)) : t(new Error("Invalid FileReader result."))
        }), o.addEventListener("error", function() {
            t(o.error)
        }), o.readAsArrayBuffer(e)
    })
};
exports.readFile = readFile;
var asValidDomain = function(e) {
    var r = e.trim().toLowerCase().replace(/^https:\/\//, "").replace(/\.1password\.com(.*)/, "").replace(/\s+/g, "-").replace(/[^\da-z-]/g, "").replace(/-+/g, "-");
    return r.length > exports.DOMAIN_MAX_LENGTH && (r = r.slice(0, exports.DOMAIN_MAX_LENGTH)), r
};
exports.asValidDomain = asValidDomain;
var asValidAccountName = function(e) {
    return exports.getSanitizedName(e).slice(0, exports.ACCOUNT_NAME_MAX_LENGTH)
};
exports.asValidAccountName = asValidAccountName;
var filterCharacters = function(e, r) {
    if (!e) return "";
    if (!r) return e;
    var t = new RegExp("[^" + r + "]", "g");
    return e.replace(t, "")
};
exports.filterCharacters = filterCharacters;
var URL_PROTOCOL_REGEX = /[\d+.A-Za-z-]+/,
    addProtocolToUrlIfNeeded = function(e) {
        return new RegExp("^" + URL_PROTOCOL_REGEX.source + ":").test(e) ? e : "https://" + e
    };
exports.addProtocolToUrlIfNeeded = addProtocolToUrlIfNeeded;
var getServerDomainFromAccountDomain = function(e) {
    if (!e) return "";
    var r = e.split(".");
    return !r || r.length < 2 ? "" : r.slice(1).join(".")
};
exports.getServerDomainFromAccountDomain = getServerDomainFromAccountDomain, exports.usTerritories = ["as", "gu", "mh", "mp", "fm", "pw", "pr", "vi"];
var getCountryCodeFromDomain = function(e) {
    if (!e) return "us";
    var r = e.split(".");
    if (!r || r.length < 2) return "us";
    var t = r[r.length - 1];
    if (void 0 !== t && lodash_es_1.includes(t, ":")) {
        var o = __read(t.split(":"), 1)[0];
        void 0 !== o && (t = o)
    }
    return "com" === t ? "us" : t
};
exports.getCountryCodeFromDomain = getCountryCodeFromDomain;
var inBetween = function(e, r, t) {
    return e > r && e <= t
};
exports.inBetween = inBetween;