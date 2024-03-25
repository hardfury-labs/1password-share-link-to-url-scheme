import * as api from "../api";
import * as model from "../model";
export var getFilteredActivities = function(i, t, e, r) {
    return api.getFilteredActivities(i.session, t, e, r).then(function(i) {
        return i ? i.map(model.Activity.fromApi) : []
    }, function(i) {
        throw console.error("getFilteredActivities failed:", i), i
    })
};