// Vercel Serverless API: /api/submit.js
// Save at api/submit.js in a Vercel project root.
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
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
}
