import React, { useState } from 'react';

export const AuthContext = React.createContext({} as AuthContextValue);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children
}) => {
	const [isAuthenticated, setAuthenticated] = useState(true);

	return (
		<AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
