const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();


connectDB();


const app = express();
app.use(express.json());

app.use('/api/category', require('./routes/categoryRoutes'));
app.use('/api/comments', require('./routes/commentRoutes'));

app.get('/', (req, res) => {
  res.status(200).send('Blog Spot API is running');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
