import React from "react";
import { InputAuthProps } from "./interface";

const InputAuthForm: React.FC<InputAuthProps> = ({
	name,
	handleChange,
	password,
}) => {
	return (
		<div className="mt-4">
			<label
				className="block mb-2 text-sm font-medium sm:text-lg text-gray-200"
				htmlFor={name}
			>
				{name.substring(0, 1).toUpperCase() + name.substring(1)}
			</label>
			<input
				name={name}
				className="block w-full px-4 py-2 border rounded-md text-gray-900 
                    border-gray-600 focus:ring-opacity-50 focus:border-blue-400 
                        focus:outline-none focus:ring focus:ring-blue-500"
				type={name}
				onChange={handleChange}
				placeholder={`Write your ${name}`}
			/>
			{name === "password" && password.length > 0 && password.length < 10 && (
				<p className="text-red-600 font-semibold px-2 mb-3">
					Panjang password minimal 10 digit!
				</p>
			)}
		</div>
	);
};

export default InputAuthForm;
