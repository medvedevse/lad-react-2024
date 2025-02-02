import { UserContext } from '@/context/UserContext/UserContext';
import { useContext } from 'react';

export const useUserContext = () => useContext(UserContext);
