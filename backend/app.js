const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const streamRoutes = require('./routes/streamRoutes');

const cors = require('cors');

const Message = require('./models/Message'); // Import the Message model

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const mongouri = process.env.MONGOURI;
const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

mongoose.connect(mongouri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error(`Error Occurred: ${err}`);
    });

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/api', messageRoutes);
app.use('/api', streamRoutes);



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
