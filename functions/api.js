const express = require('express')
const sendMail = require('../MailOwner.js')
const cors = require('cors')

const app = express()
const port = 5000

app.use(express.json())
app.use(cors())

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    try {
        sendMail(name, email, message)
        res.status(200).send('Email sent successfully');
    }
    catch (err) {
        res.status(500).send('Error sending email',errsendMailToUser);
    }
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

