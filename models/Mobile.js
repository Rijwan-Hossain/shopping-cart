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
      body: String, 
      userInfo: { 
         type: mongoose.Schema.ObjectId, 
         ref: 'User' 
      } 
   }] 
}) 


const Mobile = mongoose.model('Mobile', mobileSchema); 
module.exports = Mobile; 