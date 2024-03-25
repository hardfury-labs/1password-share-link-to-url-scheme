export declare type UuidRef = {
    uuid: string;
} | string;
export declare const generateUUID: () => string;
export declare const isValidAccountUuid: (uuid: string) => boolean;
export declare const isValidUserUuid: (uuid: string) => boolean;
export declare const isValidInvitationUuid: (uuid: string) => boolean;
export declare const isValidItemUuid: (uuid: string) => boolean;
export declare const isValidVaultUuid: (uuid: string) => boolean;
export declare const isValidGroupUuid: (uuid: string) => boolean;
export declare const isValidTemplateUuid: (uuid: string) => boolean;
export declare const isValidAccessorUuid: (accessorType: "group" | "user") => (uuid: string) => boolean;
/**
 * Extracts the first eight digits of a UUID (converted to base32) and returns the value modulo the given number.
 *
 * This can be used to distill a UUID down to a number, e.g. for partitioning users into relatively
 * evenly distributed, arbitrary groups.
 */
export declare const getUuidModulo: (uuid: string, mod: number) => number;
export declare const getValidUserUuid: (ref: UuidRef) => string;
export declare const getValidVaultUuid: (ref: UuidRef) => string;
export declare const getValidGroupUuid: (ref: UuidRef) => string;
