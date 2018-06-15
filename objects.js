const user = {
    name: 'Jonh',
    lastName: 'Doe',
    address: {
        city: 'Madrid',
        street: 'C/ Falsa 123',
        zipcode: 28220
    }
};

let { name, lastName, address: { city } } = user;
console.log(name);
console.log(city);

const fruits = ['Orange', 'Apple', 'pear', 'Peach'];
const [,, pear, peach, kiwi = 'Nope'] = fruits;
console.log(peach);
console.log(kiwi);

const numbers = [1 , 2, 3, 4, 5];

const mix = [...fruits, ...numbers];
console.log(mix);


function capitalize(...args) {
    const caps = args.map(function(arg) {
        return arg[0].toUpperCase() + arg.slice(1).toLowerCase();
    });
    return caps.length > 1 ? caps : caps[0];
}

console.log(capitalize('madrid'));
console.log(capitalize(...fruits));