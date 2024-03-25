"use strict";
var Card;
Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.Card = void 0,
    function(e) {
        e.getValidBrand = function(e) {
            switch (e) {
                case "Visa":
                case "MasterCard":
                case "American Express":
                case "Discover":
                    return e;
                default:
                    return "Unknown"
            }
        }
    }(Card = exports.Card || (exports.Card = {}));