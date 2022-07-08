var express = require('express');
const dataUser = require('../others/requette');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
      
      dataUser.InsertionUser(req.body)
         .then(success =>{
             res.send('enregistrer') 
           })
         .catch(error =>{
                    console.log(error);
                })
});

module.exports = router;
