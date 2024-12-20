import { ProductCatalog, Cart, Layout } from '@/components';
import { products } from '@/store/productsData';
import { useState } from 'react';
import ModalLayout from '@/layouts/ModalLayout/ModalLayout';
import { Product } from '@/types/product';

export type CatalogPageProps = {};

const CatalogPage = (props: CatalogPageProps) => {
	const [active, setActive] = useState<boolean>(false);
	const [product, setProduct] = useState<Array<Product>>(products);

	const handleChangeCard = (product: Product) => {
		setProduct((prev) => {
			return prev.map((item: Product) => {
				if (item.id === product.id) {
					return product;
				}
				return { ...item };
			});
		});
	};

	const handleClearCart = () => {
		products.map((item) => {
			handleChangeCard({
				...item,
				count: item.count && item.count > 0 ? (item.count = 0) : 0,
			});
		});
	};

	return (
		<>
			<Layout setActive={setActive}>
				<h1>Каталог</h1>
				<section>
					<ProductCatalog products={product} onChangeCard={handleChangeCard} />
				</section>
			</Layout>
			<ModalLayout modalTitle="Корзина" active={active} setActive={setActive}>
				<Cart orders={product} onClear={handleClearCart} onChangeCard={handleChangeCard} />
			</ModalLayout>
		</>
	);
};

export default CatalogPage;
