import app from './app';
import { createConnection } from 'typeorm';
import { ormOptions } from './typeormConfig';

// Init node server
const initServer = () => {
	const PORT = process.env.PORT || 8000;

	const server = app.listen(process.env.PORT, () => {
		console.log(`Server is running at port ${PORT}`);
	});

	process.on('uncaughtException', err => {
		console.log('UNCAUGHT ERROR !!! SHUTTING DOWN...');
		console.log(err.name, err.message);
		server.close(() => {
			process.exit(1);
		});
	});
};

// Connect to DB
createConnection(ormOptions)
	.then(_ => {
		console.log('Connect to database sucessfully');
		initServer();
	})
	.catch(error => console.log('Fail to connect to the database,', error));
