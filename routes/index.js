var express = require('express');
const { AfficherUser } = require('../others/requette');
const dataUser = require('../others/requette');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async function(req, res, next) {
      
 let user = await  dataUser.InsertionUser(req.body);
 if (user.success) {
    let afficher = await dataUser.AfficherUser()
    res.send(afficher)
 } else {
    console.log('error',user.erreur);
 }
 
     
});


module.exports = router;
