const moment = require('moment');

class Message {

    constructor(from, to, creationDate = new Date()) {
        this.from = from;
        this.to = to;
        this.creationDate = creationDate;
    }

    toString() {
        return `[${moment(this.creationDate).format('DD-MM-YYYY hh:mm:ss')}] ${this.from} -> ${this.to}`;
    }
}

module.exports = Message;