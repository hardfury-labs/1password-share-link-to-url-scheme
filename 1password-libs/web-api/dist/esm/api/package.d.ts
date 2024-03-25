import * as util from "../util";
import { Session } from "./session";
export interface Package {
    uuid?: string;
    sourceVaultUuid: string;
    senderUuid: string;
    recipientUuid: string;
    createdAt?: string;
    updatedAt?: string;
    itemUuid: string;
    itemVersion: number;
    templateUuid: string;
    clientCreatedAt?: string;
    clientUpdatedAt?: string;
    encKey: util.crypto.JweB;
    recoverableEncKey: util.crypto.JweB;
    encOverview: util.crypto.JweB;
    encDetails?: util.crypto.JweB;
    signature: util.crypto.JwsB;
}
export interface IncomingPackage extends Package {
    uuid: string;
}
export declare const sendPackages: (s: Session, items: Package[]) => Promise<void>;
export declare const getIncomingPackages: (s: Session) => Promise<IncomingPackage[]>;
export declare const getIncomingPackage: (s: Session, uuid: string) => Promise<IncomingPackage>;
export declare const getPackagesForVaultItem: (s: Session, vaultUUID: string, itemUUID: string) => Promise<IncomingPackage[]>;
export declare const removePackages: (s: Session, uuids: readonly string[]) => Promise<void>;
export interface Sender {
    readonly uuid: string;
    readonly name: string;
    readonly email: string;
    readonly avatar: string;
    readonly signingKey: util.crypto.JwkEcPubKey;
}
export interface IncomingPackageOverviewV2 {
    readonly uuid: string;
    readonly formatVersion: number;
    readonly sender: Sender;
    readonly createdAt: string;
    readonly expiresAt: string;
    readonly readAt?: string;
    readonly encOverview: util.crypto.JweB;
}
export interface IncomingPackageV2 extends IncomingPackageOverviewV2 {
    readonly encDetails: util.crypto.JweB;
}
export declare enum ExpiresIn {
    OneDay = 86400,
    OneWeek = 604800,
    OneMonth = 2678400,
    TwoMonths = 5356800
}
export interface OutgoingPackageV2 {
    readonly expiresIn: ExpiresIn;
    readonly encOverview: util.crypto.JweB;
    readonly encDetails: util.crypto.JweB;
}
export interface PackageOverviews {
    readonly packages: readonly IncomingPackageOverviewV2[];
    readonly totalCount: number;
}
export interface PackageParams {
    readonly direction: "newer" | "older";
    readonly uuid: string;
}
export declare const sendPackageV2: (s: Session, item: OutgoingPackageV2) => Promise<void>;
export declare const getIncomingPackagesV2: (s: Session) => Promise<PackageOverviews>;
export declare const getMoreIncomingPackages: (s: Session, params: PackageParams) => Promise<PackageOverviews>;
export declare const getIncomingPackageV2: (s: Session, uuid: string) => Promise<IncomingPackageV2>;
export declare const markPackageAsRead: (s: Session, uuid: string) => Promise<void>;
export declare const removePackageV2: (s: Session, uuid: string) => Promise<void>;
