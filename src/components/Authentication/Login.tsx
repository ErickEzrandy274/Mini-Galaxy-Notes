/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { LoginInputType } from "./interface";
import { motion } from "framer-motion";
import { basicAnimate } from "./constant";
import ScrollButton from "../Button/ScrollButton";

const Login = () => {
	const navigate = useNavigate();
	const { initial, animate, transition } = basicAnimate;
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
		setTimeout(() => {
			navigate("/list");
		}, 500);
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
				});
				setError(null);
			}, 1200);
		}
	}, [user, navigate, error]);

	return user ? null : (
		<>
			<ScrollButton />
			<MainLayout>
				<motion.div
					initial={initial}
					animate={animate}
					exit={initial}
					transition={transition}
					className="flex justify-center py-5"
				>
					<BaseAuth title="Login" error={error}>
						<AuthForm
							typeForm="login"
							handleLogin={handleLogin}
							handleChange={handleChange}
							{...data}
						/>
					</BaseAuth>
				</motion.div>
			</MainLayout>
		</>
	);
};

export default Login;
