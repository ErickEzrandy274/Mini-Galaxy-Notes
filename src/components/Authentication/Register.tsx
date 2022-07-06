import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { extractError } from "../../utils/function/function";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { RegisterInputType } from "./interface";
import { motion } from "framer-motion";
import { basicAnimate } from "./constant";
import ScrollButton from "../Button/ScrollButton";

const Register = () => {
	const { user, register } = useAuth();
	const { initial, animate, transition } = basicAnimate;
	const navigate = useNavigate();
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<RegisterInputType>({
		email: "",
		password: "",
		nickname: "",
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
		if (user) {
			navigate("/list");
		}

		if (error) {
			setTimeout(() => {
				setData({
					email: "",
					password: "",
					nickname: "",
				});
				setError(null);
			}, 1500);
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
