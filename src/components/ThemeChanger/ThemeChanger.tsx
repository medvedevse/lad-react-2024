import { ChangeEvent } from 'react';
import classes from './ThemeChanger.module.scss';
import { ThemeType } from '@/context/ThemeContext/ThemeContext';
import { useThemeContext } from '@/hooks/useThemeContext';
import SwitchComponent from './components/SwitchComponent/SwitchComponent';

const ThemeChanger = () => {
	const { savedTheme, setTheme } = useThemeContext();
	const handleChangeTheme = (e: ChangeEvent<HTMLInputElement>) => {
		e.target.value === 'light' ? (e.target.value = 'dark') : (e.target.value = 'light');
		setTheme(e.target.value as ThemeType);
	};

	return (
		<form className={classes.themeChanger}>
			<SwitchComponent id={'switch'} value={savedTheme} onChange={handleChangeTheme} />
			<label htmlFor="switch">Изменить тему</label>
		</form>
	);
};

export default ThemeChanger;
