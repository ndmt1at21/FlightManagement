import express from 'express';
import errorHandler from './controllers/errorHandler';
import userRouter from './routes/userRouter';
import flightRouter from './routes/flightRouter';
import fScheduleRouter from './routes/flightScheduleRouter';
import ticketRouter from './routes/ticketRouter';
import settingRouter from './routes/settingRouter';
import passengerRouter from './routes/passengerRouter';
import interRouter from './routes/interRouter';
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
const session = require('express-session');
const app = express();

dotenv.config({ path: path.resolve(__dirname, '.env') });

app.set('trust proxy', 1); // trust first proxy
app.use(
	session({
		secret: 'SuperprivateKEY',
		resave: false,
		saveUninitialized: true,
		cookie: {
			//secure: true }
		}
	})
);
declare module 'express-session' {
	interface Session {
		user: any;
	}
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(`${__dirname}/public`));

app.use('/users', userRouter);
app.use('/flight', flightRouter);
app.use('/airport', interRouter);
app.use('/schedule', fScheduleRouter);
app.use('/ticket', ticketRouter);
app.use('/setting', settingRouter);
app.use('/passenger', passengerRouter);
app.use(errorHandler.globalErrorHandler);

export default app;
