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
	RegisterInputType,
	registerObj,
} from "components";

const Register = () => {
	useDocumentTitle("Notes App | Register");
	const navigate = useNavigate();
	const { user, errorAuth, setErrorAuth } = useAuth();
	const { handleChange, handleRegister } = useHandleAuth();
	const { initial, animate, transition } = basicAnimate;
	const [data, setData] = useState<RegisterInputType>(registerObj);

	useEffect(() => {
		user && navigate("/list");

		if (errorAuth) {
			setData(registerObj);
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
					<BaseAuth title="Register" error={errorAuth}>
						<AuthForm
							typeForm="register"
							handleChange={(e) => handleChange(e, setData)}
							handleRegister={(e) => handleRegister(e, data)}
							{...data}
						/>
					</BaseAuth>
				</motion.section>
			</MainLayout>
		</>
	);
};

export default Register;
