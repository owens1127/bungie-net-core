import { AQueueItem } from './AQueueItem';

export class ManifestQueueItem extends AQueueItem {
  readonly resolve: (value: {}) => void;
  readonly reject: (value: Error) => void;

  constructor(
    url: string,
    config: RequestInit,
    resolve: (value: {}) => void,
    reject: (value: Error) => void
  ) {
    super(url, config);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retrying?: boolean): Promise<void> {
    try {
      const response = await fetch(this.url, this.config).then(res => res.json());
      this.resolve(response);
    } catch (e) {
      if (!retrying) return this.execute(true);
      // @ts-ignore
      this.reject(e.response?.data);
    }
  }
}
