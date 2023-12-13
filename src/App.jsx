import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/layout/Layout";
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="post/:id" element={<PostPage />} />
					<Route path="cart" element={<CartPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
