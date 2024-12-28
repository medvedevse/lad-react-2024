import React, { useState } from 'react';
import classes from './Layout.module.scss';
import { Button, Profile, ThemeChanger } from '@/components';
import { user } from '@/store/userData';
import { useThemeContext } from '@/hooks/useThemeContext';

export type LayoutProps = {
	children: React.ReactNode;
	setActive: (param: boolean) => void;
};

const Layout = (props: LayoutProps) => {
	const { children, setActive } = props;
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
	const { savedTheme } = useThemeContext();
	return (
		<div className={`theme__${savedTheme}`}>
			<div className={classes.pageLayout}>
				<header className={classes.pageLayoutHeader}>
					<nav className={classes.pageLayoutNav}>Меню</nav>
					<ThemeChanger />
					<div className={classes.pageLayoutControls}>
						<a href="#" onClick={() => setActive(true)}>
							<img
								src="https://cdn-icons-png.flaticon.com/512/34/34627.png"
								alt="Корзина"
								width={26}
								height={26}
							/>
						</a>
						{isLoggedIn && <Profile user={user} />}
						{!isLoggedIn && <Button onClick={() => setLoggedIn(!isLoggedIn)}>Войти</Button>}
					</div>
				</header>
				<main className={classes.wrap}>{children}</main>
			</div>
		</div>
	);
};

export default Layout;
