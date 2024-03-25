import { Integration } from "../../../model";
import { Context } from "../../context";
/** Check if Masked Emails are enabled and format integration if so */
export declare const getAndFormatMaskedEmails: (CTX: Context) => Promise<Integration[]>;
