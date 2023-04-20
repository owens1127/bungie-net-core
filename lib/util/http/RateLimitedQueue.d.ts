import { AQueueItem } from './AQueueItem';
export declare class RateLimitedQueue<I extends AQueueItem> {
    private queue;
    private rateLimit;
    private size;
    private timeout;
    constructor(rateLimit: number);
    add(item: I): Promise<void>;
    private pop;
    private process;
}
