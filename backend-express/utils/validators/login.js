const {body} = require('express-validator')

exports.validatedLogin=[
  body('email').isEmail().withMessage("Email tidak valid"),
  body('password').isLength({min:6}).withMessage('Password harus lebih dari 6 karakter'),
  // (req,res,next)=>{
  //   const errors = validationResult(req);
  //   if(!errors.isEmpty()){
  //     res.status(400).json({errors:errors.array()})
  //   }
  //   next()
  // }
]

