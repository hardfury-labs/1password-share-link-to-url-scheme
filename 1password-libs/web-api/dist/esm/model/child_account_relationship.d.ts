import { ChildAccountRelationship as api } from "../api/billing";
export declare type ChildAccountRelationship = api;
export declare function ChildAccountRelationship(attrs: Partial<ChildAccountRelationship>): ChildAccountRelationship;
export declare namespace ChildAccountRelationship {
    const CodePrefix = "CA";
    const enum State {
        Active = "A",
        Ready = "R",
        Deleted = "D"
    }
}
