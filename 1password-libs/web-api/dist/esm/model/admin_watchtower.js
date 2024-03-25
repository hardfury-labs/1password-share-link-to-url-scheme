import * as t from "io-ts";
export var WatchtowerStructureVersion = 1;
export var WatchtowerDataStructureV1 = t.readonly(t.intersection([t.type({
    cw: t.number,
    rp: t.number,
    wp: t.number,
    i2fa: t.number,
    exp: t.number,
    tot: t.number
}), t.partial({
    uw: t.number,
    vp: t.number
})]));