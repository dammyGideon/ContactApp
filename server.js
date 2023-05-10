const express = require("express");
const connectionDB = require('./config/dbConnection');
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectionDB();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoute"))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`);
});