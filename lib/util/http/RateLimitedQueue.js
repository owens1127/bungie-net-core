var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class RateLimitedQueue {
    constructor(rateLimit) {
        this.rateLimit = rateLimit;
        this.queue = [];
        this.size = 0;
        this.timeout = 0;
    }
    add(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.queue.push(item);
            this.size++;
            yield new Promise(resolve => setTimeout(resolve, this.rateLimit * this.size + this.timeout));
            this.process();
        });
    }
    pop() {
        var _a;
        return (_a = this.queue.shift()) !== null && _a !== void 0 ? _a : null;
    }
    process() {
        var _a;
        (_a = this.pop()) === null || _a === void 0 ? void 0 : _a.execute().then(timeout => {
            if (typeof timeout === 'number')
                this.timeout = timeout;
            this.size--;
        });
    }
}
