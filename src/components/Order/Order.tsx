import classes from './Order.module.scss';
import { Product } from '@/types/product';
import Button from '../Button/Button';
import { useCartContext } from '@/hooks/useCartContext';
import { deleteOrder } from '@/context/CartContext/CartActions';

export type OrderProps = {
	productType?: 'default' | 'sale';
	order: Product;
};

const Order = (props: OrderProps) => {
	const { dispatch } = useCartContext();

	return (
		<>
			{props.order.count != undefined && props.order.count > 0 && (
				<div className={classes.order}>
					<div className={classes.orderCode}>{props.order.id}</div>
					<div className={classes.orderTitle}>{props.order.name}</div>{' '}
					<div className={classes.orderPrice}>
						<span>
							{props.order.isFavorite && props.order.discount
								? (props.order.price * props.order.discount) / 100
								: props.order.price + '₽'}
						</span>
						<span className={classes.orderCount}>{props.order.count + ' шт'}</span>{' '}
					</div>
					<div className={classes.orderActions}>
						<Button onClick={() => dispatch(deleteOrder(props.order))}>Удалить</Button>
					</div>
				</div>
			)}
		</>
	);
};

export default Order;
