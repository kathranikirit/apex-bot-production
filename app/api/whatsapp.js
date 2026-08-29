web application/stitch/projects/12538483303495146642/screens/9d069aa3bf9d430c884eee23d8c674b2
const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

module.exports = async (req, res) => {
  // 1. Meta Webhook Verification (Handshake)
  if (req.method === 'GET') {
    if (req.query['hub.verify_token'] === process.env.WHATSAPP_VERIFY_TOKEN) {
      return res.status(200).send(req.query['hub.challenge']);
    }
    return res.status(403).send('Verification failed');
  }

  // 2. Handle Inbound Messages
  const message = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  if (!message) return res.sendStatus(200);

  // Sync to Supabase
  await supabase.from('leads').insert({
    phone: message.from,
    requirements: message.text?.body,
    source: 'whatsapp'
  });

  res.status(200).send('OK');
};