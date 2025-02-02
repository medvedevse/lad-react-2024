import classes from './Product.module.scss';
import { Product } from '@/types/product';
import Button from '../Button/Button';
import CounterComponent from './components/CounterComponent';
import { useCartContext } from '@/hooks/useCartContext';
import { addItem, chooseFavorite, removeItem } from '@/context/CartContext/cartActions';

export type ProductProps = {
	product: Product;
	productType?: 'default' | 'sale';
};

const ProductCard = (props: ProductProps) => {
	const { dispatch } = useCartContext();
	return (
		<div className={classes.wrap}>
			<div className={classes.productCard}>
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						dispatch(chooseFavorite(props.product));
					}}
				>
					<img
						src={
							props.product.isFavorite
								? 'https://cdn-icons-png.flaticon.com/512/7382/7382122.png'
								: 'https://cdn-icons-png.flaticon.com/512/7382/7382123.png'
						}
						width={30}
						height={30}
					/>
				</a>

				<div className={classes.productCardContent}>
					<img src={props.product.imageUrl} alt="Фото продукта" width={150} height={150} />
					<p className={classes.productName}>{props.product.name}</p>
					<p>
						Цена:{' '}
						<span className={props.product.isFavorite ? classes.discount : ''}>
							{props.product.price}₽
						</span>{' '}
						{props.product.isFavorite && `${props.product.discount}%`}
					</p>
					<p>Рейтинг: {props.product.rating}</p>
				</div>
				<Button
					onClick={() => {
						alert('Добавлено в корзину');
						dispatch(addItem(props.product));
					}}
				>
					Купить
				</Button>
				{props.product.count != undefined && props.product.count > 0 && (
					<CounterComponent
						count={props.product.count}
						onAdd={() => dispatch(addItem(props.product))}
						onRemove={() => dispatch(removeItem(props.product))}
					/>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
