import { createContext } from 'react';

export type ThemeType = 'light' | 'dark';

export type ThemeContextType = {
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
	savedTheme: ThemeType;
};

export const ThemeContext = createContext<ThemeContextType>({
	savedTheme: 'light',
	setTheme: () => {},
});
