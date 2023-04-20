import { BungieAPIError } from '../../errors/BungieAPIError';
import { PlatformErrorCodes } from '../../schemas';
import { BungieNetResponse } from '../server-response';
import { AQueueItem } from './AQueueItem';

const timeoutCodes = [PlatformErrorCodes.DestinyDirectBabelClientTimeout];

export class StandardQueueItem<T> extends AQueueItem {
  readonly resolve: (value: BungieNetResponse<T>) => void;
  readonly reject: (value: Error) => void;

  constructor(
    url: string,
    init: RequestInit,
    resolve: (value: BungieNetResponse<T>) => void,
    reject: (value: Error) => void
  ) {
    super(url, init);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retry?: boolean): Promise<number> {
    const start = Date.now();
    let res: BungieNetResponse<T>;
    try {
      res = await fetch(this.url, this.init).then(
        response => response.json() as Promise<BungieNetResponse<T>>
      );
    } catch (e) {
      this.reject(e as Error);
      return 0;
    }
    res.ResponseTime = Date.now() - start;
    if (res.ErrorCode === PlatformErrorCodes.Success) {
      this.resolve(res);
    } else if (!retry && timeoutCodes.includes(res.ErrorCode)) {
      return this.execute(true);
    } else {
      this.reject(new BungieAPIError(res));
    }
    return res.ThrottleSeconds * 1000;
  }
}
