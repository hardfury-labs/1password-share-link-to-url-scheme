import * as t from "io-ts";
import {
    getTime
} from "../util";
export var Device;
! function(i) {
    i.Type = t.intersection([t.type({
        uuid: t.string,
        clientName: t.string,
        clientVersion: t.string
    }), t.partial({
        name: t.string,
        model: t.string,
        osName: t.string,
        osVersion: t.string,
        userAgent: t.string,
        lastAuthIP: t.string,
        avatar: t.string,
        locationCity: t.string,
        locationCountry: t.string,
        locationCountryCode: t.string,
        state: t.string,
        createdAt: t.string,
        updatedAt: t.string,
        lastAuthAt: t.string,
        fromDeviceInit: t.boolean
    })], "Device");
    i.isInactive = function(t) {
        var i = Date.now() - 5184e6;
        return !!t.lastAuthAt && getTime(t.lastAuthAt) < i
    }, i.compareAuthDates = function(t, i) {
        return getTime(i.lastAuthAt) - getTime(t.lastAuthAt)
    }
}(Device || (Device = {}));