// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
 import {connectDB} from "./db/db.js";
 import {app} from "./app.js"

 dotenv.config({
    path:'./env'
 })
  
connectDB().then(function(){
  
   /* app.on(event, callback)
    Purpose: Attaches an event listener to the app object (which extends EventEmitter).
    Use Case: Used to handle custom events like "error", "dbConnected", etc.*/
     
    // app.on("error",function(err){
    //     console.log("DB NOT CONNECTED !!")
    //     throw err;
    //  })

    app.listen(process.env.PORT || 8000)
    console.log(`Server is running at port: ${process.env.PORT}`)
})
.catch(function(err){
    console.log("MONGODB CONNECTION FAILED !!!", err)
})





/* import express from "express"
const app = express();
const connect = async function(){
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("DB NOT CONNECTED")
        throw error
       })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port $ {process.env.PORT}`)
    })

    }catch(error){
         console.log("ERROR",error)
         throw err
    }
}
connect();
*/







