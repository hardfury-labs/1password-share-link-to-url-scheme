import {
    find,
    includes
} from "lodash-es";
export var getBrowserInfo = function(e) {
    e = e.toLowerCase();
    var r = find(browserDetectionTerms, function(r) {
            return includes(e, r.term)
        }),
        o = r ? r.name : "Browser",
        n = r ? extractVersion(e, r.versionRegex) : "",
        i = find(osDetectionTerms, function(r) {
            return includes(e, r.term)
        }),
        s = i ? i.name : "",
        m = i ? extractVersion(e, i.versionRegex) : "";
    return "MacOSX" === s && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && (s = "iOS", m = ""), {
        name: o,
        version: n,
        osName: s,
        osVersion: m
    }
};
var extractVersion = function(e, r) {
        if (!r) return "";
        var o = r.exec(e),
            n = null === o || void 0 === o ? void 0 : o[1];
        return void 0 !== n ? n.replace(/_/g, ".") : ""
    },
    browserDetectionTerms = [{
        term: "msie",
        name: "Internet Explorer",
        versionRegex: /msie ([\d.]+)/
    }, {
        term: "trident",
        name: "Internet Explorer",
        versionRegex: /rv:([\d.]+)/
    }, {
        term: "edge",
        name: "Microsoft Edge",
        versionRegex: /edge\/([\d.]+)/
    }, {
        term: "edg",
        name: "Microsoft Edge",
        versionRegex: /edg\/([\d.]+)/
    }, {
        term: "opr",
        name: "Opera",
        versionRegex: /opr\/([\d.]+)/
    }, {
        term: "opera mobi",
        name: "Opera",
        versionRegex: /version\/([\d.]+)/
    }, {
        term: "opios",
        name: "Opera",
        versionRegex: /opios\/([\d.]+)/
    }, {
        term: "firefox",
        name: "Firefox",
        versionRegex: /firefox\/([\d.]+)/
    }, {
        term: "fxios",
        name: "Firefox",
        versionRegex: /fxios\/([\d.]+)/
    }, {
        term: "chrome",
        name: "Chrome",
        versionRegex: /chrome\/([\d.]+)/
    }, {
        term: "crios",
        name: "Chrome",
        versionRegex: /crios\/([\d.]+)/
    }, {
        term: "android",
        name: "Android Browser"
    }, {
        term: "safari",
        name: "Safari",
        versionRegex: /version\/([\d.]+)/
    }],
    osDetectionTerms = [{
        term: "iphone",
        name: "iOS",
        versionRegex: /os ([\d._]+)/
    }, {
        term: "ipad",
        name: "iOS",
        versionRegex: /os ([\d._]+)/
    }, {
        term: "ipod",
        name: "iOS",
        versionRegex: /os ([\d._]+)/
    }, {
        term: "mac os x",
        name: "MacOSX",
        versionRegex: /os x ([\d._]+)/
    }, {
        term: "android;",
        name: "Android",
        versionRegex: /android; ([\d.]+)/
    }, {
        term: "android",
        name: "Android",
        versionRegex: /android ([\d.]+)/
    }, {
        term: "linux",
        name: "Linux"
    }, {
        term: "cros",
        name: "ChromeOS"
    }, {
        term: "windows",
        name: "Windows",
        versionRegex: /windows nt ([\d.]+)/
    }];