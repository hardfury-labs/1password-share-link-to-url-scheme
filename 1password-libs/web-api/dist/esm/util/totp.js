import * as sjcl from "sjcl";
import {
    bytesToBits
} from "./codec";
import {
    getRandomBytes
} from "./crypto";
export var DEFAULT_DIGITS = 6;
export var DEFAULT_PERIOD = 30;
export var generateSecret = function() {
    return sjcl.codec.base32.fromBits(bytesToBits(getRandomBytes(10)))
};