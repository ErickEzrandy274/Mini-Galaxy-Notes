import React from "react";
import { AuthProps } from "./interface";

const BaseAuth: React.FC<AuthProps> = ({ children, title }) => {
	return (
		<div className="flex max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800 lg:max-w-4xl font-semibold">
			<img
				src="/authImage.jpg"
				alt="auth cover"
				className="hidden bg-cover lg:block lg:w-1/2"
			/>

			<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
				<h2 className="text-2xl font-semibold text-center ttext-white">
					Notes Application
				</h2>
				<p className="text-xl text-center text-gray-200">
					Welcome back!
				</p>

				{children}

				<div className="mt-8">
					<button className="w-full px-4 uppercase py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-600">
						{title}
					</button>
				</div>

				<div className="flex items-center justify-between mt-4">
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
