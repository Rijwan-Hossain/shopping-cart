const express = require('express'); 
const { routeProtection } = require('../controllers/authController')
const { 
   createReview, 
   getSingleReview
} = require('../controllers/reviewController')
const route = express.Router({ mergeParams: true }); 

route.post('/', routeProtection, createReview) 
route.get('/:id', getSingleReview)

module.exports = route; 