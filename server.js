const express = require('express');
const os = require('os');
const app = express();

// CORS
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Hello from EC2 backend! 🦞',
    server: os.hostname(),
    uptime: Math.floor(process.uptime()) + 's',
    memory: Math.round(os.freemem() / 1024 / 1024) + 'MB free',
    timestamp: new Date().toISOString()
  });
});

// Echo
app.get('/api/echo', (req, res) => {
  res.json({
    echo: req.query.msg || 'no message',
    timestamp: new Date().toISOString()
  });
});

// Random facts
app.get('/api/random', (req, res) => {
  const facts = [
    '랍스터는 이론적으로 불멸이다 🦞',
    '꿀벌은 춤으로 의사소통한다 🐝',
    '문어는 심장이 3개다 🐙',
    '바나나는 베리다 🍌',
    '지구에서 가장 빠른 동물은 매다 🦅'
  ];
  res.json({ fact: facts[Math.floor(Math.random() * facts.length)] });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`);
});
