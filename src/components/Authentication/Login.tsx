/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { LoginInputType, loginObj } from "./interface";
import { motion } from "framer-motion";
import { basicAnimate } from "./constant";
import { useDocumentTitle } from "../../utils/function/useDocumentTitle";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import ScrollButton from "../Button/ScrollButton";

const Login = () => {
	useDocumentTitle("Notes App | Login");
	const navigate = useNavigate();
	const { initial, animate, transition } = basicAnimate;
	const { user, login, error, setError } = useAuth();
	const [data, setData] = useState<LoginInputType>(loginObj);

	const handleChange = (e: any) => {
		const { name, value } = e.target;

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
		user && navigate("/list");

		if (error) {
			const errTimeOut = setTimeout(() => {
				setData(loginObj);
				setError(null);
			}, 1200);

			return () => clearTimeout(errTimeOut);
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
					transition={user ? { ...transition, delay: 0.4 } : transition}
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
