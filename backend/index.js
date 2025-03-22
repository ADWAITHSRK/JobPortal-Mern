import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import  connectDb  from './config/Db.js';
import userRoute from './routes/userRoute.js'
import jobRoute from './routes/jobRoute.js'
import applicationRoute from './routes/applicationRoute.js'
import companyRoute from './routes/companyRoute.js'

dotenv.config();
const port = process.env.PORT ||  7000;
const app = express();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionsSuccessStatus: 200
  };
  


connectDb()
app.use(cors(corsOptions))
app.use(express.json());

app.use('/api/user',userRoute)
app.use('/api/job',jobRoute)
app.use('/api/application',applicationRoute)
app.use('/api/company',companyRoute)


app.get('/',(req,res)=>{
    console.log('Running....')
})



app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
})
