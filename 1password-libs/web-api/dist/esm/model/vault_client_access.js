import {
    BitSet
} from "./bit_set";
var p = BitSet.fromHex;
export var VaultClientAccess = {
    Offline: p("000000001"),
    Web: p("000000002"),
    Mac: p("000000004"),
    Windows: p("000000008"),
    IOS: p("000000010"),
    Android: p("000000020"),
    CLI: p("000000040"),
    Linux: p("000000400"),
    All: p("0FFFFFFFF"),
    Travel: p("100000000")
};