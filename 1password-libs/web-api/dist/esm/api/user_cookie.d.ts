import { Session } from "./session";
export interface UserCookie {
    userUuid: string;
    userEmail: string;
    userName: string;
    userAvatarURL: string;
    usingMyDomain: boolean;
    accountUuid: string;
    accountType: string;
    accountName: string;
    accountDomain: string;
    accountAvatarURL: string;
    hasPrioritySupport: boolean;
}
export declare const getUserCookies: (s: Session, host: string) => Promise<UserCookie[]>;
export declare const setUserCookie: (s: Session, host: string) => Promise<string>;
export declare const deleteAccountCookie: (s: Session, host: string, uuid: string) => Promise<string>;
export declare const deleteUserCookie: (s: Session, host: string, uuid: string) => Promise<string>;
