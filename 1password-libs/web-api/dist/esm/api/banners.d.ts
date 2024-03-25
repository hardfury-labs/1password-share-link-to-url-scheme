import * as t from "io-ts";
import { Session } from "./session";
export declare const enum BannerClosedStatus {
    Accept = "A",
    Dismiss = "D"
}
export declare const BannerInstance: t.ReadonlyC<t.TypeC<{
    uuid: t.StringC;
    banner: t.StringC;
    group: t.NumberC;
}>>;
export declare type BannerInstance = t.TypeOf<typeof BannerInstance>;
export declare const BannerGroupTimeouts: t.ReadonlyC<t.ArrayC<t.TypeC<{
    group: t.NumberC;
    until: t.StringC;
}>>>;
export declare type BannerGroupTimeouts = t.TypeOf<typeof BannerGroupTimeouts>;
export declare const BannerInstances: t.ReadonlyC<t.PartialC<{
    instances: t.UnionC<[t.ArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        banner: t.StringC;
        group: t.NumberC;
    }>>>, t.NullC]>;
    snooze: t.ReadonlyC<t.ArrayC<t.TypeC<{
        group: t.NumberC;
        until: t.StringC;
    }>>>;
}>>;
export declare type BannerInstances = t.TypeOf<typeof BannerInstances>;
/**
 * fetch banner(s) to display.
 */
export declare const getBannersForSession: (s: Session, group: number) => Promise<BannerInstances>;
/**
 * Close out a banner instance with a user action.
 */
export declare const performBannerAction: (s: Session, instanceUuid: string, action: BannerClosedStatus) => Promise<BannerGroupTimeouts>;
