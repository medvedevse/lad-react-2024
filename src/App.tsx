import { Button, Profile, Product } from '@/components';

const App = () => {
	const isLoggedIn = true;
	return (
		<>
			{isLoggedIn && <Profile />}
			<Button />
			<Product/>
		</>
	);
};

export default App;
