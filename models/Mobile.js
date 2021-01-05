const mongoose = require('mongoose') 

const mobileSchema = new mongoose.Schema({ 
   brand: { 
      type: String, 
      required: true 
   }, 
   name: { 
      type: String, 
      required: true 
   },
   price: { 
      type: Number, 
      required: true 
   },
   model: { 
      type: String, 
      required: true 
   }, 
   ram: { 
      type: Number, 
      required: true 
   }, 
   rom: Number, 
   camera: Number, 
   batteryLife: Number, 
   weight: Number, 
   height: Number, 
   photos: String, 
   reviews: [{ 
      customerName: String, 
      body: String 
   }] 
}) 


const Mobile = mongoose.model('Mobile', mobileSchema); 
module.exports = Mobile; 