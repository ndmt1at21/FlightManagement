import { AuthContext } from '@src/context/AuthContextProvider';
import { useContext } from 'react';

export const useAuth = () => useContext(AuthContext);
