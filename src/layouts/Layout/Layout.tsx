import React, { useState } from 'react';
import classes from './Layout.module.scss';
import { Button, Profile, ThemeChanger } from '@/components';
import { useThemeContext } from '@/hooks/useThemeContext';
import LoginForm from '@/components/LoginForm/LoginForm';
import { useUserContext } from '@/hooks/useUserContext';

export type LayoutProps = {
	children: React.ReactNode;
	setActive: (param: boolean) => void;
};

const Layout = (props: LayoutProps) => {
	const { user, logout } = useUserContext();
	const { children, setActive } = props;
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const { savedTheme } = useThemeContext();
	const handleSignIn = () => {
		user ? setIsLogin(false) : alert('Ошибка авторизации');
	};

	const showLoginForm = () => setIsLogin(true);
	return (
		<div className={`theme__${savedTheme}`}>
			<div className={classes.pageLayout}>
				{isLogin ? (
					<LoginForm signIn={handleSignIn} />
				) : (
					<>
						<header className={classes.pageLayoutHeader}>
							<nav className={classes.pageLayoutNav}>Меню</nav>
							<ThemeChanger />

							<div className={classes.pageLayoutControls}>
								{user ? (
									<>
										<a href="#" onClick={() => setActive(true)}>
											<img
												src="https://cdn-icons-png.flaticon.com/512/34/34627.png"
												alt="Корзина"
												width={26}
												height={26}
											/>
										</a>
										<Profile user={user} />
										<Button onClick={logout}>Выход</Button>
									</>
								) : (
									<Button onClick={showLoginForm}>Войти</Button>
								)}
							</div>
						</header>

						<main className={classes.wrap}>{children}</main>
					</>
				)}
			</div>
		</div>
	);
};

export default Layout;
