import { Integration, Person } from "../../model";
import { Context } from "../context";
export declare const getAllIntegrations: (CTX: Context) => Promise<Integration[]>;
export declare const getLegacyIntegrations: (CTX: Context) => Promise<Person | undefined>;
