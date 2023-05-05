const express = require('express')
const router = express.Router();
const {createFilm} = require('./controller')

router.get('/api/new' , (req, res) => {
    console.log(req.body);
    res.send('ok')
})

module.exports = router