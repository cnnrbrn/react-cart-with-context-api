import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Nav() {
	return (
		<nav className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<NavLink to="/" className="flex items-center">
						Home
					</NavLink>
				</div>
				<div>
					<NavLink to="/cart" className="flex items-center">
						<ShoppingCartIcon className="h-6 w-6 mr-2" />
					</NavLink>
				</div>
			</div>
		</nav>
	);
}
