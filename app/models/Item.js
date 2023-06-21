const { Schema, model } = require('mongoose')

module.exports = model('Item', new Schema({
    itemName: {
        type: String,
        require: true,
    },
    itemPrice: {
        type: Number,
        require: true,
    },
    itemDescription: {
        type: String,
        require: true,
    },
    itemImage: {
        type: String,
        require: true,
    },
    createdOn: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
}))