import { LoginFormType } from '@/services/users';
import { users } from '@/store/userData';
import { User } from '@/types/user';
import { http, HttpResponse } from 'msw';

const allUsers: Array<User> = users;

const getToken = (str: string) => {
	if (str.startsWith('Bearer')) {
		const token = str.split(' ')[1];
		return token || null;
	}
	return null;
};

export const handlers = [
	http.post<any, LoginFormType>('/login', async ({ request }) => {
		const data = await request.json();
		const user = allUsers.find(
			(user) => user.email === data.email && user.password === data.password,
		);

		if (user) {
			const response = { ...user };
			delete response.password;
			return HttpResponse.json(response);
		}

		return HttpResponse.json('', {
			status: 400,
		});
	}),
	http.get('/user', async ({ request }) => {
		const token = getToken(request.headers.get('Autorization') || '');
		const user = allUsers.find((user) => user.token === token);
		if (user) {
			const response = { ...user };
			delete response.password;
			return HttpResponse.json(response);
		}
		return HttpResponse.text('', {
			status: 401,
		});
	}),
];
