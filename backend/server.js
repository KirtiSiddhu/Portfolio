const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const contactRoutes = require('./routes/contact');
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('Portfolio Backend is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
