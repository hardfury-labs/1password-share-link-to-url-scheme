import * as model from "../model";
import { Context } from "./context";
export declare const createChildAccountRelationship: (c: Context) => Promise<model.ChildAccountRelationship>;
export declare const getChildAccountRelationship: (c: Context) => Promise<model.ChildAccountRelationship>;
export declare const checkChildAccountCode: (c: Context, childAccountCode: string) => Promise<void>;
export declare const detachChildAccount: (c: Context) => Promise<void>;
export declare const attachAsChildAccount: (c: Context, childAccountCode: string) => Promise<model.billing.Subscription>;
