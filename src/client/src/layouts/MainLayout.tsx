import { Header } from '@src/components/Header';
import { Footer } from '@src/components/Footer';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type MainLayoutProps = {
	children?: React.ReactNode;
};

const useStyles = makeStyles({
	header: {
		margin: '0 clamp(0.5rem, -2.65rem + 11vw, 10rem)',
		height: 'clamp(3rem, 5vw, 5rem)'
	}
});

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Box component="div">
			<Header className={classes.header} />
			{children}
			<Footer />
		</Box>
	);
};
