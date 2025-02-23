import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();



app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
    // What is CORS?
// CORS allows a server to specify which domains can access its resources. Without CORS, browsers block requests made from different origins due to security policies.
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser)




export{ app }