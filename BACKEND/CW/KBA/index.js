// import express 
import express from 'express';

// create a object/instance
const app = express();
// assign port number
const port = 8000
app.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})
