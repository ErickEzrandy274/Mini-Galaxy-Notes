import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { extractError } from "../../utils/function/function";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { RegisterInputType, authObj } from "./interface";
import { motion } from "framer-motion";
import { basicAnimate } from "./constant";
import ScrollButton from "../Button/ScrollButton";
import { useDocumentTitle } from "../../utils/function/useDocumentTitle";

const Register = () => {
	useDocumentTitle("Notes App | Register");
	const { user, register } = useAuth();
	const { initial, animate, transition } = basicAnimate;
	const navigate = useNavigate();
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<RegisterInputType>(authObj);

	const handleChange = (e: any) => {
		const { name, value } = e.target;

		setData({
			...data,
			[name]: value,
		});
	};

	const handleRegister = async (e: any) => {
		e.preventDefault();

		try {
			await register(data.email, data.password, data.nickname);
			setTimeout(() => {
				navigate("/list");
			}, 500);
		} catch (err: any) {
			setError(extractError(err));
		}
	};

	useEffect(() => {
		user && navigate("/list");

		error &&
			setTimeout(() => {
				setData(authObj);
				setError(null);
			}, 1500);
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
					<BaseAuth title="Register" error={error}>
						<AuthForm
							typeForm="register"
							handleChange={handleChange}
							handleRegister={handleRegister}
							{...data}
						/>
					</BaseAuth>
				</motion.div>
			</MainLayout>
		</>
	);
};

export default Register;
