const express = require('express');
const app = express();

const authService = (req, res) => {
    res.send(`${req.body.userid} is received`);
    console.log(`this -> ${req.body}`)

}

module.exports = authService;