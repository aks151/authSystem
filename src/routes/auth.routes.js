const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    res.send(`${req.body.userid} is received`);
    console.log(`this -> ${req.body}`)
})

module.exports = router;