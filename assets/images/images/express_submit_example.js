// Express example: server.js
// A minimal Express endpoint that accepts JSON form data and forwards to Formspree.
// Run with: node server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/api/submit', async (req, res) => {
  try {
    const payload = req.body;
    const form = new URLSearchParams();
    form.append('name', payload.name || '');
    form.append('email', payload.email || '');
    form.append('phone', payload.phone || '');
    form.append('company', payload.company || '');
    form.append('type', payload.type || '');
    form.append('message', payload.message || '');
    form.append('_replyto', payload.email || '');
    form.append('_subject', 'Server: Contact Form Submission');

    const r = await fetch('https://formspree.io/f/xblknjwz', { method: 'POST', body: form, headers: { 'Accept': 'application/json' } });
    const text = await r.text();
    res.status(r.status).send(text);
  } catch (err) {
    res.status(500).send(String(err));
  }
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
