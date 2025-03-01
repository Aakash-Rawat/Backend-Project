import {apiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { apiResponse } from "../utils/apiResponse.js"


const registerUser = async function(req,res){

 //get user details from frontend
 // validation - not empty
 // check if user already exists : username,email
 // check for images, check for avatar
 //upload them to cloudinary, check if avatar is uploaded to cloudinary
 //create user object - create entry in db
 // remove password and refresh token field from response
 // check for user creation
 // return response
    

    //  getting user details
    const {fullname,email,username,password} = req.body
    console.log("email:", email);
    

    // validation step
    if([fullname, email, username, password].some((field)=>field?.trim()===""))  
    {
            throw new apiError(400,"All fields are required")
    }

    
    // checking if user exist
    const existedUser = User.findOne({
     //mongodb query operator is used below
      $or: [{username},{email}]
    })

    if(existedUser)
    {
       throw new apiError(409, "User with email or username already exist")
    }
     
    //we added multer in routes field that's why we are able to use req.files which is due to multer
   const avatarLocalPath =  req.files?.avatar[0]?.path;
   const coverImageLocalPath = req.files?.coverImage[0]?.path;
    
   if(!avatarLocalPath)
   {
      throw new apiError(400, "Avatar file is required")
   }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    
  if(!avatar)
  {
     throw new apiError(400,"Avatar is required")
  }

  const user =  await  User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
  })

   const createdUser = User.findById(user._id).select(
     "-password -refreshToken"
   )

   if(!createdUser)
   {
      throw new apiError(500, "Something went wrong while registering the user")
   }

   return res.status(201).json(
    new apiResponse(200, createdUser, "User Register Successfully")
   )

  

}

export {
  registerUser,

}