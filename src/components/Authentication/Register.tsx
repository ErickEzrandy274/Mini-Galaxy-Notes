import React from "react";
import BaseAuth from "./BaseAuth";

const Register = () => {
	return (
        <BaseAuth title='Register'>
            <div className="pt-10 pr-20">
				<label className="text-sm font-sans font-medium">
					Name
				</label>
				<input
					type="text"
                    name="name"
                    required
					placeholder="Write your name"
					className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
				/>
			</div>
			<div className="pt-2 pr-20">
				<label className="text-sm font-sans font-medium">
					Email
				</label>
				<input
					type="email"
                    name="username"
                    required
					placeholder="Write your email"
					className="w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
				/>
			</div>
			<div className="pt-2 pr-20">
				<label className="text-sm font-sans font-medium">
					Password
				</label>
				<input
					type="password"
                    name="password"
                    required
					placeholder="Write your password"
					className=" w-full bg-black py-3 px-12 border hover: border-gray-500 rounded shadow text-base font-sans"
				/>
			</div>
		</BaseAuth>
	);
};

export default Register;
