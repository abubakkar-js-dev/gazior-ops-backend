import express from 'express'
import type { Express,Request,Response } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { globalErrorHandler } from './middlewares/error.middleware';
dotenv.config()

const app: Express = express();


// middlewares

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({
    extended: true
}));
app.use(globalErrorHandler);




// api routes




app.get('/',(req:Request,res:Response)=>{
   res.send('Hello from Todo API with typed') 
})



export default app;