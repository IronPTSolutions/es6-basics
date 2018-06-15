const Message = require('./message');

class TextMessage extends Message {
    
    constructor(from, to, text = '') {
        super(from, to);
        this.text = text;
    }

    toString() {
        return `${super.toString()}: ${this.text}`;
    }
}

module.exports = TextMessage;