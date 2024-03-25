var _a, __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, n = 1, t = arguments.length; n < t; n++)
                for (var o in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, r, n, t) {
        return new(n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    c(t.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    c(t.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof n ? r : new n(function(e) {
                    e(r)
                })).then(a, s)
            }
            c((t = t.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var n, t, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, t && (o = 2 & i[0] ? t.return : i[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, i[1])).done) return o;
                        switch (t = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, t = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = r.call(e, a)
                    } catch (e) {
                        i = [6, e], t = 0
                    } finally {
                        n = o = 0
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
import {
    isRight
} from "fp-ts/Either";
import * as config from "./config";
var BUGSNAG_URL = "https://notify.bugsnag.com",
    BUGSNAG_PAYLOAD_VERSION = "5";
export var SeverityLevel;
! function(e) {
    e.Error = "error", e.Warning = "warning", e.Info = "info"
}(SeverityLevel || (SeverityLevel = {}));
export var ExceptionType;
! function(e) {
    e[e.SurveyError = 0] = "SurveyError", e[e.ValidationError = 1] = "ValidationError"
}(ExceptionType || (ExceptionType = {}));
var exceptionMap = ((_a = {})[ExceptionType.SurveyError] = {
    severityLevel: SeverityLevel.Error,
    exception: {
        errorClass: "SurveyError"
    }
}, _a[ExceptionType.ValidationError] = {
    severityLevel: SeverityLevel.Error,
    exception: {
        errorClass: "ValidationError"
    }
}, _a);
export var reportError = function(e, r, n, t, o) {
    return void 0 === r && (r = []), __awaiter(void 0, void 0, void 0, function() {
        var i, a, s, c, l, u;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    i = n ? {
                        id: n
                    } : void 0, a = exceptionMap[e].severityLevel, s = exceptionMap[e].exception, c = "c26bc2231cbc0d8d3ff8a786309867fd", t && (l = t.decode(o), isRight(l) ? s = t.encode(l.right) : console.error("reportError failed to decode", l.left)), p.label = 1;
                case 1:
                    return p.trys.push([1, 3, , 4]), [4, fetch(BUGSNAG_URL, {
                        method: "POST",
                        headers: {
                            "Bugsnag-Payload-Version": BUGSNAG_PAYLOAD_VERSION,
                            "Content-Type": "application/json",
                            "Bugsnag-Api-Key": c
                        },
                        referrerPolicy: "no-referrer",
                        body: JSON.stringify({
                            payloadVersion: BUGSNAG_PAYLOAD_VERSION,
                            notifier: {
                                name: "Bugsnag B5Client",
                                version: "1.0",
                                url: "https://app.bugsnag.com/agilebits/b5-web-client/"
                            },
                            events: [{
                                exceptions: [__assign(__assign({}, s), {
                                    stacktrace: r.map(function(e) {
                                        var r;
                                        return __assign(__assign({}, e), {
                                            lineNumber: null !== (r = e.lineNumber) && void 0 !== r ? r : 0
                                        })
                                    }),
                                    type: "browserjs"
                                })],
                                severity: a,
                                user: i,
                                app: {
                                    version: config.serverVersion,
                                    releaseStage: config.env
                                },
                                device: {
                                    id: config.device.uuid,
                                    browserName: config.device.name,
                                    browserVersion: config.device.model,
                                    osName: config.device.osName,
                                    osVersion: config.device.osVersion
                                }
                            }]
                        })
                    })];
                case 2:
                    return p.sent(), [3, 4];
                case 3:
                    return u = p.sent(), console.error("Error reporting error to bugsnag: " + String(u)), [3, 4];
                case 4:
                    return [2]
            }
        })
    })
};