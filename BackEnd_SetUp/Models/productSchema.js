import  mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description:String,
    category:String,
    image:String,
    rating:Number
})

const productModel = mongoose.model("ProductsCollections", productSchema);

export default productModel;