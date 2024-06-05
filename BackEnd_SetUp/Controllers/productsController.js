import productModel from "../Models/productSchema.js"

const getProduct = async (req,res)=>{
    // res.send("get product")
    try{
        const Data = await productModel.find();
        res.send(Data);
    }catch(error){
        console.log(error);
        res.send(`an error occured`);
    }
    
}

const postProduct = async (req,res)=>{
    // res.send("post product")
     const id = req.body.id;
     const title = req.body.title;
     const price = req.body.price;
     const description = req.body.description;
     const category = req.body.category;
     const image = req.body.image;
     const rating = req.body.rating;

    try{
     await productModel.create({title,price,description,category,image,rating});
     res.send('Data inserted successfully');    
    }catch(error){
        console.log(error);
        res.send(`an error occured`);
    }
}

const putProduct = async (req,res)=>{
    res.send(`put product with ${req.params.id}`)
}

const deleteProduct = async (req,res)=>{
    res.send(`delete product with ${req.params.id }` )
}

export {getProduct,postProduct,putProduct,deleteProduct}