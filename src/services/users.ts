import { User } from '@/types/user';
import { api } from '../api/api';

export type LoginFormType = {
	email: string;
	password: string;
};

export const getUsers = async () => {
	const { data } = await api.get<Array<User>>('/users');
	return data;
};

export const loginUser = async (user: LoginFormType) => {
	const { data } = await api.post('/login', user);
	return data;
};

export const getUser = async () => {
	const { data } = await api.get<User>('/user');
	return data;
};
