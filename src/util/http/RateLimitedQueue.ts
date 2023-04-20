import { AQueueItem } from './AQueueItem';

export class RateLimitedQueue<I extends AQueueItem> {
  private queue: I[];
  private rateLimit: number;
  private size: number;
  private timeout: number;

  constructor(rateLimit: number) {
    this.rateLimit = rateLimit;
    this.queue = [];
    this.size = 0;
    this.timeout = 0;
  }

  async add(item: I): Promise<void> {
    this.queue.push(item);
    this.size++;
    await new Promise(resolve => setTimeout(resolve, this.rateLimit * this.size + this.timeout));
    this.process();
  }

  private pop(): I | null {
    return this.queue.shift() ?? null;
  }

  private process() {
    this.pop()
      ?.execute()
      .then(timeout => {
        if (typeof timeout === 'number') this.timeout = timeout;
        this.size--;
      });
  }
}
