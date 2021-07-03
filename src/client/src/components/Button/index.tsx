import { SC } from './styles';

type ButtonProps = {
	color?: 'primary' | 'secondary';
	type?: 'fill' | 'outline';
	disabled?: boolean;
	children: React.ReactNode;
};

export const Button = (props: ButtonProps): JSX.Element => {
	const { color, type, disabled = false, children } = props;

	return (
		<>
			<SC.GlobalScope />
			<SC.Button
				className={`${color ?? color} ${type ?? type}`}
				disabled={disabled}
			>
				{children}
			</SC.Button>
		</>
	);
};
