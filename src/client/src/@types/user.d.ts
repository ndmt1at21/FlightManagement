type AuthContextValue = {
	isAuthenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction>;
};

type AuthContextProviderProps = {
	children: React.ReactNode;
};
