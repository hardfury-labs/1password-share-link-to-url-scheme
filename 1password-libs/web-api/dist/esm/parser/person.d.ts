import { Context } from "../action/context";
import * as api from "../api";
import * as model from "../model";
export declare const parsePeople: (c: Context, serverPersons: api.Person[], findCachedUser: (uuid: string) => model.Person | undefined) => Promise<model.Person[]>;
export declare const parsePerson: (c: Context, json: api.Person | api.User, attrs: number | undefined, currentPerson: model.Person | undefined) => Promise<model.Person>;
export declare const personToAPI: (m: model.Person) => api.Person;
