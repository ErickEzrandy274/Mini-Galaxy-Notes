import React from "react";
import { InputProps } from "./interface";

const InputForm: React.FC<InputProps> = ({
	type,
	placeholder,
	name,
	handleChange,
	value,
}) => {
	const style = `rounded-lg border border-gray-300 w-full py-2 px-4 
            bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
                focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`;

	const props = {
		name,
		className: style,
		placeholder,
		value,
		onChange: (e: any) => handleChange(e),
	};

	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="text-xl">
				{name.substring(0, 1).toUpperCase() + name.substring(1)}
			</label>
			{type ? (
				<input
					type={type}
					{...props}
					onChange={(e) => handleChange(e)}
				/>
			) : (
				<textarea {...props} />
			)}
			{value !== undefined &&
				value.length > 0 &&
				value.length < 50 &&
				name === "title" && (
					<p className="text-red-600 font-semibold px-2">
						Tersisa {50 - value.length} karakter
					</p>
				)}
		</div>
	);
};

export default InputForm;
