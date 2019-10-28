const express = require('express');

const app = express();

const PORT = process.envPORT || 5000;

app.get('/', (req, res) => res.send('API running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
