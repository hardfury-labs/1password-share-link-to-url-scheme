import { Session } from "./session";
export interface SupportInfo {
    readonly account: AccountSupportInfo;
    readonly user: UserSupportInfo;
}
export interface AccountSupportInfo {
    readonly name: string;
    readonly uuid: string;
    readonly domain: string;
    readonly type: string;
    readonly state: string;
    readonly tierName: string;
    readonly avatar: string;
    readonly createdAt: string;
    readonly canBeDeleted: boolean;
    readonly billing: BillingSupportInfo;
}
export interface UserSupportInfo {
    readonly avatar: string;
    readonly accountKeyFormat: string;
    readonly accountKeyUuid: string;
    readonly lastAuthAt: string;
}
export interface BillingSupportInfo {
    provider: string;
    status: string;
}
export declare const requestSupportEmail: (s: Session, email: string) => Promise<void>;
export declare const getSupportAccountsList: (s: Session, email: string, token: string) => Promise<SupportInfo[]>;
export declare const requestAccountDeletion: (s: Session, accountUuid: string, email: string, token: string) => Promise<void>;
