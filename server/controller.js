module.exports = {
    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong"});
            console.log(err)
        });
    },
    postProduct: (req, res, next) => {
        const dbInstance = req.app.post('db');
        dbInstance.create_product()
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong"});
            console.log(err)
        });
    },
    deleteProduct: (req, res, next) => {
        
    }
};