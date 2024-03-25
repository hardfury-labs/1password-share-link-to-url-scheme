import * as t from "io-ts";
import { Session } from "./session";
export declare const ACTIVITIES_BATCH_SIZE = 100;
export declare const LegacyActivity: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    actorUuid: t.StringC;
    eid: t.NumberC;
    time: t.StringC;
    action: t.StringC;
}>, t.PartialC<{
    objectType: t.StringC;
    objectUuid: t.StringC;
    auxUUID: t.StringC;
    auxInfo: t.StringC;
}>]>>;
export declare type LegacyActivity = t.TypeOf<typeof LegacyActivity>;
export declare const Activity: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    actor: t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>;
    eid: t.NumberC;
    time: t.StringC;
    ipAddress: t.StringC;
    action: t.StringC;
}>, t.PartialC<{
    objectType: t.StringC;
    objectUuid: t.StringC;
    auxInfo: t.StringC;
    auxUUID: t.StringC;
}>]>>;
export declare type Activity = t.TypeOf<typeof Activity>;
export declare type ActivityFilterDirection = "newer" | "older";
export interface ActivityFilters {
    readonly date?: string;
    readonly objectTypes?: string[];
    readonly actorUuid?: string;
    readonly objectUuid?: string;
}
export declare const getFilteredActivities: (s: Session, eid: number, direction: ActivityFilterDirection, filters?: ActivityFilters | undefined) => Promise<readonly Activity[]>;
