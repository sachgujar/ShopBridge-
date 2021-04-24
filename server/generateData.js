var faker = require('faker');

var database = { products: []};

for (var i = 1; i<= 100; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.datatype.number()

    // id: i,
    // title: faker.commerce.productName(),
    // firstName: faker.lorem.sentences(),
    // lastName: faker.lorem.sentences(),
    // email: "sachin@ggg.com",
    // isDeleting: false


  });
}

console.log(JSON.stringify(database)); 