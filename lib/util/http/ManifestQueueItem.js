var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AQueueItem } from './AQueueItem';
export class ManifestQueueItem extends AQueueItem {
    constructor(url, init, resolve, reject) {
        super(url, init);
        this.resolve = resolve;
        this.reject = reject;
    }
    execute(retry) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            try {
                res = yield fetch(this.url, this.init).then(response => response.json());
                this.resolve(res);
            }
            catch (e) {
                if (!retry)
                    return this.execute(true);
                this.reject(e);
            }
        });
    }
}
