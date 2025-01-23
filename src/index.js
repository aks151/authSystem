const express = require('express');
require('dotenv').config()

const authRouter = require('./routes/auth.routes');

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 'extended: false' is usually fine for simple cases


app.listen(PORT, () => {
    console.log(`listening on port kramank: ${PORT}`)
})

app.use('/', authRouter);

// app.get('/', (req, res) => {
//     res.send("changing life one late night at a time");
// })

