import { CartActions, CartActionsTypes } from '@/types/cartActions';
import { Product } from '@/types/product';

export const addItem = (product: Product): CartActionsTypes => ({
	type: CartActions.ADD_ITEM,
	payload: product,
});

export const removeItem = (product: Product): CartActionsTypes => ({
	type: CartActions.REMOVE_ITEM,
	payload: product,
});

export const clearCart = (): CartActionsTypes => ({
	type: CartActions.CLEAR_CART,
});

export const changeCard = (product: Product): CartActionsTypes => ({
	type: CartActions.CHANGE_CARD,
	payload: product,
});

export const deleteOrder = (order: Product): CartActionsTypes => ({
	type: CartActions.DELETE_ORDER,
	payload: order,
});

export const chooseFavorite = (product: Product): CartActionsTypes => ({
	type: CartActions.CHOOSE_FAVORITE,
	payload: product,
});
