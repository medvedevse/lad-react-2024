import { ReactNode } from 'react';
import { CartContext } from './CartContext';
import { initialState } from './CartInitialState';
import { useImmerReducer } from 'use-immer';
import { cartReducer } from './CartReducer';

type CartProviderProps = {
	children: ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
	const [product, dispatch] = useImmerReducer(cartReducer, initialState);
	return <CartContext.Provider value={{ dispatch, product }}>{children}</CartContext.Provider>;
};

export default CartProvider;
