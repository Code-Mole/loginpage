import userModel from "../Models/userSchema.js";


const getUser = async (req,res)=>{
    // res.send("Get User is working");
    try{
        const data = await userModel.find();
        res.send({data:data,message:"Data is fetched"});
    }catch(error){
        console.log(error);
        res.send("Something went wrong");
    }
};


const postUser = async (req,res)=>{
    // res.send("Post User is working");
    const username = req.body.username;
    const password = req.body.password;
    try{
      userModel.create(req.body);
      res.send({message:"Data is inserted"});
    }catch(err){
        console.log(err);
        res.send("Something went wrong");
    }
};


export {getUser,postUser};