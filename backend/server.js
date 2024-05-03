import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import cocktailRouter from './routes/cocktailRoute.js';
import userRouter from './routes/userRoutes.js';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoute.js';

//app config
const app = express();
const port = 4001;
dotenv.config();

//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//db connection
connectDB();

const __dirname = path.resolve();

app.get('/api/order/verify', (req, res) => {
  res.send({ secretId: process.env.STRIPE_SECRET_KEY });
});

//api endpoints
app.use('/api/cocktail', cocktailRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.use(express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, './frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend', './dist', './index.html'));
});

app.use('/uploads', express.static(path.join(__dirname + '/uploads')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log(`Server dunatos sta ${port}`);
});
