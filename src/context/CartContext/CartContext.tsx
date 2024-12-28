import { CartActionsTypes } from '@/types/cartActions';
import { Product } from '@/types/product';
import { createContext } from 'react';

export type CartContextType = {
	product: Array<Product>;
	dispatch: React.Dispatch<CartActionsTypes>;
};

export const CartContext = createContext<CartContextType>({
	product: [] as Array<Product>,
	dispatch: () => {},
});
