const chalk = require('chalk');

const user = {
    name: 'John',
    lastName: 'Doe'
}

const message = `name: ${chalk.green(user.name)}
last name: ${chalk.green(user.lastName)}`;

console.log(message);