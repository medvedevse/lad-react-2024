import classes from './Cart.module.scss';
import { Button, Order } from '@/components';
import { clearCart } from '@/context/CartContext/CartActions';
import { useCartContext } from '@/hooks/useCartContext';
import { Product } from '@/types/product';

type CartProps = {
	orders: Array<Product>;
};

const Cart = (props: CartProps) => {
	const { dispatch } = useCartContext();
	const handleGetFullPrice = () => {
		let sum: number = 0;
		props.orders.map((item) => {
			if (item.count && item.count > 0) {
				if (item.isFavorite && item.discount) {
					sum += ((item.price * item.discount) / 100) * item.count;
				} else {
					sum += item.price * item.count;
				}
			}
		});
		return sum;
	};
	return (
		<>
			<div className={classes.cartList}>
				{props.orders.map((order) => (
					<div key={order.id} className={classes.cartListItem}>
						<Order order={order} />
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
						<Button onClick={() => dispatch(clearCart())}>Очистить</Button>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
