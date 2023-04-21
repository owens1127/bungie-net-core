import { AxiosRequestConfig } from 'axios';
export declare abstract class AQueueItem {
    readonly url: string;
    readonly config: AxiosRequestConfig;
    constructor(url: string, config: AxiosRequestConfig);
    abstract execute(retry?: boolean): Promise<number | void>;
}
