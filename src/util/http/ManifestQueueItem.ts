import { AQueueItem } from './AQueueItem';

export class ManifestQueueItem extends AQueueItem {
  readonly resolve: (value: {}) => void;
  readonly reject: (value: Error) => void;

  constructor(
    url: string,
    init: RequestInit,
    resolve: (value: {}) => void,
    reject: (value: Error) => void
  ) {
    super(url, init);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retry?: boolean): Promise<void> {
    let res: {};
    try {
      res = await fetch(this.url, this.init).then(response => response.json() as {});
      this.resolve(res);
    } catch (e) {
      if (!retry) return this.execute(true);
      this.reject(e as Error);
    }
  }
}
