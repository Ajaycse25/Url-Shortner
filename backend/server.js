const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { nanoid } = require('nanoid');
const Url = require('./models/Url');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// POST /api/shorten → Create short URL
app.post('/api/shorten', async (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: 'URL required' });

  let shortCode = nanoid(6);
  const newUrl = new Url({ longUrl, shortCode });
  await newUrl.save();

  res.json({ shortUrl: `http://localhost:5000/${shortCode}` });
});

// GET /:shortcode → Redirect
app.get('/:shortcode', async (req, res) => {
  const { shortcode } = req.params;
  const url = await Url.findOne({ shortCode: shortcode });
  if (!url) return res.status(404).send('URL not found');

  url.visitCount += 1;
  await url.save();
  res.redirect(url.longUrl);
});

// GET /api/admin → List all URLs
app.get('/api/admin', async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 });
  res.json(urls);
});

app.listen(5000, () => console.log('Server running on port 5000'));
