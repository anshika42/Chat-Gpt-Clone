const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); //port handle krne ke liye
const bodyParser = require("body-parser"); //json data frontend pr send krne ke liye
const colors = require("colors");
const dotenv = require("dotenv"); //security
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");
// routes path
const authRoutes = require("./routes/authRoutes");

dotenv.config();

// mongo connection
connectDB();

//rest obj
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoutes"));

//listen server
app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white
  );
});
