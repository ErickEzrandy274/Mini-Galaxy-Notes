import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import AuthForm from "../Form/AuthForm";
import MainLayout from "../MainLayout/MainLayout";
import BaseAuth from "./BaseAuth";
import { RegisterInputType } from "./interface";

const Register = () => {
	const { user, register } = useAuth();
	const navigate = useNavigate();
	const [data, setData] = useState<RegisterInputType>({
		nickname: "",
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

	const handleRegister = async (e: any) => {
		e.preventDefault();

		try {
			await register(data.email, data.password);
			navigate("/list");
		} catch (err: any) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		if (user) {
			navigate("/list");
		}
	}, [user, navigate]);

	return user ? null : (
		<MainLayout>
			<div className="pt-6">
				<BaseAuth title="Register">
					<AuthForm
						typeForm="register"
						handleChange={handleChange}
						handleRegister={handleRegister}
					/>
				</BaseAuth>
			</div>
		</MainLayout>
	);
};

export default Register;
