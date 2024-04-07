 const mongoose = require("mongoose");

 
const databaseSchema = mongoose.Schema({
  conditions: [
    {
      name: "string",
      symptoms: [],
      causes: [],
      treatment: []
    }
  ]
})


const Medical = mongoose.model("Medical" , databaseSchema);

module.exports = Medical;


 
