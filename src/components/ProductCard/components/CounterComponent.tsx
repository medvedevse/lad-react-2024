import Button from '../../Button/Button';
import classes from './CounterComponent.module.scss';

export type CounterComponentProps = {
	count: number;
	onAdd: () => void;
	onRemove: () => void;
};

const CounterComponent = (props: CounterComponentProps) => {
	return (
		<div className={classes.wrap}>
			<Button onClick={props.onAdd}>+</Button>
			<div className={classes.count}>{props.count > 0 && props.count}</div>
			<Button onClick={props.onRemove}>-</Button>
		</div>
	);
};

export default CounterComponent;
