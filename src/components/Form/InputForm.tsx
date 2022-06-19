import React from "react";
import { InputProps } from "./interface";

const InputForm: React.FC<InputProps> = ({ type, placeholder, id }) => {
	const style = `rounded-lg border border-gray-300 w-full py-2 px-4 
            bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base 
                focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`;

	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="text-xl">
				{id}
			</label>
			{type ? (
				<input
					type={type}
					id={id}
					className={style}
					placeholder={placeholder}
				/>
			) : (
				<textarea id={id} className={style} placeholder={placeholder} />
			)}
			{/* {errors.exampleRequired && (
                                <span className="text-red-500">
                                    This field is required!
                                </span>
                            )} */}
		</div>
	);
};

export default InputForm;
