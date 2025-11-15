import * as dotenv from 'dotenv';
import express from 'express';
// import { Configuration, OpneAIApi } from 'openai';

// import Post from '../mongoDB/models/post.js';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIAPi(configuration);

router.route('/').get((req, res) => {
  res.send('Helllo from DALL • E!')
})

export default router;