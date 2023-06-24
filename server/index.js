const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const app = express()

const Recipe = require('./models/Recipe')

const recipeRoutes = require('./routes/recipe.routes')

// Configure middleware-*
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://hans:hans@cluster0.axxfcfd.mongodb.net/")
.then(()=>{
    //listener for requests
    app.listen(process.env.PORT || 5000,()=>{
        console.log("connected to database & listening on port")
    })
})
.catch((error)=>{
    console.log("This is the error: ",error)
});


app.use('/api/',recipeRoutes)

// app.use('/add-recipe',(req, res) => {
//     const {title, description,instructions,ingredients } = req.body;
//     const recipe = new Recipe({
//         title,
//         description,
//         instructions,
//         ingredients,
//         imageFilePath:""
//     })
//     recipe.save().then(result => {
//         res.status(201).json({message:"added successfully"})
//     })
//     .catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//          });
//     })
// })

