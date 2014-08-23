var express = require('express');
var router = express.Router();

var myprofile = require('../controllers/myprofile.js');


router.get('/myprofile', myprofile);


module.exports = router;
