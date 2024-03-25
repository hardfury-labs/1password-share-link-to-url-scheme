import * as api from "../api";
import * as model from "../model";
import { VaultItem } from "../model";
import { UuidRef } from "../util";
import { Context } from "./context";
import { GetVaultOptions } from "./vault";
export declare const processIncomingPackages: (c: Context) => Promise<api.PatchVaultItemsResponse | undefined>;
/**
 * Create, encrypt, sign, and send packages to people
 */
export declare const sendPackages: (c: Context, items: VaultItem[], userRefs: UuidRef[]) => Promise<model.Package[]>;
export declare const removePackages: (c: Context, sharedItems: model.Package[]) => Promise<void>;
export declare const getPackagesForVaultItem: (c: Context, item: VaultItem) => Promise<model.Package[]>;
export declare const getReceivingVault: (c: Context, options?: Partial<GetVaultOptions> | undefined) => Promise<model.Vault>;
export declare const sendPackage: (_c: Context, _package: api.OutgoingPackageV2) => Promise<void>;
export declare const getIncomingPackages: (_c: Context) => Promise<api.PackageOverviews | void>;
export declare const getMoreIncomingPackages: (_c: Context, _params: {
    uuid: string;
}) => Promise<api.PackageOverviews | void>;
export declare const markPackageAsRead: (c: Context, uuid: string) => Promise<void>;
export declare const removePackage: (c: Context, uuid: string) => Promise<void>;
