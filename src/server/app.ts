import express from 'express';
import errorHandler from './controllers/errorHandler';
import userRouter from './routes/userRouter';
import path from 'path';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: path.resolve(__dirname, '.env') });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(`${__dirname}/public`));
app.use('/', userRouter);
app.use(errorHandler.globalErrorHandler);

export default app;
