// Connecting to DB

const mongoose = require("mongoose");
const moment = require("moment");

var curTime = moment().utcOffset("+05:30").format('MMMM Do YYYY, h:mm:ss a')

function initializeDBConnection() {
mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(() => console.log("Successfully Connected at", curTime ))
.catch(error => console.error("Mongoose connection failed", error))
}

module.exports = { initializeDBConnection }