import * as t from "io-ts";
import { Session } from "./session";
export declare const VaultManagers: t.ReadonlyC<t.TypeC<{
    managers: t.ReadonlyArrayC<t.ReadonlyC<t.TypeC<{
        uuid: t.StringC;
        name: t.StringC;
        email: t.StringC;
        avatar: t.StringC;
        state: t.StringC;
        type: t.StringC;
    }>>>;
}>>;
export declare type VaultManagers = t.TypeOf<typeof VaultManagers>;
/**
 * getVaultManagers returns the vault managers for a given vault
 */
export declare const getVaultManagers: (s: Session, vaultUuid: string) => Promise<VaultManagers>;
