import { useMutation } from '@tanstack/react-query';
import classes from './LoginForm.module.scss';
import { useUserContext } from '@/hooks/useUserContext';
import { LoginFormType, loginUser } from '@/services/users';
import { useEffect } from 'react';

type LoginFormProps = {
	signIn: () => void;
};

const LoginForm = (props: LoginFormProps) => {
	const { user, setUser } = useUserContext();
	const { mutate, isSuccess } = useMutation({
		mutationKey: ['login'],
		mutationFn: loginUser,
		onSuccess: (data) => {
			setUser(data);
		},
		onError: (errors) => {
			console.error(errors);
		},
	});

	useEffect(() => {
		isSuccess && props.signIn();
	}, [user]);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		mutate(Object.fromEntries(formData) as LoginFormType);
	};
	return (
		<div className={classes.wrapper}>
			<div className={classes.autorizeForm}>
				<h2 className={classes.header}>Вход</h2>
				<form onSubmit={handleSubmit} className={classes.formWrap}>
					<label htmlFor="email">E-mail</label>
					<input type="text" name="email" id="email" required />
					<label htmlFor="password">Пароль</label>
					<input type="text" name="password" id="password" required />
					<button type="submit">Войти</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
