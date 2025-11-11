const dotenv = require("dotenv");
// Loads environment variables from a .env file into process.env   Instead of hardcoding sensitive data (like passwords or API keys), you store them in a .env file.
dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

// deafult browser block request coming from different origin(domain,port or protocol) but cors help to overcome this  later modify it for particular domain
app.use(cors());

app.get('/modified',(req,res)=>{
    res.send('Hello world');
})

module.exports = app;