import classes from './ModalLayout.module.scss';

export type ModalLayoutProps = {
	children: React.ReactNode;
	modalTitle: string;
	active: boolean;
	setActive: (param: boolean) => void;
};

const ModalLayout = (props: ModalLayoutProps) => {
	return (
		<div
			onClick={() => props.setActive(false)}
			className={
				props.active ? `${classes.modalLayout} + ' ' + ${classes.active}` : classes.modalLayout
			}
		>
			<div className={classes.modalLayoutContent} onClick={(e) => e.stopPropagation()}>
				<div className={classes.modalLayoutHead}>
					<h2>{props.modalTitle}</h2>
					<button onClick={() => props.setActive(false)}>Закрыть</button>
				</div>
				<div className={classes.modalLayoutCenter}>{props.children}</div>
			</div>
		</div>
	);
};

export default ModalLayout;
