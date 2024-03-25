import { Session } from "./session";
export interface PostSignupStep {
    readonly accountType?: string;
    readonly pageName: string;
    readonly source?: string;
    readonly uuid?: string;
}
export interface SignupStepCreateResponse {
    readonly uuid: string;
}
export declare const createSignupStep: (s: Session, signupInfo: PostSignupStep) => Promise<string>;
export declare const updateSignupStep: (s: Session, signupInfo: PostSignupStep) => Promise<void>;
