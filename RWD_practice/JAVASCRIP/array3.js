let users = [
    {
        id: 1,
        name: 'John',
        mail: 'john@gmail.com'
    },
    {
        id:2,
        name: 'Mary',
        mail: 'mary@gmail.com'
    },
    {
        id:3,
        name: 'Xavier',
        mail: 'xaxaxa@gmail.com'
    }
];

let drinks = [
    {
        id: 1,
        name: '紅茶',
        price: 20
    },
    {
        id: 2,
        name: '綠茶',
        price: 20
    },
    {
        id: 3,
        name: '奶茶',
        price: 30
    },
    {
        id: 4,
        name: '珍珠奶茶',
        price: 50
    },
    {
        id: 5,
        name: '拿鐵',
        price: 70
    },
];

// foreach
users.forEach(function(data){
    console.log(data.mail);
})

// map
let drinkName = drinks.map(function(data){
    return data.name;
})
let drinkPrice = drinks.map(function(data){
    return data.price;
})
console.log(drinkName);
console.log(drinkPrice);