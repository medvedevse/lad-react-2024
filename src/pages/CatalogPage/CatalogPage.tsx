import { ProductCatalog } from '@/components';
import { products } from '@/store/productsData';

const CatalogPage = () => {
	return (
		<>
			<ProductCatalog products={products} />
		</>
	);
};

export default CatalogPage;
