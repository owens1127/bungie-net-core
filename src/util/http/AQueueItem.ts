export abstract class AQueueItem {
  readonly url: string;
  readonly config: RequestInit;

  constructor(url: string, config: RequestInit) {
    this.url = url;
    this.config = config;
  }

  abstract execute(retrying?: boolean): Promise<number | void>;
}
