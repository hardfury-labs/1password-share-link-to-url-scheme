import { Session } from "./session";
export declare enum DepartureType {
    Cancellation = "cancellation",
    Deletion = "deletion"
}
export declare enum DepartureReason {
    DuplicateAccount = "duplicate_account",
    DidNotUse = "did_not_use",
    CouldNotUnderstand = "could_not_understand",
    TooExpensive = "too_expensive",
    MeNotYou = "me_not_you",
    Other = "other"
}
export interface DepartureSurvey {
    type: DepartureType;
    userUuid: string;
    accountType: string;
    reasonCodes: DepartureReason[];
    details?: string;
}
export declare const submitDepartureSurvey: (s: Session, data: DepartureSurvey) => Promise<void>;
