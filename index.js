const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:' ));
db.once('open', function() {
    console.log('Connected To MongoDB...')
});

const Schema = mongoose.Schema;
const crudSchema = new Schema({
    name: String,
    description: String
});

const crudModel = mongoose.model('Crud', crudSchema);

app.get('/crud', async(req, res) => {
    try {
      const data = await crudModel.find();
      res.json(data);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/crud', async(req, res) => {
    const crud = new crudModel({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newData = await crud.save();
        res.status(200).json(newData);
    } catch(error) {
       res.status(400).json({message: error.message}); 
    }
})

app.put('/crud/:id', async(req,res) => {
    try {
        const updatedData = await crudModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description      
        }, {new: true});
        res.json(updatedData);
    } catch(error){
        res.status(400).json({message: error.message});
    }
})

app.delete('/crud/:id', async(req,res) => {
    try {
        await crudModel.findByIdAndDelete(req.params.id);
        res.json({message: 'Data successfully deleted'})
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

app.listen(PORT, function() { 
    console.log(`Server is listening on ${PORT}`)
});