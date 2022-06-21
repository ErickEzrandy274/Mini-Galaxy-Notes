import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { LoginInputType } from "./interface";

const Login = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	const [data, setData] = useState<LoginInputType>({
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
		console.log(data)
	};

	const handleLogin = async (e: any) => {
		e.preventDefault();
		console.log(data);
		try {
			await login(data.email, data.password);
			console.log("bakal pindah")
			navigate("/list");
		} catch (err: any) {
			console.log(err.message.substring(22, 36)); // user-not-found
		}
	};

	return (
		<MainLayout>
			<div className="pt-6">
				<BaseAuth title="Login">
					<form onSubmit={handleLogin}>
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
								placeholder="Write your email"
							/>
						</div>

						<div className="mt-4">
							<div className="flex justify-between">
								<label
									className="block mb-2 text-sm font-medium text-gray-300"
									htmlFor="password"
								>
									Password
								</label>
							</div>

							<input
								id="password"
								name="password"
								className="block w-full px-4 py-2 bg-white border rounded-md text-gray-900 border-gray-600 focus:ring-opacity-50 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-500"
								type="password"
								placeholder="Write your password"
								onChange={handleChange}
							/>
						</div>

						<div className="mt-8">
							<button
								type="submit"
								className="w-full px-4 uppercase py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-600"
							>
								Login
							</button>
						</div>
					</form>
				</BaseAuth>
			</div>
		</MainLayout>
	);
};

export default Login;
