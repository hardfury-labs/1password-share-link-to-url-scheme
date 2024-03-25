import {
    isLeft
} from "fp-ts/es6/Either";
export var fromEither = function(e) {
    return isLeft(e) ? {
        type: "err",
        value: e.left
    } : {
        type: "ok",
        value: e.right
    }
};