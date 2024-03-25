export var createSignupStep = function(t, e) {
    return t.postUnencrypted("/api/v1/signupstep/create", e).then(function(t) {
        return t.uuid
    })
};
export var updateSignupStep = function(t, e) {
    return t.postUnencrypted("/api/v1/signupstep/next", e)
};