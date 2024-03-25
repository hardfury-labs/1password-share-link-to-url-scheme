import { BigInteger } from "jsbn";
export interface SrpGroup {
    readonly N: BigInteger;
    readonly g: BigInteger;
}
export declare const enum SrpGroupName {
    b4096 = "4096",
    b6144 = "6144",
    b8192 = "8192"
}
export declare const getGroup: (groupName: string) => SrpGroup;
export declare const SRP_GROUPS: {
    [K in SrpGroupName]: SrpGroup;
};
