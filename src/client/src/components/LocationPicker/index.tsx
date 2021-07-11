import { Box, Input, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { RoundTripInputRenderer } from './components/RoundTripInputRenderer';
import { ListLocation } from './components/ListLocation';
import { useState } from 'react';

type LocationPickerProps = {
	locations: LocationTrip[];
	onChange: (props: {
		depart?: LocationTrip;
		destination?: LocationTrip;
	}) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2),
		boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
		borderRadius: '10px'
	},
	inputRenderer: {},
	list: {}
}));

export const LocationPicker = (props: LocationPickerProps): JSX.Element => {
	const { locations, onChange } = props;

	const classes = useStyles();

	const [filterText, setFilterText] = useState();

	return (
		<Box className={classes.root}>
			{/* <RoundTripInputRenderer
				departDes={a}
				returnDes={a}
				className={classes.inputRenderer}
				onChange={e => {setFilterText(e.target.value);}}
			/> */}
			<ListLocation
				locations={[]}
				filterText={'a'}
				className={classes.list}
			/>
		</Box>
	);
};
