import  mongoose  from "mongoose";

try {
    mongoose.connect("mongodb+srv://MoleWeb:Ask23Mum%60sSon@cluster0.xwl0jz7.mongodb.net/UserData");
    console.log(`Database is connected successful`);
    
}catch (error) {
    console.log(error);
}