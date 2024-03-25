export var requestSupportEmail = function(t, e) {
    return t.get("/api/v1/support/start/" + encodeURIComponent(e)).then(function() {})
};
export var getSupportAccountsList = function(t, e, n) {
    return t.get("/api/v1/support/getaccounts/" + encodeURIComponent(e) + "/token/" + n).then(function(t) {
        return t.accounts
    })
};
export var requestAccountDeletion = function(t, e, n, o) {
    var r = "email=" + encodeURIComponent(n) + "&token=" + o;
    return t.get("/api/v1/support/senddelete/account/" + e + "?" + r).then(function() {})
};