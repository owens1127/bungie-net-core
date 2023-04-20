export declare abstract class AQueueItem {
    readonly url: string;
    readonly init: RequestInit;
    constructor(url: string, init: RequestInit);
    abstract execute(retry?: boolean): Promise<number | void>;
}
