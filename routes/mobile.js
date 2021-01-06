const express = require('express'); 

const { routeProtection } = require('../controllers/authController')
const {
   createMobile, 
   getAllMobile, 
   getSingleMobile, 
   updateMobile, 
   deleteMobile, 
   createReview
} = require('../controllers/mobileController') 
const route = express.Router(); 

route.post('/', routeProtection, createMobile) 
route.get('/', getAllMobile) 
route.get('/:id', getSingleMobile) 
route.patch('/:id', routeProtection, updateMobile) 
route.delete('/:id', routeProtection, deleteMobile) 

module.exports = route; 