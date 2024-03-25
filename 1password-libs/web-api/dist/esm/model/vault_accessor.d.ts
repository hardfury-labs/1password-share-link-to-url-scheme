import { crypto } from "../util";
import { Group } from "./group";
import { Person } from "./person";
export declare type VaultAccessor = Group | Person;
export interface BasicVaultAccessor {
    readonly accessorType: "group" | "user";
    readonly pubKey?: crypto.JwkRsaPubKey;
    readonly uuid: string;
}
