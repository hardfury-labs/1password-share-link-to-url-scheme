import * as api from "../api";
import { Context } from "./context";
/** Create a Log entry indicating a completed step in the Provisioning setup flow */
export declare const createProvisioningProgressStep: (c: Context, params: api.CreateProvisioningProgressParams) => Promise<void>;
