import * as t from "io-ts";
export declare namespace Device {
    const Type: t.IntersectionC<[t.TypeC<{
        uuid: t.StringC;
        clientName: t.StringC;
        clientVersion: t.StringC;
    }>, t.PartialC<{
        name: t.StringC;
        model: t.StringC;
        osName: t.StringC;
        osVersion: t.StringC;
        userAgent: t.StringC;
        lastAuthIP: t.StringC;
        avatar: t.StringC;
        locationCity: t.StringC;
        locationCountry: t.StringC;
        locationCountryCode: t.StringC;
        state: t.StringC;
        createdAt: t.StringC;
        updatedAt: t.StringC;
        lastAuthAt: t.StringC;
        fromDeviceInit: t.BooleanC;
    }>]>;
    type Type = t.TypeOf<typeof Type>;
    /**
     * Calculates whether the device is inactive based on last auth
     */
    const isInactive: (device: Type) => boolean;
    /**
     * Comparator for device auth dates.
     */
    const compareAuthDates: (a: Type, b: Type) => number;
}
