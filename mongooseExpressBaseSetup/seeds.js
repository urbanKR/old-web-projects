const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection open'.toUpperCase())
    })
    .catch(e => {
        console.log('MONGO CONNECTION ERROR: ', e)
    })

// const p = new Product({
//     name: 'apple',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e);
//     }) 

const seedProducts = [
    {
        name: 'apple',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'melon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'watermelon',
        price: 5.99,
        category: 'fruit'
    },
    {
        name: 'celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'cow milk',
        price: 3.79,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(r => {
        console.log(r)
    })
    .catch(e => {
        console.log(e)
    })