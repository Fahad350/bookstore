const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require("./routes/books");
const userRoute = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDbUri;

try {
  mongoose.connect(URI);
  console.log("connected to mongodb");
} catch (error) {
  console.log("error:", error);
}
app.use(express.json());
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

module.exports = app;
