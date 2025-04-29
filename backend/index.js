const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Resume submitted');
});

// Server is running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});