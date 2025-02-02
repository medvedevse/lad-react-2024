import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ThemeProvider from './context/ThemeContext/ThemeProvider.tsx';
import CartProvider from './context/CartContext/CartProvider.tsx';
import UserProvider from './context/UserContext/UserProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
});

async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return;
	}

	const { worker } = await import('./mocks/browser');
	return worker.start({
		onUnhandledRequest: 'bypass',
	});
}

enableMocking().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<UserProvider>
					<ThemeProvider>
						<CartProvider>
							<App />
						</CartProvider>
					</ThemeProvider>
				</UserProvider>
			</QueryClientProvider>
		</StrictMode>,
	);
});
