// import express 
import express, { json } from 'express';
import bcrypt from 'bcrypt'

// create a object/instance
const app = express();
app.use(json())

// assign port number
const port = 8001;
// declare a map data structure like key, values pair
const user = new Map()





app.get('/', (req, res) => {
    res.send('Hello World')
})


app.post('/signup', async(req, res) => {
    console.log("Hi")
    const data = req.body
    const firstname = data.firstName
    const lastname = data.lastName
    console.log('First Name: ', firstname);

    const { firstName,
        lastName,
        username,
        password,
        role
    } = data
    console.log('Password: ', password);
    const newP  = await (bcrypt.hash(password, 10))
    console.log('Encrypt password: ',newP)
    user.set(username, { firstName, lastName, username, newP, role });
    
    console.log("User Details: ", user.get(username))
    // res.status(201).send("Successfully Data Saved")

    if(user.has(username)){
        res.status(404).json({message: `${username} is already existed!`})
    }
    else{
        res.status(200).json({message: "Successfully saved"})
    }

    res.status(201).json({message: "Data Saved"})

})



app.listen(port, () => {
    console.log(`server is listening to port ${port}`)
})
