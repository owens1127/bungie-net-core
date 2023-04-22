import { BungieAPIError } from '../../errors/BungieAPIError';
import { PlatformErrorCodes } from '../../models';
import { BungieNetResponse } from '../../interfaces/server-response';
import { AQueueItem } from './AQueueItem';
import request, { AxiosError, AxiosRequestConfig } from 'axios';

const timeoutCodes = [PlatformErrorCodes.DestinyDirectBabelClientTimeout];

export class StandardQueueItem<T> extends AQueueItem {
  readonly resolve: (value: BungieNetResponse<T>) => void;
  readonly reject: (value: Error) => void;

  constructor(
    url: string,
    config: AxiosRequestConfig,
    resolve: (value: BungieNetResponse<T>) => void,
    reject: (value: Error) => void
  ) {
    super(url, config);
    this.resolve = resolve;
    this.reject = reject;
  }

  async execute(retry?: boolean): Promise<number> {
    const start = Date.now();
    let res: BungieNetResponse<T>;
    try {
      res = (await request(this.url, this.config)).data;
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
    } else if (!retry && timeoutCodes.includes(res.ErrorCode)) {
      return this.execute(true);
    } else {
      this.reject(new BungieAPIError(res));
    }
    return res.ThrottleSeconds * 1000;
  }
}
