import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="bg-green-700 px-6 py-4 flex items-center justify-between shadow-md">
			<div className="text-white text-2xl font-bold">
				<Link to="/">Katalyst</Link>
			</div>
			<ul className="flex space-x-6">
				<li>
					<Link to="/" className="text-white hover:text-green-200 transition-colors">Home</Link>
				</li>
				<li>
					<Link to="/" className="text-white hover:text-green-200 transition-colors">Events</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;