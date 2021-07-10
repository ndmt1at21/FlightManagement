import React, { Children, useEffect } from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Dots } from './components/Dots';
import { CarouselContent } from './components/CarouselContent';
import { useState } from 'react';

type CarouselProps = {
	autoPlay?: boolean;
	children?: React.ReactNode;
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Carousel = (props: CarouselProps): JSX.Element => {
	const { autoPlay = true, children, className, ...restProps } = props;
	const nImage = React.Children.count(children);

	const [activeIndex, setActiveIndex] = useState(0);

	autoPlay &&
		useEffect(() => {
			setInterval(() => {
				setActiveIndex(prev => {
					if (prev === nImage - 1) {
						return 0;
					}
					return prev + 1;
				});
			}, 5000);
		}, []);

	return (
		<div
			style={{ position: 'relative', width: '100%', height: '100%' }}
			className={className}
			{...restProps}
		>
			<CarouselContent activeIndex={activeIndex}>{children}</CarouselContent>
			<Dots
				activeIndex={activeIndex}
				size={nImage}
				onClick={index => {
					setActiveIndex(index);
				}}
				style={{
					position: 'absolute',
					left: '50%',
					bottom: '10px',
					transform: 'translateX(-50%)'
				}}
			/>
		</div>
	);
};
