import {
    getRandomBytes
} from "../util/crypto";
export var getIv = function() {
    return getRandomBytes(12)
};