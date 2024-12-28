import ProductCard from '../ProductCard/ProductCard';
import classes from './ProductCatalog.module.scss';
import { Product } from '@/types/product';

export type ProductCatalogProps = {
	products: Array<Product>;
};

const ProductCatalog = (props: ProductCatalogProps) => {
	return (
		<div className={classes.wrap}>
			{props.products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductCatalog;
