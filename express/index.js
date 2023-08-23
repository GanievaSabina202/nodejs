const express = require('express');

// servere datalari yukleye bilmek ucun 
const app = express();
//serverin portunu belirleyip, bu portu dinlemek icin kullanacağız.
app.listen(3000, () => { console.log("3000 portu isleyir") });

// get methodu istifade etmek ucun 
app.get('/', (req, res) => {
    res.send("Salam")
})

app.get('/profile',(req,res)=>{
    res.send("Bura profile")
})