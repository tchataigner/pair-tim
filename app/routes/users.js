var express = require('express');
var crypto = require('crypto');
var router = express.Router();
var levelDB = require('modele/db')

/* GET users listing. */
router.post('/inscription/save', async function(req, res, next) {
  let formData = req.body;
  const userDB = levelDB.userDB
  let email = formData
  userDB.get(email, function (err, value) {
    if (err) {
      if (err.notFound) {
        formData.pwd =  crypto.createHash('sha256').update(formData.pwd).digest('hex');
        formData.state = true
        userDB.put(email,formData)
        return res.status(200)
      } 
    }
  })

 
  



  res.send('respond with a resource');
}).post('/connexion', function(req, res, next) {
  res.send('respond with a resource');
}).



module.exports = router;
