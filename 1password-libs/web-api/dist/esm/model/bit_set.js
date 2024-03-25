import * as SafeBitwise from "./safe_bitwise";
export var BitSet;
! function(e) {
    e.empty = function() {
        return 0
    }, e.equals = function(e, i) {
        return e === i
    }, e.fromHex = function(e) {
        return Number.parseInt(e, 16)
    }, e.toHex = function(e) {
        return e.toString(16)
    }, e.combine = SafeBitwise.orAll, e.disable = SafeBitwise.andNot, e.enable = SafeBitwise.or, e.includes = SafeBitwise.includesAll, e.includesAny = SafeBitwise.includesAny, e.toggle = SafeBitwise.xor
}(BitSet || (BitSet = {}));