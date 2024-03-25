import * as model from "../model";
import { Context } from "./context";
export declare const saveDecryptedKeysets: (c: Context, keysets: readonly model.Keyset[]) => void;
export declare const decryptKeysets: (c: Context, keysets: readonly model.KeysetCiphertext[]) => Promise<readonly model.Keyset[]>;
export declare const findDecryptedKeyset: (c: Context, keysetUuid: string) => model.Keyset | undefined;
/**
 * Fetches the account overview, and refreshes keysets if the keyset version is out of date.
 * Returns a boolean indicating whether the keysets were refreshed.
 */
export declare const refreshKeysetsIfNecessary: (c: Context) => Promise<readonly model.Keyset[] | undefined>;
export declare const refreshKeysets: (c: Context) => Promise<readonly model.Keyset[]>;
