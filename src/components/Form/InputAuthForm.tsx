import React from "react";
import { toCapitalize } from "utils";
import { InputAuthProps } from "components";

const InputAuthForm: React.FC<InputAuthProps> = ({
	name,
	handleChange,
	value,
	errorMsg,
}) => {
	return (
		<section className="mt-4">
			<label
				className="block mb-2 text-sm font-medium sm:text-lg text-gray-200"
				htmlFor={name}
			>
				{toCapitalize(name)}
			</label>

			<input
				name={name}
				className="block w-full px-4 py-2 border rounded-md text-gray-900 
                    border-gray-600 focus:ring-opacity-50 focus:border-blue-400 
                        focus:outline-none focus:ring focus:ring-blue-500"
				type={name}
				value={value}
				onChange={handleChange}
				placeholder={`Write your ${name}`}
			/>

			{errorMsg && (
				<p className="text-red-600 font-semibold px-2 mb-3">{errorMsg}</p>
			)}
		</section>
	);
};

export default InputAuthForm;
