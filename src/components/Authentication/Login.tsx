import { useState } from "react";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";

const Login = () => {
	const [data, setData] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});

	const handleChange = (e: any) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<MainLayout>
			<div className="pt-6">
				<BaseAuth title="Login">
					<form onSubmit={handleSubmit}>
						<div className="mt-4">
							<label
								className="block mb-2 text-sm font-medium text-gray-200"
								htmlFor="email"
							>
								Email
							</label>
							<input
								id="email"
								className="block w-full px-4 py-2 border rounded-md text-gray-300 border-gray-600 focus:ring-opacity-50 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
								type="email"
								onChange={handleChange}
							/>
						</div>

						<div className="mt-4">
							<div className="flex justify-between">
								<label
									className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
									htmlFor="password"
								>
									Password
								</label>
							</div>

							<input
								id="password"
								className="block w-full px-4 py-2 bg-white border rounded-md text-gray-300 :border-gray-600 focus:ring-opacity-50 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
								type="password"
								onChange={handleChange}
							/>
						</div>
					</form>
				</BaseAuth>
			</div>
		</MainLayout>
	);
};

export default Login;
