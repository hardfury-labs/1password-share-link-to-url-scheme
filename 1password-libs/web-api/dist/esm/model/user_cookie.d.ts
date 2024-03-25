import * as util from "../util";
export interface UserCookieProps {
    readonly userUuid: string;
    readonly userEmail: string;
    readonly userName: string;
    readonly userAvatarURL: string;
    readonly usingMyDomain: boolean;
    readonly accountUuid: string;
    readonly accountType: string;
    readonly accountName: string;
    readonly accountDomain: string;
    readonly accountAvatarURL: string;
    readonly hasPrioritySupport: boolean;
}
export declare class UserCookie {
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
    countryCode: util.CountryCode;
    server: string;
    constructor(details: UserCookieProps);
    private setDomainBasedInfo;
    getSignInDomain: () => string;
    update: (details: UserCookieProps) => boolean;
    toString(): string;
}
