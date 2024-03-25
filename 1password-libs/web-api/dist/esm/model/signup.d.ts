import { AccountInfo, SignupFeatures } from "../api";
import { Plan } from "../api/billing/plan";
export interface Signup {
    uuid: string;
    domain: string;
    state: string;
    createdAt: Date | undefined;
    completedAt: Date | undefined;
    expiresAt: Date | undefined;
    name: string;
    type: string;
    source: string;
    email: string;
    language: string;
    availablePlans: Plan[];
    promoCode?: string;
    tierName: string;
    defaultBillingFrequency?: string;
    trialEndsAt: Date | undefined;
    stepUuid?: string;
    features: SignupFeatures;
    duplicateAccounts?: AccountInfo[];
    flowServiceUuid?: string;
}
