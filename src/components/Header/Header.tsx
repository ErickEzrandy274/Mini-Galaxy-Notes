import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="shadow bg-gray-800">
			<div className="container px-6 py-3 mx-auto md:flex">
				<div className="flex items-center justify-between">
					<div>
                        <Link
                            className="text-2xl font-bold transition-colors duration-200 transform hover:text-white lg:text-3xl text-gray-200"
                            to="/">
                            Brand
                        </Link>
					</div>

					{/* Mobile menu button */}
					<div className="flex md:hidden">
						<button
							type="button"
							className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
							aria-label="toggle menu"
						>
							<svg
								viewBox="0 0 24 24"
								className="w-6 h-6 fill-current"
							>
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								></path>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu open: "block", Menu closed: "hidden"  */}
				<div className="w-full md:flex md:items-center md:justify-between">
					<div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                        <Link
                            to="/"
                            className="px-2 py-1 hover:font-semibold text-lg transition-colors duration-200 transform rounded-lg hover:bg-gray-900 text-gray-200 hover:text-gray-100 md:mx-2">
                            Home
                        </Link>

                        <Link
                            to="/list"
                            className="px-2 py-1 hover:font-semibold text-lg transition-colors duration-200 transform rounded-lg hover:bg-gray-900 text-gray-200 hover:text-gray-100 md:mx-2">
                            List Notes
                        </Link>

                        <Link
                            to="/create"
                            className="px-2 py-1 hover:font-semibold text-lg transition-colors duration-200 transform rounded-lg hover:bg-gray-900 text-gray-200 hover:text-gray-100 md:mx-2">
                            Create New Note
                        </Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
