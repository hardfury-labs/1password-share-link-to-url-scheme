import { Session } from "./session";
export interface TrustpilotData {
    reviewLink: string;
    rating: number;
    numberOfReviews: number;
}
export declare const getTrustpilotReviewData: (s: Session) => Promise<TrustpilotData>;
