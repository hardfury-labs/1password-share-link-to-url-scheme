export interface ServerNotification {
    account: string;
    user: string;
    device: string;
    session: string;
}
export declare class Notifier {
    eventHandler: (event: MessageEvent) => void;
    websocket: WebSocket | undefined;
    private _notifierReconnectDelay;
    constructor(handler: (event: MessageEvent) => void);
    connect: (url: string) => void;
}
