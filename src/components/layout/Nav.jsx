import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Nav() {
	return (
		<nav className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					{/* <a href="/" className="flex items-center">
            <HomeIcon className="h-6 w-6 mr-2"/>
            Home
          </a> */}
					<NavLink to="/" className="flex items-center">
						Home
					</NavLink>
				</div>
				<div>
					<a href="/cart" className="flex items-center">
						<ShoppingCartIcon className="h-6 w-6 mr-2" />
					</a>
				</div>
			</div>
		</nav>
	);
}
