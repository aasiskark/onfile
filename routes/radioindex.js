var express = require('express');
var router = express.Router();

var radioController = require('../controllers/radioController');

/* GET home page. */


router.get('/', radioController.list);


router.get('/add', radioController.add);  // Radio add page response



router.get('/:id', radioController.show);


router.post('/addAction', radioController.create);


router.get('/edit/:id', radioController.edit);

router.post('/editAction', radioController.update);
// radio logo upload

//router.post('/upload', radioController.upload);
//

router.get('/delete/:id', radioController.remove);



module.exports = router;



