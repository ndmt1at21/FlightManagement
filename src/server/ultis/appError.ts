export class AppError extends Error {
	public message: string;
	public statusCode: number;
	public status: string;

	constructor(message: string, statusCode: number) {
		super();

		this.message = message;
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
	}
}

export class DBError extends Error {}
