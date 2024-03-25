import * as api from "../api";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/survey",
    makePromise = mp(codeLocation);
export var submitDepartureSurvey = function(r, e) {
    return makePromise("submitDepartureSurvey", function() {
        return api.submitDepartureSurvey(r.session, e)
    })
};