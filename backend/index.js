import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  connectDb  from './config/Db.js';
import userRoute from './routes/userRoute.js'

dotenv.config();
const port = process.env.PORT ||  7000;
const app = express();


connectDb()
app.use(cors());

app.use('/api/user',userRoute)
app.get('/',(req,res)=>{
    console.log('Running....')
})



app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
})
