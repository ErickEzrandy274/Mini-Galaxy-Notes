import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { extractError } from "../../utils/function/function";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { RegisterInputType } from "./interface";

const Register = () => {
	const { user, register } = useAuth();
	// const [loading, setLoading] = useState(true);
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
			navigate("/list");
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
		<MainLayout>
			<div className="flex justify-center pt-10">
				<BaseAuth title="Register" error={error}>
					<AuthForm
						typeForm="register"
						handleChange={handleChange}
						handleRegister={handleRegister}
						{...data}
					/>
				</BaseAuth>
			</div>
		</MainLayout>
	);
};

export default Register;
