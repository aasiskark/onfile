var express = require('express');
var router = express.Router();
let radioapicontroller = require('../controllers/radioapiController');

/*
 * GET
 */
router.get('/', radioapicontroller.list);

/*
// * GET 
//    */
//   router.get('/:id', radioapicontroller.show);
//   
//   /*
//    * POST
//    */
//   router.post('/', radioapicontroller.create);
//   
//   /*
//    * PUT
//    */
//   router.put('/:id', radioapicontroller.update);
//   
//   /*
//    * DELETE
//    */
//   router.delete('/:id', radioapicontroller.remove);
//