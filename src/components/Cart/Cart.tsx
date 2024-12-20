import classes from './Cart.module.scss';
import { Button, Order } from '@/components';
import { Product } from '@/types/product';

type CartProps = {
	orders: Array<Product>;
	onChangeCard: (order: Product) => void;
	onClear: () => void;
};

const Cart = (props: CartProps) => {
	const handleGetFullPrice = () => {
		let sum: number = 0;
		props.orders.map((item) => {
			if (item.count && item.count > 0) sum += item.price * item.count;
		});
		return sum;
	};
	return (
		<>
			<div className={classes.cartList}>
				{props.orders.map((order) => (
					<div key={order.id} className={classes.cartListItem}>
						<Order order={order} onDelete={props.onClear} onChangeCard={props.onChangeCard} />
					</div>
				))}
			</div>
			<div className={classes.cartSum}>
				Итого:
				<span className={classes.cartFullPrice}>
					{handleGetFullPrice() > 0 ? handleGetFullPrice() + '₽' : 'Пусто'}
				</span>
				<div className={classes.cartClearButton}>
					{props.orders.find((order) => order.count && order.count > 0) && (
						<Button onClick={props.onClear}>Очистить</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
