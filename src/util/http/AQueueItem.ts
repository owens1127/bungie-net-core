import { AxiosRequestConfig } from 'axios';

export abstract class AQueueItem {
  readonly url: string;
  readonly config: AxiosRequestConfig;

  constructor(url: string, config: AxiosRequestConfig) {
    this.url = url;
    this.config = config;
  }

  abstract execute(retry?: boolean): Promise<number | void>;
}
