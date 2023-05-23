const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const UserRouter = require("./routes/user");
const uuid = require("uuid");
const jobRouter = require("./routes/jobs");
const ApplicationRouter = require("./routes/application");
const { bucket, uploader } = require("./config/helpers");

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
// routes
app.use("/api/auth", UserRouter);
app.use("/api/job", jobRouter);
app.use("/api/", ApplicationRouter);



app.listen(process.env.PORT, () => {
  console.log(`Server started on port http://localhost:${process.env.PORT}`);
});
