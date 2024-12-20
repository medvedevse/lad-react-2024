export type Product = {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	discount?: number;
	rating: number;
	isFavorite: boolean;
	count?: number;
};
