const express = require('express')
const trackRoute = express.Router();

const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');
const cors = require('cors');

app.use(cors(
  {
    origin: "http://localhost:4200"
  }

));

app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});



mongoose.connect("mongodb://127.0.0.1:27017/MusicPlayer",{useNewUrlParser: true,  useUnifiedTopology: true })
.then( ()=>
        console.log("Connected to mongo Successful")
    );

app.use(express.json());
app.use(routes);
