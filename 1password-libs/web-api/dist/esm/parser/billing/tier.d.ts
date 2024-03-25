import * as api from "../../api";
import * as model from "../../model";
export declare const parseAvailableTiersFromAPI: (a: readonly api.billing.Tier[], s: model.billing.Subscription) => model.billing.Tier[];
export declare const parseTiersFromAPI: (aTiers: readonly api.billing.Tier[]) => model.billing.Tier[];
export declare const tierFromAPI: (a: api.billing.Tier, existingTier?: model.billing.Tier | undefined) => model.billing.Tier;
