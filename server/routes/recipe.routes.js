let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    router = express.Router();

    const DIR = '../public/';
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "public");
        },
        filename: (req, file, cb) => {
            const fileName = file.originalname.toLowerCase().split(' ').join('-');
            cb(null, fileName)
        }
    });
    var upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
            }
        }
    });
   
    
let Recipe = require('../models/Recipe');
router.post('/add-recipe',(req, res) => {
    const {title, description,instructions,ingredients } = req.body;
    const recipe = new Recipe({
        title,
        description,
        instructions,
        ingredients,
        imageFilePath:""
    })
    recipe.save().then(result => {
        res.status(201).json({
            message: "Recipe Added Successfully!",
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
         });
    })
});

router.get('/', (req, res, next) => {  
    Recipe.find().then(data => {
      res.status(200).json({
        recipes: data
      });
    });
  }
)

router.delete('/:id', (req, res, next) => {
    Recipe.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Recipe deleted!" });
    });
  }
)

// router.post('/',(req, res) => {
//     const { title, description, goalAmount,ngoEmail,ngoId } = req.body;
   
//     const url = req.protocol + '://' + req.get('host')
//     const imageFilePath = req.file.filename;
//     const fundraisingpost = new FundraisingPost({
//         title,
//         description,
//         goalAmount,
//         imageFilePath,
//         raisedAmount:0,
//         createdAt:new Date(),
//         ngoEmail,
//         ngoId
//     });
//     fundraisingpost.save().then(result => {
//         res.status(201).json({
//             message: "User registered successfully!",
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// })
// router.get('/', (req, res, next) => {

//        Users.find({roleId:"3", active:true})
//       .then(posts => {
        
//         res.status(200).json(posts);
//       })
//       .catch(error => {
//         res.status(500).json({
//           message: "An error occurred while retrieving posts.",
//           error: error
//         });
//       });
        
    
//   });


module.exports = router;