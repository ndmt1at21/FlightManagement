import { Theme } from '@material-ui/core';
import {
	FormControl,
	Radio,
	RadioGroup as MRadioGroup,
	FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type RadioGroupProps = {
	ariaLabel?: string;
	name?: string;
	row?: boolean;
	currentValue?: string;
	radioData?: { label: string; value: string }[];
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
	radio: {
		color: theme.palette.primary.main
	}
}));

export const RadioGroup = (props: RadioGroupProps): JSX.Element => {
	const {
		ariaLabel,
		name,
		row = true,
		currentValue,
		radioData,
		onChange
	} = props;

	const classes = useStyles();

	return (
		<FormControl component="fieldset">
			<MRadioGroup
				row={row}
				aria-label={ariaLabel}
				name={name}
				value={currentValue}
				onChange={onChange}
			>
				{radioData?.map(radioInfo => (
					<FormControlLabel
						value={radioInfo.value}
						control={
							<Radio
								key={radioInfo.value}
								classes={{ root: classes.radio }}
							/>
						}
						label={radioInfo.value}
					></FormControlLabel>
				))}
			</MRadioGroup>
		</FormControl>
	);
};
