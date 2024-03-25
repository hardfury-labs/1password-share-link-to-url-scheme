import {
    curry
} from "lodash-es";
export var errorHandler = curry(function(r, o, e) {
    throw console.error("[" + r + "#" + o + "]", e), e
});