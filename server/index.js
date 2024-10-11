const express= require('express')
const RunServer = require('./database/connection');
const userRoutes = require('./routes/userRoutes');
const fruitRoutes = require('./routes/fruitRoutes');
const contactRoutes= require('./routes/contactRoutes');
const cors=require('cors')//used to connect frontnd and backnd
const helmet = require('helmet')//used for security

const app = express()

const port = 3000;

RunServer()
//data in json format
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use('/api/v1/user',userRoutes)
app.use('/api/v1',contactRoutes)
app.use('/api/v1/fruit',fruitRoutes)

app.listen(port,()=>{
console.log(`server is run on ${port}`)
})