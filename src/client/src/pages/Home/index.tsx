import { MainLayout } from '@src/layouts/MainLayout';
import { HeroBanner } from '@src/components/HeroBanner';
import { FlightSearchPicker } from '@src/components/FlightSearchPicker';

export const Home = (): JSX.Element => {
	return (
		<MainLayout>
			<HeroBanner src="/HeroBanner.png" />
			<FlightSearchPicker />
		</MainLayout>
	);
};
