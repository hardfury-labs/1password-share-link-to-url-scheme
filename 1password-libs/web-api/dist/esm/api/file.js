import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util";
import * as util from "../util";
export var File = t.intersection([t.type({
    fileId: t.string
}), t.partial({
    signingKey: util.crypto.JwkSymKey
})]);
var DOCUMENT_SERVER_TIMEOUT = 42e4,
    getFileId = function(e) {
        return "fileId" in e ? e.fileId : e.documentId
    };
export var getFile = function(e, t, r, i) {
    var n = t.signingKey ? "/api/v2/file/" + i + "/" + r + "/" + getFileId(t) : "/api/v1/file/" + getFileId(t);
    return getFileWithRedirect(e, n)
};
export var getFileKey = function(e, t) {
    return e.get("/api/v3/filekey/" + t).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return unsafeDecodeAs(File)(e)
    })
};
export var uploadFile = function(e, t) {
    return e.postUnencrypted("/api/v2/file", t, {
        timeout: DOCUMENT_SERVER_TIMEOUT
    }).then(function(e) {
        if (!e) throw new Error("Server response is empty");
        return unsafeDecodeAs(File)(e)
    })
};
export var getFileWithRedirect = function(e, t, r) {
    var i = {
        responseType: "text",
        headers: {
            "X-Use-302-Redirect": "false"
        }
    };
    return "number" == typeof r && (i.timeout = r), e.get(t, void 0, i).then(function(t) {
        return e.get(t, void 0, {
            responseType: "arraybuffer",
            timeout: DOCUMENT_SERVER_TIMEOUT
        })
    })
};