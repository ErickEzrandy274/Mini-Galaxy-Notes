import React from "react";
import { InputProps } from "./interface";
import { motion } from "framer-motion";
import { extendBasicAnimate } from "../Authentication/constant";

const Input: React.FC<InputProps> = ({ type, title, body, handleChange }) => {
	const { initial, animate, transition } = extendBasicAnimate;
	const className = `text-gray-800 p-3 outline-none focus:outline-none rounded-lg bg-blue-300`;

	return type === "title" ? (
		<>
			<motion.input
				initial={initial}
				animate={animate}
				exit={initial}
				transition={{ ...transition, delay: 0.2 }}
				autoFocus
				type="text"
				name="title"
				value={title}
				className={className}
				onChange={(e) => handleChange(e)}
			/>

			{!!title!.length && title!.length < 50 && (
				<motion.p
					initial={initial}
					animate={animate}
					exit={initial}
					transition={{ ...transition, delay: 0.2 }}
					className="text-red-600 font-semibold p-1 px-2 text-right"
				>
					<span className="bg-black p-1 px-2 rounded-lg shadow-md">{50 - title!.length} characters left</span>
				</motion.p>
			)}
		</>
	) : (
		<motion.textarea
			initial={initial}
			animate={animate}
			exit={initial}
			transition={{ ...transition, delay: 0.3 }}
			name="body"
			value={body}
			className={`${className} w-full h-40`}
			onChange={(e) => handleChange(e)}
		/>
	);
};

export default Input;
