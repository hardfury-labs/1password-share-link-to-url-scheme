import { SupportRequestPayload, SupportRequestSignedPayload } from "@1password/contact-service-types";
import { Jws } from "../util/crypto";
import { Context } from "./context";
export declare const createSignedSupportRequest: (c: Context, payload: SupportRequestPayload) => Promise<Jws>;
export declare const parseAndVerifySupportRequest: (c: Context, jws: Jws) => Promise<SupportRequestSignedPayload>;
export declare const getEnvFromSupportRequest: (jws: Jws) => string;
