const express = require('express')
const sendMail = require('../MailOwner.js')
const cors = require('cors')
const serverless =require('serverless-http') 

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.get('/.netlify/functions/api/contact/all', (req, res) => {
    try {
        res.status(200).send( { "message" : "Working" } );
    }
    catch (err) {
        res.status(500).send('Error');
    }
})

app.post('/.netlify/functions/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    try {
        sendMail(name, email, message)
        res.status(200).send('Email sent successfully');
    }
    catch (err) {
        res.status(500).send({'Error sending email'});
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

module.exports = app
module.exports.handler = serverless(app)
