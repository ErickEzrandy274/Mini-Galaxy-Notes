import React from "react";
import { AuthProps } from "./interface";

const BaseAuth: React.FC<AuthProps> = ({ children, title }) => {
	return (
		<>
			<div className="grid grid-cols-12 font-semibold">
				<div className="col-span-4 text-white font-sans font-bold bg-black min-h-screen pl-7">
					<div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start">
						<div className="row-span-4 row-start-2 text-4xl">
                            {title}
                            {children}
							{/* Button */}
							<div className="text-sm font-sans font-medium w-full pr-20 pt-14">
								<button
									type="button"
									className="text-center text-lg w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white uppercase tracking-wide"
								>
									{title}
								</button>
							</div>
						</div>
						{/* Text */}
						<a
							href={title === "Login" ? '/register' : '/login'}
							className="text-sm font-sans font-medium text-gray-400 underline"
						>
							{title === "Login" ? `Don't have an account? Sign up` : `Already have an account? Login`}
						</a>
					</div>
				</div>
				{/* Second column image */}
				<div className="banner col-span-8 text-white font-sans font-bold">
					{/* Aquí iría algún comentario */}
				</div>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: "\n    .banner {\n        background: url( 'https://s1.1zoom.me/b6058/448/Dogs_Svetlana_Shelemeteva_Hug_Little_girls_568770_1920x1080.jpg' );\n        background-repeat: no-repeat;\n        background-size: cover        \n    }\n",
				}}
			/>
		</>
	);
};

export default BaseAuth;
