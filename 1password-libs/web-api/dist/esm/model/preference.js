import {
    BitSet
} from "./bit_set";
var p = BitSet.fromHex;
export var Preference = {
    TravelMode: p("000000001"),
    WelcomeMessageDismissed: p("000000002"),
    ReviewBannerDismissed: p("000000004"),
    TrashArchiveRenameAcknowledged: p("000000008"),
    EKitDownloaded: p("000000010")
};