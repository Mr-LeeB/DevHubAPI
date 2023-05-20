require('dotenv').config();
const express = require('express');
const router = require('./routers/root.router');
const connectDB = require('./config/connectDB');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

// Connect to database
connectDB();

const app = express();
app.use(cookieParser());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'https://social-network-vite.vercel.app',
    credentials: true,
  }),
);
app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
