const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const cors = require("cors");

const router = express.Router();
const path = require("path");

dotenv.config();

const port = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;

console.log(DATABASE_URL);
mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(port, () => {
  console.log("Backend server is running!");
});
