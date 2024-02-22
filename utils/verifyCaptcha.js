const url = require('url');
const { default: axios } = require('axios');

const verifyCaptcha = async captchaValue => {
  try {
    const params = new url.URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: captchaValue
    });

    const { data } = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      params.toString()
    );

    return data;
  } catch (err) {
    throw new Error('Cannot verify captcha');
  }
};

module.exports = verifyCaptcha;
