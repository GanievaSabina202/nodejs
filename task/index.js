const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const cors = require('cors')

app.use(cors());


const start = () => {
    try {
        mongoose.connect('mongodb+srv://sabina_mehdiyeva:sabina@cluster0.cq3tx99.mongodb.net/')
        app.listen(PORT, (req, res) => {
            console.log('listening...')
        });
    } catch (error) {
        console.log(error)
    }
}

start()


const Routers = require('./routes/taskRouter.js');
app.use('/', Routers)