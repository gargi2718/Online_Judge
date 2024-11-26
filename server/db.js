const mongoose = require("mongoose");
const dotenv = require ('dotenv');

dotenv.config();

const DBConnection = async () => {
    const MONGO_URI = "mongodb+srv://gargi2001ee89:12345@cluster0.u733clp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
   // const MONGO_URI = process.env.MONGODB_URL;
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

module.exports =  {DBConnection};
