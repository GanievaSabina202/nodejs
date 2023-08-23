const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello`)
});

router.get('/esya', (req, res) => {
    let name = req.query.name
    res.send(`Store item is ${name}`);
});


module.exports = router;