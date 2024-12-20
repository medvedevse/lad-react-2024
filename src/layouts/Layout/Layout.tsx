import React, { useState } from 'react';
import classes from './Layout.module.scss';
import { Button, Profile } from '@/components';
import { user } from '@/store/userData';

export type LayoutProps = {
	children: React.ReactNode;
	setActive: (param: boolean) => void;
};

const Layout = (props: LayoutProps) => {
	const { children, setActive } = props;
	const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
	return (
		<div className={classes.pageLayout}>
			<header className={classes.pageLayoutHeader}>
				<nav className={classes.pageLayoutNav}>Меню</nav>
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
	);
};

export default Layout;
