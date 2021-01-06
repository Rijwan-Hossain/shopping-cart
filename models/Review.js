const mongoose = require('mongoose') 

const reviewSchema = new mongoose.Schema({
   review: String,
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: [true, 'Only a login user can review']
   } 
}) 


const Review = mongoose.model('review', reviewSchema); 
module.exports = Review; 