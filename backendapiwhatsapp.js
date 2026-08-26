const { createClient } = require('@supabase/supabase-js');
const axios = require('axios');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

module.exports = async (req, res) => {
  if (req.method === 'GET') return res.status(200).send(req.query['hub.challenge']);
  
  const message = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
  if (!message) return res.sendStatus(200);

  // AI Triage & Database Sync
  await supabase.from('leads').insert({
    phone: message.from,
    requirements: message.text.body,
    source: 'whatsapp'
  });

  res.status(200).send('OK');
};