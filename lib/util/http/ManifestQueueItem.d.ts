import { AQueueItem } from './AQueueItem';
export declare class ManifestQueueItem extends AQueueItem {
    readonly resolve: (value: {}) => void;
    readonly reject: (value: Error) => void;
    constructor(url: string, init: RequestInit, resolve: (value: {}) => void, reject: (value: Error) => void);
    execute(retry?: boolean): Promise<void>;
}
