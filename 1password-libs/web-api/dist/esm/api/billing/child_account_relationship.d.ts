import * as t from "io-ts";
import { Session } from "../session";
export declare const ChildAccountRelationship: t.ReadonlyC<t.TypeC<{
    code: t.StringC;
    state: t.StringC;
}>>;
export declare type ChildAccountRelationship = t.TypeOf<typeof ChildAccountRelationship>;
export declare const createChildAccountRelationship: (s: Session) => Promise<ChildAccountRelationship>;
export declare const getChildAccountRelationship: (s: Session) => Promise<ChildAccountRelationship>;
export declare const attachAsChildAccount: (s: Session, childAccountCode: string) => Promise<void>;
export declare const checkChildAccountCode: (s: Session, childAccountCode: string) => Promise<void>;
export declare const detachChildAccount: (s: Session) => Promise<void>;
