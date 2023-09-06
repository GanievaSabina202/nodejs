const express = require('express');
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Routers = require('./routes/taskRouter.js');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler.js');
const app = express();
// env
require("dotenv").config();
//cors
app.use(bodyParser.json())
// middlewares
app.use(cors());

// route middlewares
app.use('/', Routers)

// error middleware
app.use(errorHandler);



// connect to db and listen on port 4000
const start = () => {
    try {
        mongoose.connect('mongodb+srv://sabina_mehdiyeva:sabina@cluster0.cq3tx99.mongodb.net/')
        app.listen(4000, (req, res) => {
            console.log('listening...')
        });
    } catch (error) {
        console.log(error)
    }
}

start()

