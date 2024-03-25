import * as t from "io-ts";
import { Session } from "./session";
export declare const IconSet: t.ReadonlyC<t.TypeC<{
    version: t.StringC;
    icons: t.ReadonlyArrayC<t.TypeC<{
        url: t.StringC;
        description: t.StringC;
    }>>;
}>>;
export declare type IconSet = t.TypeOf<typeof IconSet>;
export declare type IconType = "groups" | "vaults" | "users" | "connect";
export declare const getIcons: (s: Session, iconType: IconType) => Promise<IconSet>;
