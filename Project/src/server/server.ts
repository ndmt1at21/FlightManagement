import { app } from './app';
import dotenv from 'dotenv';

dotenv.config({
	path: './.env'
});

const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});
