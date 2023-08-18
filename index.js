import express from 'express'
import cors from "cors"


import { dbConnection } from './database/connection/dbConnection.js'
import userRouter from './src/modules/user/user.router.js'

const app = express()
const port = 3000


import * as dotenv from 'dotenv' 
dotenv.config()




dbConnection()
app.use(cors())
app.use(express.json())
app.use('/user',userRouter)


app.use((err,req,res,next)=>{
    res.json(err)
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT||port, () => console.log(`Example app listening on port ${port}!`))