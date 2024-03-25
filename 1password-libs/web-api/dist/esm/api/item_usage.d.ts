import { Session } from "./session";
export interface ItemUsage {
    vaultUuid: string;
    itemUuid: string;
    lastUsedAt: string;
    lastUsedVersion: number;
}
export declare const reportItemUsage: (s: Session, usage: ItemUsage[]) => Promise<void>;
