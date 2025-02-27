import {asyncHandler} from "../utils/asyncHandeler.js"

const registerUser = asyncHandler( async  (req,res) => {
        res.status(500).json({
        message: "ok"
    })
    
})


export {registerUser}