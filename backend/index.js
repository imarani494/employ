const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use('/api/users', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
