// const mongoose = require('mongoose');

const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://saijadhav:athusai1234@cluster0.cmnlpzp.mongodb.net/GoFoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    // Connect to MongoDB with updated options
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Access the "gofood" collection
    const gofoodCollection = mongoose.connection.db.collection("gofood");

    // Fetch data from the "gofood" collection
    const data = await gofoodCollection.find({}).toArray();

    // Log the fetched data to the console
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
