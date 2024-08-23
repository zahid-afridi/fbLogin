import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbCon from './utils/db.js'
import AuthRoutes from './routes/login.js'



dotenv.config()
const PORT=process.env.PORT || 3000
const app = express()
dbCon()


app.use(express.json())
app.use(cors('*'))
//using ejs template engine




app.use('/api/auth' , AuthRoutes)





app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

console.log('hello world');