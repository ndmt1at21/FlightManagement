import { Header } from '@src/components/Header';
import { Footer } from '@src/components/Footer';
import { Box } from '@material-ui/core';

type MainLayoutProps = {
	children?: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
	return (
		<Box component="div">
			<Header />
			{children}
			<Footer />
		</Box>
	);
};
