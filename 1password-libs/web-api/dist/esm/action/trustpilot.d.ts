import * as api from "../api";
import { Context } from "./context";
export declare type TrustpilotData = api.TrustpilotData;
export declare const getTrustpilotReviewData: (c: Context) => Promise<TrustpilotData>;
