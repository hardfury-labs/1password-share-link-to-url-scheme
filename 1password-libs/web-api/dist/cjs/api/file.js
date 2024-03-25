"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, i, r) {
        void 0 === r && (r = i), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    } : function(e, t, i, r) {
        void 0 === r && (r = i), e[r] = t[i]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var i in e) "default" !== i && Object.prototype.hasOwnProperty.call(e, i) && __createBinding(t, e, i);
        return __setModuleDefault(t, e), t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getFileWithRedirect = exports.uploadFile = exports.getFileKey = exports.getFile = exports.File = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util"),
    util = __importStar(require("../util"));
exports.File = t.intersection([t.type({
    fileId: t.string
}), t.partial({
    signingKey: util.crypto.JwkSymKey
})]);
var DOCUMENT_SERVER_TIMEOUT = 42e4,
    getFileId = function(e) {
        return "fileId" in e ? e.fileId : e.documentId
    },
    getFile = function(e, t, i, r) {
        var n = t.signingKey ? "/api/v2/file/" + r + "/" + i + "/" + getFileId(t) : "/api/v1/file/" + getFileId(t);
        return exports.getFileWithRedirect(e, n)
    };
exports.getFile = getFile;
var getFileKey = function(e, t) {
    return e.get("/api/v3/filekey/" + t).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(exports.File)(e)
    })
};
exports.getFileKey = getFileKey;
var uploadFile = function(e, t) {
    return e.postUnencrypted("/api/v2/file", t, {
        timeout: DOCUMENT_SERVER_TIMEOUT
    }).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return util_1.unsafeDecodeAs(exports.File)(e)
    })
};
exports.uploadFile = uploadFile;
var getFileWithRedirect = function(e, t, i) {
    var r = {
        responseType: "text",
        headers: {
            "X-Use-302-Redirect": "false"
        }
    };
    return "number" == typeof i && (r.timeout = i), e.get(t, void 0, r).then(function(t) {
        return e.get(t, void 0, {
            responseType: "arraybuffer",
            timeout: DOCUMENT_SERVER_TIMEOUT
        })
    })
};
exports.getFileWithRedirect = getFileWithRedirect;