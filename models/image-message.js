const Message = require('./message');

class ImageMessage extends Message {

    constructor(from, to, src, title = 'Image') {
        super(from, to);
        this.src = src;
        this.title = title;
    }

    toString() {
        return `${super.toString()}: ![${this.title}](${this.src})`;
    }
}

module.exports = ImageMessage;