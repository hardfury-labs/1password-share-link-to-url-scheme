import * as sjcl from "sjcl";
var File = function() {
    function e(e, i) {
        if (!e) {
            var n = new Error("Created new File without a file ID");
            console.warn(n)
        }
        if (!i) {
            n = new Error("Created new File (" + e + ") without a signing key");
            console.warn(n)
        }
        this.fileId = e, this.signingKey = i
    }
    return e.prototype.signReference = function(e, i) {
        var n = new sjcl.misc.hmac(sjcl.codec.base64url.toBits(this.signingKey.k), sjcl.hash.sha256),
            r = this.signingKey.kid + this.fileId + e + i.toString();
        return sjcl.codec.base64url.fromBits(n.encrypt(r))
    }, e
}();
export {
    File
};