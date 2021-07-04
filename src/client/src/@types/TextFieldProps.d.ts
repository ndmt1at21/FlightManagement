import { ChangeEventHandler } from 'react';

type TextFieldProps = {
	type: 'email' | 'password' | 'text';
	title: string;
	errorMessage?: string;
	helper?: string;
	require?: boolean;
	onChange?: ChangeEventHandler;
	validate?: (value: string) => boolean;
};
