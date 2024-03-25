import { Integration } from "../../../model";
import { Context } from "../../context";
/** Check if Duo enabled and format integration if it is */
export declare const getAndFormatDuo: (CTX: Context) => Promise<Integration | undefined>;
