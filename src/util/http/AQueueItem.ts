export abstract class AQueueItem {
  readonly url: string;
  readonly init: RequestInit;

  constructor(url: string, init: RequestInit) {
    this.url = url;
    this.init = init;
  }

  abstract execute(retry?: boolean): Promise<number | void>;
}
