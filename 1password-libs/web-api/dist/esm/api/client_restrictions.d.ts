import * as t from "io-ts";
import { Session } from "./session";
export declare const ModernAppVersion: t.ReadonlyC<t.IntersectionC<[t.TypeC<{
    clientName: t.StringC;
    version: t.StringC;
}>, t.PartialC<{
    osVersion: t.StringC;
}>]>>;
export declare type ModernAppVersion = t.TypeOf<typeof ModernAppVersion>;
export declare const getModernAppVersions: (s: Session) => Promise<ModernAppVersion[]>;
