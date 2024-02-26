const { db, crudModel } = require('../model/model');

exports.create = async(req, res) => {
    try {
        if(!req.body.name){
            res.status(400).json({
                message: 'Title is empty!'
            });
            return;
        }
    
        const crud = new crudModel({
            name: req.body.name,
            description: req.body.description
        });
    
       const newData = await crud.save();
       res.status(200).json(newData);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}

exports.findAll = async(req, res) => {
    try {
        const data = await crudModel.find();
        res.status(200).json(data);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

exports.update = async(req, res) => {
    try {
        const updatedData = await crudModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            description: req.body.description
        }, {new: true});
        res.status(200).json(updatedData);
    } catch(error) {
        res.status(400).json({message: error.message})
    }
}

exports.delete = async(req, res) => {
    try {
        await crudModel.findByIdAndDelete(req.params.id);
        res.json({message: 'Data successfully deleted'})
    } catch(error) {
        res.status(500).json({message: error.message});
    }
}