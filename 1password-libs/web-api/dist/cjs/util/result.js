"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.fromEither = void 0;
var Either_1 = require("fp-ts/es6/Either"),
    fromEither = function(e) {
        return Either_1.isLeft(e) ? {
            type: "err",
            value: e.left
        } : {
            type: "ok",
            value: e.right
        }
    };
exports.fromEither = fromEither;