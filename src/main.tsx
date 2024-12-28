import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ThemeProvider from './context/ThemeContext/ThemeProvider.tsx';
import CartProvider from './context/CartContext/CartProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ThemeProvider>
	</StrictMode>,
);
