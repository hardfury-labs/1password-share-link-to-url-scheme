import {
    split,
    trim
} from "lodash-es";
export var Named;
! function(e) {
    e.getInitials = function(e) {
        var t = e.name;
        return split(trim(t), " ").filter(function(e) {
            return !!e
        }).slice(0, 2).reduce(function(e, t) {
            return e + t[0]
        }, "").toLocaleUpperCase()
    }
}(Named || (Named = {}));