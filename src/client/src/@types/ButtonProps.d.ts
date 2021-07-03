import { MouseEventHandler } from 'react';

type ButtonProps = {
	color?: 'primary' | 'secondary';
	type?: 'fill' | 'outline';
	size?: 'lg' | 'sm' | 'md';
	disabled?: boolean;
	children: React.ReactNode;
	onClick?: MouseEventHandler;
};
