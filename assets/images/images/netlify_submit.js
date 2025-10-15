// Netlify Function: /.netlify/functions/submit
// Place this file in your Netlify functions folder (e.g. netlify/functions/submit.js)
// It forwards the form to Formspree (server-side) and returns status.
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const payload = JSON.parse(event.body);
    // map payload to form fields expected by Formspree
    const formData = new URLSearchParams();
    formData.append('name', payload.name || '');
    formData.append('email', payload.email || '');
    formData.append('phone', payload.phone || '');
    formData.append('company', payload.company || '');
    formData.append('type', payload.type || '');
    formData.append('message', payload.message || '');
    formData.append('_replyto', payload.email || '');
    formData.append('_subject', 'Server: Contact Form Submission');

    const res = await fetch('https://formspree.io/f/xblknjwz', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    const body = await res.text();
    return { statusCode: res.status, body };
  } catch (err) {
    return { statusCode: 500, body: String(err) };
  }
};
