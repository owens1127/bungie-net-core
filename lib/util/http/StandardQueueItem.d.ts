import { BungieNetResponse } from '../server-response';
import { AQueueItem } from './AQueueItem';
import { AxiosRequestConfig } from 'axios';
export declare class StandardQueueItem<T> extends AQueueItem {
    readonly resolve: (value: BungieNetResponse<T>) => void;
    readonly reject: (value: Error) => void;
    constructor(url: string, config: AxiosRequestConfig, resolve: (value: BungieNetResponse<T>) => void, reject: (value: Error) => void);
    execute(retry?: boolean): Promise<number>;
}
