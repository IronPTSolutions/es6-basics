const { TextMessage, ImageMessage, Counter } = require('./models/index');

const messages = [
    new TextMessage('Carlos', 'Pedro', 'Hi!'),
    new TextMessage('Pedro', 'Pedro', 'Bonjour!'),
    new ImageMessage('Pedro', 'Carlos', 'http://learn.ironhack.com/images/logo.png'),
];

messages.forEach(message => console.log(message.toString()));

console.log(messages.filter(message => message instanceof TextMessage));


//const counter = new Counter();
//counter.start();