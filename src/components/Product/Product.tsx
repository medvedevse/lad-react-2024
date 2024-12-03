import { useState } from 'react';
import classes from './Product.module.scss';

const Product = () => {
	const [state, setState] = useState(false);

	const productInfo = {
		id: 1,
		name: 'Наручные часы мужские SKMEI 1251',
		imageUrl:
			'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
		price: 8165,
		discount: 90,
		rating: 4.7,
		isFavorite: state,
	};
	return (
		<div className={classes.wrap}>
			<div className={classes.productCard}>
				<a
					href='#'
					onClick={() => setState(!state)}
				>
					<img
						src={
							productInfo.isFavorite
								? 'https://cdn-icons-png.flaticon.com/512/7382/7382122.png'
								: 'https://cdn-icons-png.flaticon.com/512/7382/7382123.png'
						}
						width={30}
						height={30}
					/>
				</a>

				<div className={classes.productCardContent}>
					<img
						src={productInfo.imageUrl}
						alt='Фото продукта'
						width={150}
						height={150}
					/>
					<p className={classes.productName}>{productInfo.name}</p>
					<p>
						Цена:{' '}
						<span className={productInfo.isFavorite ? classes.discount : ''}>
							{productInfo.price}руб.
						</span>{' '}
						{productInfo.isFavorite && `${productInfo.discount}%`}
					</p>
					<p>Рейтинг: {productInfo.rating}</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
