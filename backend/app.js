const express = require("express");
const app = express();
const { jsonMiddleware,loggerMiddleware } = require("./middlewares/middlewares");
require("dotenv").config();
const ConnectDB = require("./DB/ConnectDB");
const routes = require("./router/index")
const PORT = process.env.PORT||5004;
const {loadLogs} = require("./utils/loadLog")
const cors = require("cors")

//DB Connection
//DB initialising
ConnectDB();

//middleware using
app.use(jsonMiddleware);
app.use(loggerMiddleware);
app.use(cors())

//To be executed once so that the JSON is loaded nito the DB

// loadLogs();

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server Running at ${PORT}`);
  require("./model/index");
});