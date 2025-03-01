const asyncHandler =  function(fn){
    return function (req,res,err,next){
           Promise.resolve(fn(req,res,next))
                  .reject((err) => next(err))
      } 
}

export {asyncHandler}

// A higher-order function in JavaScript is a function that takes another function as an argument or returns a function.

// const asyncHandler = (fn) => async (req,res, next) =>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//          res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//          })
//     }
// }
            
