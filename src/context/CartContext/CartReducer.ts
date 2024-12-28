import { CartActions, CartActionsTypes } from '@/types/cartActions';
import { Product } from '@/types/product';
import { ImmerReducer } from 'use-immer';

export const cartReducer: ImmerReducer<Array<Product>, CartActionsTypes> = (draftState, action) => {
	const product = draftState.find((order) => action.payload && order.id === action.payload.id);
	switch (action.type) {
		case CartActions.ADD_ITEM:
			if (product) {
				product.count = product.count ? product.count + 1 : 1;
			}
			break;

		case CartActions.REMOVE_ITEM:
			if (product && product.count) {
				product.count -= 1;
			}
			break;

		case CartActions.CLEAR_CART:
			draftState.forEach((item) => {
				item.count && item.count > 0 && (item.count = 0);
			});
			break;

		case CartActions.DELETE_ORDER:
			if (product && product.count) {
				product.count > 0 && (product.count = 0);
			}
			break;

		case CartActions.CHOOSE_FAVORITE:
			if (product) {
				product.isFavorite = !product.isFavorite;
			}
			break;
	}
};
