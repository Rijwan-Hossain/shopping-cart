const mongoose = require('mongoose') 

const mobileSchema = new mongoose.Schema({ 
   brand: { 
      type: String, 
      required: true 
   }, 
   model: { 
      type: String, 
      required: true 
   }, 
   price: { 
      type: Number, 
      required: true 
   },
   ram: { 
      type: String, 
      required: true 
   }, 
   rom: String, 
   camera: String, 
   batteryLife: String, 
   weight: String, 
   height: String, 
   photos: String, 
   reviews: [{ 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Review' 
   }] 
}) 

// mobileSchema.pre(/^find/, function (next) { 
//    console.log('in pre'); 
//    this.populate({ 
//       path: 'reviews' 
//    }) 

//    next() 
// }) 

const Mobile = mongoose.model('Mobile', mobileSchema); 
module.exports = Mobile; 