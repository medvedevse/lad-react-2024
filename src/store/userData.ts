import { v4 as uuid } from 'uuid';

export const users = [
	{
		id: uuid(),
		email: 'admin@ya.ru',
		firstName: 'admin',
		lastName: 'admin',
		password: 'admin',
		token: 'admin',
	},
	{
		id: uuid(),
		email: 'user@gmail.com',
		firstName: 'user',
		lastName: 'user',
		password: 'user',
		token: 'user',
	},
];
