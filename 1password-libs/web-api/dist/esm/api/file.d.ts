import * as t from "io-ts";
import * as util from "../util";
import { Session } from "./session";
export declare const File: t.IntersectionC<[t.TypeC<{
    fileId: t.StringC;
}>, t.PartialC<{
    signingKey: t.ReadonlyC<t.TypeC<{
        kid: t.StringC;
        ext: t.BooleanC;
        kty: t.LiteralC<"oct">;
        key_ops: t.UnionC<[t.TupleC<[t.LiteralC<"encrypt">, t.LiteralC<"decrypt">]>, t.TupleC<[t.LiteralC<"decrypt">, t.LiteralC<"encrypt">]>]>;
        alg: t.StringC;
        k: t.StringC;
    }>>;
}>]>;
export declare type File = t.TypeOf<typeof File>;
export interface Document {
    documentId: string;
    signingKey?: util.crypto.JwkSymKey;
}
export declare const getFile: (s: Session, file: File | Document, itemUuid: string, vaultUuid: string) => Promise<ArrayBuffer>;
export declare const getFileKey: (s: Session, fileId: string) => Promise<File>;
export declare const uploadFile: (s: Session, data: ArrayBuffer) => Promise<File>;
export declare const getFileWithRedirect: (s: Session, url: string, timeout?: number | undefined) => Promise<ArrayBuffer>;
