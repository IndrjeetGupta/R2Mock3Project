const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : String,
    imageUrl : String,
    experience : String,
    location : String,
    date : String,
    slots : String,
    fee : String,
  
})

const ProductModel = mongoose.model("data", productSchema)

module.exports = {ProductModel}

