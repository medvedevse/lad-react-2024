import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductCatalog.module.scss';
import { Product } from '@/types/product';

export type ProductCatalogProps = {
	products: Array<Product>;
	onChangeCard: (product: Product) => void;
};

const ProductCatalog = (props: ProductCatalogProps) => {
	return (
		<div className={classes.wrap}>
			{props.products.map((product) => (
				<ProductCard key={product.id} product={product} onChangeCard={props.onChangeCard} />
			))}
		</div>
	);
};

export default ProductCatalog;
