/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "context";
import { useDocumentTitle } from "utils";
import { motion } from "framer-motion";
import {
	AuthForm,
	MainLayout,
	BaseAuth,
	ScrollButton,
	basicAnimate,
	registerObj,
	registerValidationSchema,
} from "components";
import { useFormik } from "formik";

const Register = () => {
	useDocumentTitle("Notes App | Register");
	const navigate = useNavigate();
	const { user, register, errorAuth, setErrorAuth } = useAuth();
	const { initial, animate, transition } = useMemo(() => basicAnimate, []);

	const { initialValues, validationSchema } = useMemo(() => {
		return {
			initialValues: registerObj,
			validationSchema: registerValidationSchema,
		};
	}, []);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			if (values) {
				register(values);
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
					<BaseAuth title="Register" error={errorAuth}>
						<AuthForm typeForm="register" formik={formik} />
					</BaseAuth>
				</motion.section>
			</MainLayout>
		</>
	);
};

export default Register;
