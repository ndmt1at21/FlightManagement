import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

type CarouselContentProps = {
	activeIndex: number;
	children?: React.ReactNode;
};

export const CarouselContent = ({
	activeIndex,
	children
}: CarouselContentProps): JSX.Element => {
	const nImage = React.Children.count(children);

	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				position: 'relative',
				overflow: 'hidden'
			}}
		>
			{React.Children.map(
				children,
				(child, index) =>
					React.isValidElement(child) && (
						<div
							aria-label="slide"
							style={{
								position: 'absolute',
								top: 0,
								width: '100%',
								height: '100%',
								display: 'flex',
								transform: `translateX(${
									(index - activeIndex) * 100
								}%)`,
								transition: 'all 400ms ease-out'
							}}
						>
							{React.cloneElement(
								child,
								{
									style: {
										width: '100%',
										height: '100%',
										objectFit: 'cover'
									}
								},
								null
							)}
						</div>
					)
			)}
		</div>
	);
};
