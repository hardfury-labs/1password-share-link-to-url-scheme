/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 */
export declare class EventEmitter {
    /**
     * Holds the assigned EventEmitters by name.
     *
     * @type {Object}
     * @private
     */
    _events: any;
    /**
     * Return a list of assigned event listeners.
     *
     * @param event The events that should be listed.
     * @returns a list of assigned event listeners
     */
    listeners(event: string): any[];
    /**
     * Emit an event to all registered event listeners.
     *
     * @param event The name of the event.
     * @returns Indication if we've emitted an event.
     */
    emit(event: string, a1?: any, a2?: any, a3?: any, a4?: any, a5?: any): boolean;
    /**
     * Register a new EventListener for the given event.
     *
     * @param event Name of the event.
     * @param fn Callback function.
     * @param context The context of the function.
     */
    on(event: string, fn: (...args: any[]) => any, context?: any): EventEmitter;
    /**
     * Add an EventListener that's only called once.
     *
     * @param event Name of the event.
     * @param fn Callback function.
     * @param context The context of the function.
     */
    once(event: any, fn: any, context: any): this;
    /**
     * Remove event listener.
     *
     * @param event The event we want to remove.
     * @param fn The listener that we need to find.
     * @param once Only remove once listeners.
     */
    off(event: string, fn: (...args: any[]) => any, once?: boolean): EventEmitter;
    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @param event The event for which to remove all listeners.
     */
    removeAllListeners(event: string): EventEmitter;
}
