// MongoDB 연결
const config = require('../config/config.js');
const mongoose = require('mongoose');

const { url } = config;
mongoose.connect(url);
const db = mongoose.connection;

// 스키마 설정
const Schema = mongoose.Schema;
const crudSchema = new Schema({
    name: String,
    description: String
})

// 모델 설정
const crudModel = mongoose.model('crud', crudSchema);


module.exports = { db, crudModel };



