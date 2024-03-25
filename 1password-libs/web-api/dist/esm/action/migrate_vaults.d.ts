import { model } from "..";
import { Vault } from "../model";
import { Context } from "./context";
export interface MigrationResults {
    readonly successfulVaults: model.Vault[];
    readonly failedVaults: string[];
    readonly failedItems: Record<string, string[]>;
}
/**
 * migrateVaults copies vaults and items from one account into another account.
 * The caller must verify the user has permission to migrate between these accounts.
 * @param originContext The context of the origin account where the vaults are coming from.
 * @param destinationContext The context of the destination account where the vaults are heading towards. Likely the current CTX object.
 * @param selectedVaults The user-created vaults you wish to migrate. Special vaults (P, G) are always included.
 * @param accountImageUrl Account image URL function to fetch avatar URLs.
 */
export declare const migrateVaults: (originContext: Context, destinationContext: Context, selectedVaults: Vault[], accountImageUrl: (imageName: string, c: Context) => string) => Promise<MigrationResults>;
