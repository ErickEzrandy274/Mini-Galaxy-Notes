/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "context";
import { useDocumentTitle, useHandleAuth } from "utils";
import { motion } from "framer-motion";
import {
	AuthForm,
	MainLayout,
	BaseAuth,
	ScrollButton,
	basicAnimate,
	LoginInputType,
	loginObj,
} from "components";

const Login = () => {
	useDocumentTitle("Notes App | Login");
	const navigate = useNavigate();
	const { user, errorAuth, setErrorAuth } = useAuth();
	const { handleChange, handleLogin } = useHandleAuth();
	const { initial, animate, transition } = basicAnimate;
	const [data, setData] = useState<LoginInputType>(loginObj);

	useEffect(() => {
		user && navigate("/list");

		if (errorAuth) {
			setData(loginObj);
			setErrorAuth(null);
		}
	}, [user, navigate, errorAuth]);

	return (
		<>
			<ScrollButton />
			<MainLayout>
				<motion.section
					initial={initial}
					animate={animate}
					exit={initial}
					transition={user ? { ...transition, delay: 0.4 } : transition}
					className="flex justify-center py-5"
				>
					<BaseAuth title="Login" error={errorAuth}>
						<AuthForm
							typeForm="login"
							handleLogin={(e) => handleLogin(e, data)}
							handleChange={(e) => handleChange(e, setData)}
							{...data}
						/>
					</BaseAuth>
				</motion.section>
			</MainLayout>
		</>
	);
};

export default Login;
