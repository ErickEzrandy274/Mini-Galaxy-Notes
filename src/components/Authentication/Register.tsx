import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "context";
import { useDocumentTitle, extractError } from "utils";
import { motion } from "framer-motion";
import {
	AuthForm,
	MainLayout,
	BaseAuth,
	ScrollButton,
	basicAnimate,
	RegisterInputType,
	registerObj,
} from "components";

const Register = () => {
	useDocumentTitle("Notes App | Register");
	const { user, register } = useAuth();
	const { initial, animate, transition } = basicAnimate;
	const navigate = useNavigate();
	const [error, setError] = useState<any>(null);
	const [data, setData] = useState<RegisterInputType>(registerObj);

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

		if (error) {
			const errTimeOut = setTimeout(() => {
				setData(registerObj);
				setError(null);
			}, 1500);

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
