import { CartActionsTypes } from '@/types/cartActions';
import { Product } from '@/types/product';
import { createContext } from 'react';

export type CartContextType = {
	products: Array<Product>;
	dispatch: React.Dispatch<CartActionsTypes>;
};

export const CartContext = createContext<CartContextType>({
	products: [] as Array<Product>,
	dispatch: () => {},
});
