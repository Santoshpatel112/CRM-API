import mongoose from "mongoose";

const ConnectDB= async ()=>{
   try {
     await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB database Connected SucessFully");
   } catch (error) {
     console.log("Unable to connect to the database ");
     console.log(error);
   }
}
export default ConnectDB;