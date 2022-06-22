import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { extractError } from "../../utils/function/function";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { LoginInputType } from "./interface";

const Login = () => {
	const navigate = useNavigate();
	const { user, login } = useAuth();
	
	const [error, setError] = useState<any>(null)
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
			setError(extractError(err));
		}
	};

	useEffect(() => {
		if (user) {
			navigate("/list");
		}
	}, [user, navigate]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				setData({
					email: "",
					password: "",
				})
				setError(null)
			}, 1200)
		}
	})

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
