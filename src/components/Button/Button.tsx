import classes from './Button.module.scss';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
	const { children, onClick } = props;
	return (
		<button
			className={classes.btn}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
