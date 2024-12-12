import { useState } from 'react';
import classes from './Product.module.scss';
import { Product } from '@/types/product';
import Button from '../Button/Button';

export type ProductProps = {
	product: Product;
	productType?: 'default' | 'sale';
};

const ProductCard = (props: ProductProps) => {
	const { product, productType = 'default' } = props;
	const [state, setState] = useState(false);
	product.isFavorite = state;
	console.log(productType);

	return (
		<div className={classes.wrap}>
			<div className={classes.productCard}>
				<a
					href='#'
					onClick={e => {
						e.preventDefault();
						setState(!state);
					}}
				>
					<img
						src={
							product.isFavorite
								? 'https://cdn-icons-png.flaticon.com/512/7382/7382122.png'
								: 'https://cdn-icons-png.flaticon.com/512/7382/7382123.png'
						}
						width={30}
						height={30}
					/>
				</a>

				<div className={classes.productCardContent}>
					<img
						src={product.imageUrl}
						alt='Фото продукта'
						width={150}
						height={150}
					/>
					<p className={classes.productName}>{product.name}</p>
					<p>
						Цена:{' '}
						<span className={product.isFavorite ? classes.discount : ''}>
							{product.price}₽
						</span>{' '}
						{product.isFavorite && `${product.discount}%`}
					</p>
					<p>Рейтинг: {product.rating}</p>
				</div>
				<Button onClick={() => alert('Добавлено в корзину')}>Купить</Button>
			</div>
		</div>
	);
};

export default ProductCard;
