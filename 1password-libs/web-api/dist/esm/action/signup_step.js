import * as api from "../api";
import {
    makePromise as mp
} from "../util/make_promise";
var makePromise = mp("action/signup_step");
export var createSignupStep = function(e, p, t, a) {
    return makePromise("createSignupStep", function() {
        var i = {
            accountType: a,
            pageName: p,
            source: t || "B"
        };
        return api.createSignupStep(e.session, i)
    })
};
export var updateSignupStep = function(e, p, t) {
    return makePromise("updateSignupStep", function() {
        return api.updateSignupStep(e.session, {
            pageName: p,
            uuid: t
        })
    })
};