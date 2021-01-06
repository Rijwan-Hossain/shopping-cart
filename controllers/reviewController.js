const Review = require('../models/Review') 
const Mobile = require('../models/Mobile')

const createReview = async (req, res) => {
   try {
      const reviewbody = req.body.review
      const { mobileId } = req.params
      
      // Review Create
      const review = await Review.create({
         review: reviewbody, 
         user: req.user._id
      }) 

      if(!review) {
         return res.json({
            status: 'Fail', 
            message: 'Cannot create the review'
         })
      }
      

      // Update mobile db
      // put review ID in mobile reviews[]
      const mobile = await Mobile.findById(mobileId)
      mobile.reviews.push(review._id) 
      const savedMobile = await mobile.save() 

      // response 
      res.json({ 
         status: 'success',
         review, 
         mobile: savedMobile
      }) 
   } 
   catch (error) {
      res.json({
         status: 'Fail',
         error
      })
   }
} 


const getAllReviews = async (req, res) => {
   try {
      const review = await Review.find().populate('user') 
      res.json({ 
         status: 'success',
         review 
      }) 
   } 
   catch (error) { 
      res.json({ 
         status: 'Fail',
         error
      }) 
   } 
} 

const getSingleReview = async (req, res) => {
   try {
      const review = await Review.findById(req.params.id).populate({path: 'user', model: 'User'})
      res.json({ 
         status: 'success',
         review 
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
   createReview, 
   getAllReviews, 
   getSingleReview
}