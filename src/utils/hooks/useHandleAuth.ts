import { useCallback } from "react";
import { useAuth } from "context";
import { LoginInputType, RegisterInputType } from "components";

const useHandleAuth = () => {
	const { login, register } = useAuth();

	const handleChange = useCallback((e: any, setData: any) => {
		const { name, value } = e.target;

		setData((prevData: any) => {
			return {
				...prevData,
				[name]: value,
			};
		});
	}, []);

	const handleLogin = async (e: any, data: LoginInputType) => {
		e.preventDefault();
		await login(data);
	};

	const handleRegister = async (e: any, data: RegisterInputType) => {
		e.preventDefault();
		await register(data);
	};

	return {
		handleLogin,
		handleChange,
		handleRegister,
	};
};

export default useHandleAuth;
