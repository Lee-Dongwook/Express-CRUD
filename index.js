const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const { db } = require('./src/app/model/model');
const router = require('./src/app/routes/routes');

const corsOptions = {
    origin: 'http://localhost:3000'
}

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(router);

dotenv.config();
const PORT = process.env.PORT || 4000;

db.on('error', console.error.bind(console, 'connection error:' ));
db.once('open', function() {
    console.log('Connected To MongoDB...')
});

app.get('/', (req, res) => {
    res.json({message: `Server is running on port ${PORT}`});
});

app.listen(PORT, function() { 
    console.log(`Server is listening on ${PORT}`)
});