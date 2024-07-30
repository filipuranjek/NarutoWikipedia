const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/character', require('./routes/character'));
app.use('/api/tailed-beast', require('./routes/tailed-beast'));
app.use('/api/kekkei-genkai', require('./routes/kekkei-genkai'));

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});
