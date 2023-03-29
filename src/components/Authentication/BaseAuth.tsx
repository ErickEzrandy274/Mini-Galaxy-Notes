import React, { useMemo } from "react";
import { AuthProps } from "./interface";

const BaseAuth: React.FC<AuthProps> = ({ children, title }) => {
	const { gradientTitle, gradientSubTitle } = useMemo(() => {
		return {
			gradientTitle:
				"text-transparent bg-gradient-to-r from-primary via-info to-accent bg-clip-text",
			gradientSubTitle:
				"text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text",
		};
	}, []);

	return (
		<section className="flex justify-between max-w-sm mx-3 sm:mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl font-semibold">
			<img
				src="/authImage.jpg"
				alt="auth cover"
				className="hidden bg-contain md:block md:w-1/2"
			/>

			<article className=" w-screen px-6 py-8 md:px-8 lg:w-1/2 mx-auto">
				<section className="flex flex-col gap-5">
					<h1
						className={`text-3xl sm:text-4xl lg:text-5xl font-semibold text-center ${gradientTitle}`}
					>
						Notes Application
					</h1>

					<p
						className={`text-2xl sm:text-2xl lg:text-3xl text-center ${gradientSubTitle}`}
					>
						Welcome back!
					</p>
				</section>

				{children}

				<section className="flex items-center justify-between my-4">
					<span className="w-1/5 border-b-4 border-gray-600 md:w-1/4"></span>

					<a
						href={title === "Login" ? "/register" : "/login"}
						className=" text-sm text-gray-400 hover:underline hover:text-white"
					>
						{title === "Login" ? `OR REGISTER` : `OR LOGIN`}
					</a>

					<span className="w-1/5 border-b-4 border-gray-600 md:w-1/4"></span>
				</section>
			</article>
		</section>
	);
};

export default BaseAuth;
