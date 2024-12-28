import { ChangeEvent } from 'react';
import classes from './SwitchComponent.module.scss';

type SwitchComponentProps = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: 'light' | 'dark';
	id: string;
};

const SwitchComponent = (props: SwitchComponentProps) => {
	return (
		<input
			id={props.id}
			type="checkbox"
			className={classes.switch}
			onChange={props.onChange}
			value={props.value}
			checked={props.value === 'dark'}
		/>
	);
};

export default SwitchComponent;
