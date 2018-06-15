

class Counter {

    static get COUNT_INTERVAL_MS() {
        return 1000;
    }

    constructor(count = 0) {
        this.count = count;
        this.intervalCountId = undefined;
    }

    countUp() {
        return ++this.count;
    }

    start() {
        if (!this.isRunning()) {
            this.intervalCountId = setInterval(() => {
                console.log(this.countUp());
            }, Counter.COUNT_INTERVAL_MS)
        }
    }

    stop() {
        clearInterval(this.intervalCountId);
        this.intervalCountId = undefined;
    }

    isRunning() {
        return this.intervalCountId !== undefined;
    }
}

module.exports = Counter;