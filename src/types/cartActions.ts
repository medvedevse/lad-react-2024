import { Product } from './product';

export enum CartActions {
	ADD_ITEM = 'ADD_ITEM',
	REMOVE_ITEM = 'REMOVE_ITEM',
	CLEAR_CART = 'CLEAR_CART',
	DELETE_ORDER = 'DELETE_ORDER',
	CHOOSE_FAVORITE = 'CHOOSE_FAVORITE',
}

export type CartActionsTypes =
	| {
			type: CartActions.ADD_ITEM;
			payload: Product;
	  }
	| {
			type: CartActions.REMOVE_ITEM;
			payload: Product;
	  }
	| {
			type: CartActions.CLEAR_CART;
			payload?: Product;
	  }
	| {
			type: CartActions.DELETE_ORDER;
			payload: Product;
	  }
	| {
			type: CartActions.CHOOSE_FAVORITE;
			payload: Product;
	  };
