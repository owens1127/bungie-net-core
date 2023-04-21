import { AQueueItem } from './AQueueItem';
import request, { AxiosRequestConfig } from 'axios';

export class ManifestQueueItem extends AQueueItem {
  readonly resolve: (value: {}) => void;
  readonly reject: (value: Error) => void;

  constructor(
    url: string,
    config: AxiosRequestConfig,
    resolve: (value: {}) => void,
    reject: (value: Error) => void
  ) {
    super(url, config);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retry?: boolean): Promise<void> {
    try {
      const res = await request(this.url, this.config);
      this.resolve(res.data);
    } catch (e) {
      if (!retry) return this.execute(true);
      // @ts-ignore
      this.reject(e.response?.data);
    }
  }
}
