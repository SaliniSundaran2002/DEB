import express from 'express';
const app = express()
const port = 2000

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`)
})