import * as t from "io-ts";
export declare enum SeverityLevel {
    Error = "error",
    Warning = "warning",
    Info = "info"
}
export declare enum ExceptionType {
    SurveyError = 0,
    ValidationError = 1
}
export interface Exception {
    errorClass: string;
    message?: string;
}
export interface StackFrame {
    file: string;
    lineNumber?: number;
    method: string;
}
/**
 * Report a client error to bugsnag. Errors are statically known,
 * so that no sensitive client information is sent to bugsnag.
 *
 * Optionally, a codec and extra data can be passed. If the extra data passes
 * the codec validation, the codec will be used to encode the extra data as
 * an exception. This allows the exception to be customized safely, although
 * great care should still be taken when writing the exception codec to ensure
 * no sensitive information will be leaked.
 */
export declare const reportError: <X>(exceptionType: ExceptionType, stacktrace?: StackFrame[], userUuid?: string | undefined, validator?: t.Type<X, Exception, unknown> | undefined, data?: unknown) => Promise<void>;
