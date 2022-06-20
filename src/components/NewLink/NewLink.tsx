import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NewLinkProps } from "./interface";

const NewLink: React.FC<NewLinkProps> = ({
	to,
	linkName,
	fromNav,
	customClass,
}) => {
	const location = useLocation();
	const pathname = location.pathname.substring(1);

	const className = fromNav
		? customClass
			? customClass
			: `px-2 py-1 hover:font-semibold text-lg transition-colors duration-200 transform rounded-lg 
            hover:bg-gray-900 text-gray-200 hover:text-gray-100 md:mx-2 ${
				pathname === to.substring(1) && `bg-gray-900`
			}`
		: `bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold rounded-lg shadow-xl mt-10`;

	return (
		<Link to={to} className={className}>
			{linkName}
		</Link>
	);
};

export default NewLink;
