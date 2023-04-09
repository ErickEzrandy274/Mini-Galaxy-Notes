/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useDocumentTitle, useAuth } from "utils";
import { motion } from "framer-motion";
import {
	AuthForm,
	MainLayout,
	BaseAuth,
	ScrollButton,
	basicAnimate,
	loginObj,
	loginValidationSchema,
} from "components";
import { useFormik } from "formik";

const Login = () => {
	useDocumentTitle("Mini Galaxy Notes App | Login");
	const navigate = useNavigate();
	const { user, login, errorAuth, setErrorAuth } = useAuth();
	const { initial, animate, transition } = useMemo(() => basicAnimate, []);
	const { initialValues, validationSchema } = useMemo(() => {
		return {
			initialValues: loginObj,
			validationSchema: loginValidationSchema,
		};
	}, []);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			if (values) {
				login(values);
				resetForm();
			}
		},
	});

	useEffect(() => {
		user && navigate("/list");

		errorAuth && setErrorAuth(null);
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
						<AuthForm typeForm="login" formik={formik} />
					</BaseAuth>
				</motion.section>
			</MainLayout>
		</>
	);
};

export default Login;
