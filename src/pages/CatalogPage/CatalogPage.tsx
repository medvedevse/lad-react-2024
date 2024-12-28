import { ProductCatalog, Cart, Layout } from '@/components';
import { useState } from 'react';
import ModalLayout from '@/layouts/ModalLayout/ModalLayout';
import { useCartContext } from '@/hooks/useCartContext';

export type CatalogPageProps = {};

const CatalogPage = (props: CatalogPageProps) => {
	const [active, setActive] = useState<boolean>(false);
	const { product } = useCartContext();

	return (
		<>
			<Layout setActive={setActive}>
				<h1>Каталог</h1>
				<section>
					<ProductCatalog products={product} />
				</section>
			</Layout>
			<ModalLayout modalTitle="Корзина" active={active} setActive={setActive}>
				<Cart orders={product} />
			</ModalLayout>
		</>
	);
};

export default CatalogPage;
