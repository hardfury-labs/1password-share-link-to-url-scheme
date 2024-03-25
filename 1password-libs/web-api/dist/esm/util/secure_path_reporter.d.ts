import * as t from "io-ts";
export declare const SecurePathReporter: {
    report: (ma: import("fp-ts/es6/Either").Either<t.Errors, unknown>) => readonly string[];
    reportFailure: (errors: t.Errors) => readonly string[];
};
