// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require('dotenv').config();

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.API_KEY)
const msg = {
  to: 'marferpu17@gmail.com', // Change to your recipient
  from: 'marferpu17@gmail.com', // mismo registrado en plataadorma
  subject: 'Prueba Email ',
  text: 'Ya estas adentro! ve y mira el curso',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
