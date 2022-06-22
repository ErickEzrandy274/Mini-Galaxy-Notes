/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { LoginInputType } from "./interface";

const Login = () => {
	const navigate = useNavigate();
	const { user, login, error, setError } = useAuth();
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
	};

	const handleLogin = async (e: any) => {
		e.preventDefault();
		await login(data.email, data.password);
		navigate("/list");
	};

	useEffect(() => {
		if (user) {
			navigate("/list");
		}

		if (error) {
			setTimeout(() => {
				setData({
					email: "",
					password: "",
				})
				setError(null)
			}, 1200)
		}
	}, [user, navigate, error]);

	return user ? null : (
		<MainLayout>
			<div className="flex justify-center pt-10">
				<BaseAuth title="Login" error={error}>
					<AuthForm
						typeForm="login"
						handleLogin={handleLogin}
						handleChange={handleChange}
						{...data}
					/>
				</BaseAuth>
			</div>
		</MainLayout>
	);
};

export default Login;
