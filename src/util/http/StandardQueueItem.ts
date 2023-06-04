import { BungieAPIError } from '../../errors/BungieAPIError';
import { PlatformErrorCodes } from '../../models';
import { BungieNetResponse } from '../../interfaces/server-response';
import { AQueueItem } from './AQueueItem';
import fetch from 'isomorphic-fetch';

const timeoutCodes = [PlatformErrorCodes.DestinyDirectBabelClientTimeout];

export class StandardQueueItem<T> extends AQueueItem {
  readonly resolve: (value: BungieNetResponse<T>) => void;
  readonly reject: (value: Error) => void;

  constructor(
    url: string,
    config: RequestInit,
    resolve: (value: BungieNetResponse<T>) => void,
    reject: (value: Error) => void
  ) {
    super(url, config);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retrying?: boolean): Promise<number> {
    const start = Date.now();
    let res: BungieNetResponse<T>;
    try {
      const response = await fetch(this.url, this.config);
      res = (await response.json()) as BungieNetResponse<T>;
    } catch (e) {
      // @ts-ignore
      if (e.response?.data?.Message) {
        // @ts-ignore
        res = e.response?.data;
      } else {
        this.reject(e as Error);
        return 0;
      }
    }
    res.ResponseTime = Date.now() - start;
    if (res.ErrorCode === PlatformErrorCodes.Success) {
      this.resolve(res);
    } else if (!retrying && timeoutCodes.includes(res.ErrorCode)) {
      return this.execute(true);
    } else {
      this.reject(new BungieAPIError(res));
    }
    return res.ThrottleSeconds * 1000;
  }
}
