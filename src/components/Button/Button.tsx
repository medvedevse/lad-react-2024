import classes from './Button.module.scss';

type ButtonProps = {
	children: React.ReactNode;
	message?: string;
};

const Button = (props: ButtonProps) => {
	const { children, message } = props;
	const handleClick = () => {
		alert(message);
	};
	return (
		<button
			className={classes.btn}
			onClick={handleClick}
		>
			{children}
		</button>
	);
};

export default Button;
