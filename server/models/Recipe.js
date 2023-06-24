const mongoose = require('mongoose')
const Recipe = new mongoose.Schema({
    title:{type:String, required:true},//{type:mongoose.Schema.Types.objectId,ref:'DonationType'},
    description :{type:String, required:true},//{type:mongoose.Schema.Types.objectId, ref:'Users',required:true},
    ingredients:{type:String},
    instructions:{type:String},
    imageFilePath:{type:String},
})

module.exports = mongoose.model('Recipe', Recipe)