import { ReactNode, useState } from 'react';
import { ThemeContext, ThemeType } from './ThemeContext';

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const savedTheme = localStorage.getItem('theme') as ThemeType;
	const [theme, setTheme] = useState<ThemeType>(savedTheme ? savedTheme : 'light');
	localStorage.setItem('theme', theme);

	return <ThemeContext.Provider value={{ savedTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
