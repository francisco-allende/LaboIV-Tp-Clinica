const functions = require('firebase-functions');
const axios = require('axios');

exports.verifyRecaptcha = functions.https.onRequest((req:any, res:any) => {
  const recaptchaResponse = req.body.token;
  const secretKey = '6Lc8cPMpAAAAAJ9F_atT7w3Eo_qTl3brS5KnTV9v';

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

  axios.post(verifyUrl)
    .then((response: { data: any; }) => {
      res.json(response.data);
    })
    .catch((error: any) => {
      res.status(500).send('Error verifying reCAPTCHA');
    });
});
