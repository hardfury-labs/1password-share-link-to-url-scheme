import { Session } from "../action/session";
import * as model from "../model";
export declare const migrateKeyset: (s: Session, keyset: model.KeysetCiphertext) => Promise<void>;
