import { BungieNetResponse } from '../server-response';
import { AQueueItem } from './AQueueItem';
export declare class StandardQueueItem<T> extends AQueueItem {
    readonly resolve: (value: BungieNetResponse<T>) => void;
    readonly reject: (value: Error) => void;
    constructor(url: string, init: RequestInit, resolve: (value: BungieNetResponse<T>) => void, reject: (value: Error) => void);
    execute(retry?: boolean): Promise<number>;
}
