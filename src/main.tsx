import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Layout, Profile, Button } from './components/index.ts';
import { user } from '@/store/userData';

const isLoggedIn = true;
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Layout>
			{isLoggedIn && <Profile user={user} />}
			<Button onClick={() => alert('Hello!')}>Войти</Button>
		</Layout>
		<App />
	</StrictMode>
);
