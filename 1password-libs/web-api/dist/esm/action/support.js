import * as api from "../api/support";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/support",
    makePromise = mp(codeLocation);
export var requestSupportEmail = function(t, e) {
    return makePromise("requestSupportEmail", function() {
        return api.requestSupportEmail(t.session, e)
    })
};
export var getSupportAccountsList = function(t, e, o) {
    return makePromise("getSupportAccountsList", function() {
        return api.getSupportAccountsList(t.session, e, o)
    })
};
export var requestAccountDeletion = function(t, e, o, r) {
    return makePromise("requestAccountDeletion", function() {
        return api.requestAccountDeletion(t.session, e, o, r)
    })
};