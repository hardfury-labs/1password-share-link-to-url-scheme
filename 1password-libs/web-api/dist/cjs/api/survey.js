"use strict";
var DepartureType, DepartureReason;
Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.submitDepartureSurvey = exports.DepartureReason = exports.DepartureType = void 0,
    function(e) {
        e.Cancellation = "cancellation", e.Deletion = "deletion"
    }(DepartureType = exports.DepartureType || (exports.DepartureType = {})),
    function(e) {
        e.DuplicateAccount = "duplicate_account", e.DidNotUse = "did_not_use", e.CouldNotUnderstand = "could_not_understand", e.TooExpensive = "too_expensive", e.MeNotYou = "me_not_you", e.Other = "other"
    }(DepartureReason = exports.DepartureReason || (exports.DepartureReason = {}));
var submitDepartureSurvey = function(e, t) {
    return e.postUnencrypted("/api/v1/survey", t).then(function() {})
};
exports.submitDepartureSurvey = submitDepartureSurvey;