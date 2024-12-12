import React from 'react';
import classes from './Layout.module.scss';

export type LayoutProps = {
	children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
	const { children } = props;
	return <div className={classes.wrap}>{children}</div>;
};

export default Layout;
