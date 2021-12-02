require('dotenv').config();

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const myphonenumber = process.env.MY_PHONE_NUMBER;
const twiliophone = process.env.TWILIO_PHONE_NUMBER;
const body = process.env.BODY;

client.messages
  .create({
     body: body,
     from: twiliophone,
     to: myphonenumber
   })
  .then(message => console.log(message.sid));

