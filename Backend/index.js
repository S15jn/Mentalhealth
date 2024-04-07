// server/index.js
const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const initData = require("./init");
const Medical = require("./models/schema");
// abas ruk jaa kya hua hey kar le ho gaya na database me add aur kya karna he ek mint
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
// app.use(bodyParser.json());

// abhi na mentor check karne aane wale hai toh tere toh thode der rukna hoga mai tereko bas msg karu tab thik hai ok thik hai abhi toh kar le 
// Connect to MongoDB

let MongoURL = 'mongodb://127.0.0.1:27017/medicalData';

main().then(() => {
  console.log("Connected to DB");
})
.catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(MongoURL);
}

// let med1 = new Medical({
//   conditions: [
//     {
//       name: "rahul",
//       symptoms: ["mental"],
//       causes: ["psycho"],
//       treatment: ["no treatment"]
//     }
//   ]
// })
// apn mongoosh altas use kar rahe hai na yeh badme pehele dtabase add ho jaye okay

// med1.save().then((res) => {
//   console.log(res);
// })

// console.log(initData.data);

const initDB = async () => {
  await Medical.deleteMany({});
  await Medical.insertMany(initData.data);
  console.log("Database Was Initialized!");
};

initDB();
 

//  mongoose.connect('mongodb://localhost/my_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Example route with parameters
app.get('/api/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json({ userId });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
