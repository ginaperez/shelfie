const productData = require("../src/App");

module.exports = {
    getInventory: (req, res, next) => {
        console.log('It worked!!!! Woohoo!!!!');
        res.status(200).send(productData)
    },
    postProduct: (req, res, next) => {
        console.log('name', 'price', 'imageURL');
        res.status(200).send(productData)
    }
};