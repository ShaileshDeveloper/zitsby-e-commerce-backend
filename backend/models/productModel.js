const mongoose = require('mongoose');


const productSchema =  mongoose.Schema({
   
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true,
    },
   
    price:{
        type:Number,
        required:true,
    },
    countInStock:{
        type:Number,
        required:true,
    }
})

const productModel = new mongoose.model('Product' , productSchema)
module.exports ={productModel , productSchema}