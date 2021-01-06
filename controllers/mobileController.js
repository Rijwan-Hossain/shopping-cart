const Mobile = require('../models/Mobile')

const createMobile = async (req, res) => {
   try { 
      const mobile = await Mobile.create(req.body) 
      res.json({ 
         status: 'Success', 
         info: mobile 
      }) 
   } 
   catch (error) { 
      res.json({ 
         status: 'Fail',
         error
      }) 
   } 
} 

const getAllMobile = async (req, res) => { 
   try { 
      const mobile = await Mobile.find() 
      res.json({ 
         status: 'Success', 
         info: mobile 
      }) 
   } 
   catch (error) { 
      res.json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

const getSingleMobile = async (req, res) => { 
   try { 
      const {id} = req.params 
      const mobile = await Mobile.findById(id)
         .populate({
            path: 'reviews', 
            model: 'Review', 
            populate: {
               path: 'user', 
               model: 'User' 
            }
         }) 
      console.log(mobile);
      // const a = await mobile.populate('reviews')
      // console.log(a);
      res.json({ 
         status: 'Success', 
         info: mobile 
      }) 
   } 
   catch (error) { 
      res.json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

const updateMobile = async (req, res) => {
   try { 
      const {id} = req.params 
      const mobile = await Mobile.findByIdAndUpdate({_id: id}, req.body, {new: true}) 
      res.json({ 
         status: 'Updated Successfully', 
         info: mobile 
      }) 
   } 
   catch (error) { 
      res.json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

const deleteMobile = async (req, res) => {
   try { 
      const {id} = req.params 
      const mobile = await Mobile.findByIdAndDelete(id) 
      res.json({ 
         status: 'Deleted Successfully', 
         info: mobile 
      }) 
   } 
   catch (error) { 
      res.json({ 
         status: 'Fail', 
         error 
      }) 
   } 
} 

module.exports = { 
   createMobile, 
   getAllMobile, 
   getSingleMobile, 
   updateMobile, 
   deleteMobile 
} 