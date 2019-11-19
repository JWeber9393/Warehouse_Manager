const products = require('./models')
const path = require('path')

module.exports = {
    allProducts: function (req,res) {
        console.log('***********Get All products***********')
        products.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    oneProduct: function (req,res) {
        console.log('***********Get One product***********')
        products.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    createProduct: function (req,res) {
        console.log('***********Creating product***********')
        products.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    editProduct: function (req,res) {
        console.log('***********Editing product***********')
        console.log(req.body)
        console.log(req.params.id)
        products.findOne({ _id: req.params.id })
            .then(data => {
                console.log(data);
                products.update(data, req.body)
                    .then(() => res.json({success: 'Success!!'}))
                console.log('Got data back from DB');
                console.log(data);
                res.json({success: 'Success!!'})
            })
            .catch(err => {
                console.log("iT bROKeDed");
                res.json(err)
            })
    },
    deleteProduct: function (req,res) {
        console.log('***********Deleting product***********')
        products.remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    reroute: function (req, res) {
        res.sendFile(path.resolve(__dirname, "../public/dist/public/index.html"))
    }
}