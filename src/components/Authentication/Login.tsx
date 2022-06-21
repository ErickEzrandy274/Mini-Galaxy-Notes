import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { LoginInputType } from "./interface";

const Login = () => {
	const navigate = useNavigate();
	const { user, login } = useAuth();

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
		try {
			await login(data.email, data.password);
			navigate("/list");
		} catch (err: any) {
			console.log(err.message.substring(22, 36)); // user-not-found
		}
	};

	useEffect(() => {
		if (user) {
			navigate("/list");
		}
	}, [user, navigate]);

	return user ? null : (
		<MainLayout>
			<div className="pt-6">
				<BaseAuth title="Login">
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
