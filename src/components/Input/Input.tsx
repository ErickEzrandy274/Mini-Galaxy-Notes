import React from "react";
import { InputProps } from "./interface";

const Input: React.FC<InputProps> = ({ type, title, body, handleChange }) => {
	const className = `text-gray-800 p-3 outline-none focus:outline-none rounded-lg bg-blue-300`
    
	return type === "title" ? (
		<input
			autoFocus
			type="text"
			name="title"
			value={title}
			className={className}
			onChange={(e) => handleChange(e)}
		/>
	) : (
		<textarea
			name="body"
			value={body}
			className={`${className} w-full h-40`}
			onChange={(e) => handleChange(e)}
		/>
	);
};

export default Input;
