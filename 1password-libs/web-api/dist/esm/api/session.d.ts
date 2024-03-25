/// <reference types="qwest" />
export interface Session {
    get: (url: string, data?: any, options?: Qwest.Options) => Promise<any>;
    post: (url: string, data?: any, options?: Qwest.Options) => Promise<any>;
    postUnencrypted: (url: string, data?: any, options?: Qwest.Options) => Promise<any>;
    put: (url: string, data?: any, options?: Qwest.Options) => Promise<any>;
    patch: (url: string, data?: any, options?: Qwest.Options) => Promise<any>;
    delete: (url: string, data?: any, options?: Qwest.Options) => Promise<any>;
}
