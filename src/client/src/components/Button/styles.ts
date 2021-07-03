import styled, { createGlobalStyle } from 'styled-components';

const GlobalScope = createGlobalStyle`
	:root {
		--btn-color: var(--text-color-primary);
		--btn-color-outline: transparent;
		--btn-color-background: transparent;
		--btn-color-hover: var(--color-gray-5);
		--btn-radius: 10px;
		--btn-padding: 0.5rem 1rem;
	}
`;
const Button = styled.button`
	color: var(--btn-color);
	background-color: var(---btn-color-background);
	border: 0;
	border-radius: var(--btn-radius);
	padding: var(--btn-padding);
	transition: all 0.2s;
	cursor: pointer;

	&:hover {
		background-color: var(--btn-color-hover);
	}

	&.primary {
		--btn-color: var(--color-white);
		--btn-color-background: var(--color-primary);
		--btn-color-outline: var(--color-primary);

		&:hover {
			--btn-color-hover: var(--color-primary);
		}
	}

	&.secondary {
		--btn-color: var(--color-white);
		--btn-color-background: var(--color-secondary);
		--btn-color-outline: var(--color-secondary);

		&:hover {
			--btn-color-hover: var(--color-secondary-dark);
		}
	}

	&.fill {
		border: 0;
		background-color: var(--btn-color-background);
	}

	&.outline {
		color: var(--btn-color-outline);
		border: 2px solid var(--btn-color-outline);
		background-color: transparent;
	}

	&:disabled {
		border: 0;
		color: var(--text-color-primary);
		background-color: var(--color-gray-4);
	}
`;

export const SC = { Button, GlobalScope };
