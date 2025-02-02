import { ReactNode, useCallback, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import { User } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/services/users';

type UserProviderProps = {
	children: ReactNode;
};

const UserProvider = (props: UserProviderProps) => {
	const [user, setUser] = useState<User>();
	const [token, setToken] = useState<string>('');

	const { data, status, isSuccess, isError } = useQuery({
		queryKey: ['user'],
		queryFn: getUser,
		enabled: Boolean(token),
		retry: 0,
	});

	const setUserData = useCallback(
		(user: User) => {
			setUser(user);
			if (user.token) localStorage.setItem('token', user.token);
		},
		[user],
	);

	const logout = useCallback(() => {
		localStorage.removeItem('token');
		setUser(undefined);
		setToken('');
	}, []);

	useEffect(() => {
		if (isSuccess) {
			setUser(data);
		}
		if (isError) {
			logout();
		}
	}, [status]);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setToken(token);
		}
	}, []);
	return (
		<UserContext.Provider value={{ user, setUser: setUserData, logout }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserProvider;
