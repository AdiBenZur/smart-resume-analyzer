require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const { OpenAI } = require('openai');

const app = express();
const PORT = 3000;
app.use(cors());

const upload = multer({ storage: multer.memoryStorage() });  // Store there the uploaded files

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

app.post('/upload', upload.single('resume'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    try {
        const fileData = await pdfParse(req.file.buffer);
        const resumeText = fileData.text;

        const chatResponse = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'user',
                content: `Please provide professional resume feedback for the following resume text. Resume:${resumeText}`
              }
            ]
          });

          const aiFeedback = chatResponse.choices[0].message.content;
          res.send(aiFeedback);
    } catch (error) {
        console.error('Error analyzing resume:', error);
        res.status(500).send('Error analyzing resume');
    }
    
});

// Server is running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});