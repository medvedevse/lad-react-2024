import { User } from '@/types/user';
import { createContext } from 'react';

type UserContextType = {
	user?: User;
	setUser: (user: User) => void;
	logout: () => void;
};

export const UserContext = createContext<UserContextType>({
	user: {
		id: '',
		firstName: '',
		lastName: '',
		email: '',
	},
	setUser: () => {},
	logout: () => {},
});
