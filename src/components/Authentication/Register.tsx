import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";

const Register = () => {
	const { user, register } = useAuth();
	console.log(user);
	const [data, setData] = useState<{
		fullName: string;
		email: string;
		password: string;
	}>({
		fullName: "",
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

	const handleRegister = async (e: any) => {
		console.log("handleRegister is run!");
		e.preventDefault();

		try {
			await register(data.email, data.password);
		} catch (err: any) {
			console.log(err.message);
		}
	};

	return (
		<MainLayout>
			<div className="pt-6">
				<BaseAuth title="Register">
					<form onSubmit={handleRegister}>
						<div className="mt-4">
							<label
								className="block mb-2 text-sm font-medium text-gray-200"
								htmlFor="text"
							>
								Full Name
							</label>
							<input
								id="text"
								name="fullName"
								className="block w-full px-4 py-2 border rounded-md text-gray-900 border-gray-600 focus:ring-opacity-50 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
								type="text"
								onChange={handleChange}
							/>
						</div>
						<div className="mt-4">
							<label
								className="block mb-2 text-sm font-medium text-gray-200"
								htmlFor="email"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								className="block w-full px-4 py-2 border rounded-md text-gray-900 border-gray-600 focus:ring-opacity-50 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
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
								name="password"
								className="block w-full px-4 py-2 bg-white border rounded-md text-gray-900 border-gray-600 focus:ring-opacity-50 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-500"
								type="password"
								onChange={handleChange}
							/>
						</div>

						<div className="mt-8">
							<button
								type="submit"
								className="w-full px-4 uppercase py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-600"
							>
								Register
							</button>
						</div>
					</form>
				</BaseAuth>
			</div>
		</MainLayout>
	);
};

export default Register;
