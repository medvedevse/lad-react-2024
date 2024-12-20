import classes from './Product.module.scss';
import { Product } from '@/types/product';
import Button from '../Button/Button';
import CounterComponent from './components/CounterComponent';

export type ProductProps = {
	product: Product;
	productType?: 'default' | 'sale';
	onChangeCard: (product: Product) => void;
};

const ProductCard = (props: ProductProps) => {
	const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		alert('Добавлено в корзину');
		props.onChangeCard({
			...props.product,
			count: props.product.count ? props.product.count + 1 : 1,
		});
		e.stopPropagation();
	};

	const handleDecrement = () => {
		props.onChangeCard({
			...props.product,
			count: props.product.count && props.product.count > 0 ? props.product.count - 1 : 0,
		});
	};

	const handleIncrement = () => {
		props.onChangeCard({
			...props.product,
			count: props.product.count ? props.product.count + 1 : 1,
		});
	};

	const handleFavorite = () => {
		props.onChangeCard({
			...props.product,
			isFavorite: !props.product.isFavorite,
		});
	};

	return (
		<div className={classes.wrap}>
			<div className={classes.productCard}>
				<a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						handleFavorite();
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
				<Button onClick={handleAddToCart}>Купить</Button>
				{props.product.count != undefined && props.product.count > 0 && (
					<CounterComponent
						count={props.product.count}
						onAdd={handleIncrement}
						onRemove={handleDecrement}
					/>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
