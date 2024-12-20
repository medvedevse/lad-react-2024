import classes from './Order.module.scss';
import { Product } from '@/types/product';
import Button from '../Button/Button';

export type OrderProps = {
	productType?: 'default' | 'sale';
	order: Product;
	onDelete: () => void;
	onChangeCard: (order: Product) => void;
};

const Order = (props: OrderProps) => {
	const handleDeleteOrder = () => {
		props.onChangeCard({
			...props.order,
			count: props.order.count && props.order.count > 0 ? (props.order.count = 0) : 0,
		});
	};

	return (
		<>
			{props.order.count != undefined && props.order.count > 0 && (
				<div className={classes.order}>
					<div className={classes.orderCode}>{props.order.id}</div>
					<div className={classes.orderTitle}>{props.order.name}</div>{' '}
					<div className={classes.orderPrice}>
						<span>{props.order.price + '₽'}</span>
						<span className={classes.orderCount}>{props.order.count + ' шт'}</span>{' '}
					</div>
					<div className={classes.orderActions}>
						<Button onClick={handleDeleteOrder}>Удалить</Button>
					</div>
				</div>
			)}
		</>
	);
};

export default Order;
