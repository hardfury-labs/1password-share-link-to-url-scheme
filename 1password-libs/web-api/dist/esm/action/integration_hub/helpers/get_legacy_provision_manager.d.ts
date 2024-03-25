import { Person } from "../../../model";
import { Context } from "../../context";
/** This function is used to identify whether users have a working (and enabled), non-service account provisioning setup. */
export declare const getLegacyProvisionManager: (CTX: Context) => Promise<Person | undefined>;
