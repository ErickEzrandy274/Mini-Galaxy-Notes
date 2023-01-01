import React from "react";
import { AuthProps } from "./interface";

const BaseAuth: React.FC<AuthProps> = ({ children, title }) => {
	return (
		<div className="flex justify-between max-w-sm mx-3 sm:mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl font-semibold">
			<img
				src="/authImage.jpg"
				alt="auth cover"
				className="hidden bg-contain md:block md:w-1/2"
			/>

			<div className=" w-screen px-6 py-8 md:px-8 lg:w-1/2 mx-auto">
				<h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-center ttext-white">
					Notes Application
				</h2>
				<p className="text-xl sm:text-2xl lg:text-3xl text-center text-gray-200">
					Welcome back!
				</p>

				{children}

				<div className="flex items-center justify-between my-4">
					<span className="w-1/5 border-b-4 border-gray-600 md:w-1/4"></span>

					<a
						href={title === "Login" ? "/register" : "login"}
						className=" text-sm text-gray-400 hover:underline hover:text-white"
					>
						{title === "Login" ? `OR REGISTER` : `OR LOGIN`}
					</a>

					<span className="w-1/5 border-b-4 border-gray-600 md:w-1/4"></span>
				</div>
			</div>
		</div>
	);
};

export default BaseAuth;
