import { Link, useLocation } from "react-router-dom";

const Header = () => {
	const location = useLocation();
	const pathname = location.pathname.substring(1);

	return (
		<nav className="shadow bg-gray-800">
			<div className="container px-6 py-3 mx-auto md:flex">
				<div className="flex items-center justify-between">
					<Link
						className="text-2xl font-bold transition-colors duration-200 transform hover:text-white lg:text-3xl text-gray-300"
						to="/"
					>
						Home
					</Link>
				</div>

				{/* Mobile Menu open: "block", Menu closed: "hidden"  */}
				<div
					className="w-full md:flex md:items-center md:justify-between"
					id="navbarNavAltMarkup"
				>
					<div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
						<Link
							to="/list"
							className={`px-2 py-1 hover:font-semibold text-lg transition-colors duration-200 transform rounded-lg 
								hover:bg-gray-900 text-gray-200 hover:text-gray-100 md:mx-2 ${
									pathname === "list" && `bg-gray-900`
								}`}
						>
							List Notes
						</Link>

						<Link
							to="/create"
							className={`px-2 py-1 hover:font-semibold text-lg transition-colors duration-200 transform rounded-lg 
								hover:bg-gray-900 text-gray-200 hover:text-gray-100 md:mx-2 ${
									pathname === "create" && `bg-gray-900`
								}`}
						>
							Create New Note
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
