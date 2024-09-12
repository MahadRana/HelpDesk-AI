require('dotenv').config()
const express = require('express')
const { OpenAI } = require('openai');
const cors = require('cors');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

const app = express()

app.use(express.json())

app.use(cors({
    origin: process.env.BACKEND_URL,  // AWS Frontend connection
    methods: 'GET,POST,PUT,DELETE',
}));  

app.post('/help', async (req,res) => {
    const userMessage = req.body.message;
    try{
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "user",
                    content: userMessage,
                },
            ],
        });
        return res.status(200).json({message:response.choices[0].message.content})
    }
    catch (error){
        return res.status(500).json({ error: 'Internal server error', details: error.message});
    }
})

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log('listening on port 4000!')
})