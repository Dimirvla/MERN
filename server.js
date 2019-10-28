const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DataBase
connectDB();

//init Middleware
app.use(express.json({ extended: false }));

const PORT = process.envPORT || 5000;

app.get('/', (req, res) => res.send('API running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
