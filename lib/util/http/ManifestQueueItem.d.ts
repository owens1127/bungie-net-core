import { AQueueItem } from './AQueueItem';
import { AxiosRequestConfig } from 'axios';
export declare class ManifestQueueItem extends AQueueItem {
    readonly resolve: (value: {}) => void;
    readonly reject: (value: Error) => void;
    constructor(url: string, config: AxiosRequestConfig, resolve: (value: {}) => void, reject: (value: Error) => void);
    execute(retry?: boolean): Promise<void>;
}
