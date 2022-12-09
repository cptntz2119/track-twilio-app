require("dotenv").config();

const PORT = process.env.PORT || 8080;
const express = require('express');
const Twilio = require('twilio');

var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken);

//Welcome Page for the Server 
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
  //Welcome Message
  res.send('Hello to the Twilio Server')

  //_GET Variables
  const { recipient, textmessage } = req.query;


  //Send Text
  client.messages.create({
      body: textmessage,
      to: recipient,  // Text this number
      from: '+15074734314' // From a valid Twilio number
  }).then((message) => console.log(message.body));
})

app.listen(8080, () => console.log("Running on Port 8080"))