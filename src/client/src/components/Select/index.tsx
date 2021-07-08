import { Select as MSelect, SelectProps } from '@material-ui/core';

export const Select = (props: SelectProps): JSX.Element => {
	return <MSelect {...props}>{props.children}</MSelect>;
};
