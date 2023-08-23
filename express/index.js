const express = require('express');

// servere datalari yukleye bilmek ucun 
const app = express();
//serverin portunu belirleyip, bu portu dinlemek icin kullanacağız.
app.listen(3000, () => { console.log("3000 portu isleyir") });

// get methodu istifade etmek ucun  ******************************************************************
// home sehifesine gedende ne gostersin
app.get('/', (req, res) => {
    res.send("Salam")
})

// nested page (params) ******************************************************************
app.get('/profile/:name/:number', (req, res) => {
    // console.log(req.params);
    res.send(`Hos geldin ${req.params.name} ${req.params.number}`)
})

// Query ******************************************************************
//Query yeniki url /profile?isaresinden sonra yazilan
// http://localhost:3000/profile?name=sabinaM
// http://localhost:3000/profile?name=sabinaM&number=99
app.get('/profile', (req, res) => {
    // demek normal profile sehifesine gedende underfind verir
    // Hos geldin undefined undefined
    if (!req.query.name) return res.send("name yaz")
    if (!req.query.number) return res.send("number yaz")
    res.send(`Hos geldin ${req.query.name} ${req.query.number}`);
})