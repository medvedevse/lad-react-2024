import { CartContext } from '@/context/CartContext/CartContext';
import { useContext } from 'react';

export const useCartContext = () => useContext(CartContext);
