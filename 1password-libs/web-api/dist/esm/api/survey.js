export var DepartureType;
! function(e) {
    e.Cancellation = "cancellation", e.Deletion = "deletion"
}(DepartureType || (DepartureType = {}));
export var DepartureReason;
! function(e) {
    e.DuplicateAccount = "duplicate_account", e.DidNotUse = "did_not_use", e.CouldNotUnderstand = "could_not_understand", e.TooExpensive = "too_expensive", e.MeNotYou = "me_not_you", e.Other = "other"
}(DepartureReason || (DepartureReason = {}));
export var submitDepartureSurvey = function(e, t) {
    return e.postUnencrypted("/api/v1/survey", t).then(function() {})
};