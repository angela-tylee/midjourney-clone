import * as dotenv from 'dotenv';
import express from 'express';
// import { Configuration, OpneAIApi } from 'openai';
import OpenAI from 'openai';

// import Post from '../mongoDB/models/post.js';

dotenv.config();

const router = express.Router();

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY
// })

// const openai = new OpenAIAPi(configuration);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

router.route('/').get((req, res) => {
  res.send('Hello from post!')
})

export default router;
