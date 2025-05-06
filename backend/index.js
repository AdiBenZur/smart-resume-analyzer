const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = 3000;

app.use(cors());

const upload = multer({ dest: 'uploads/' }); // Store there the uploaded files

app.post('/upload', upload.single('resume'), (req, res) => {
    console.log('File uploaded:', req.file);

    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    res.send('Resume uploaded');
});

// Server is running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});