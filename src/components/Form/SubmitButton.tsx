import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SubmitButton = () => {
	return (
		<button
			type="submit"
			className="py-2 px-4 mt-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 
							text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none 
							focus:ring-2 focus:ring-offset-2 rounded-lg flex gap-2 items-center justify-center"
		>
			<FontAwesomeIcon icon={solid("plus")} />
			Add New Notes
		</button>
	);
};

export default SubmitButton;
