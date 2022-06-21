import React from "react";
import BasicButton from "../Button/BasicButton";
import InputAuthForm from "./InputAuthForm";
import { AuthFormProps } from "./interface";

const AuthForm: React.FC<AuthFormProps> = ({
	handleChange,
	handleLogin,
	handleRegister,
	typeForm,
}) => {
	return (
		<form onSubmit={typeForm === "login" ? handleLogin : handleRegister}>
			<InputAuthForm name="email" handleChange={handleChange} />
			<InputAuthForm name="password" handleChange={handleChange} />

			<div className="mt-8">
				<BasicButton
					type="submit"
					buttonName={typeForm.substring(0,1).toUpperCase() + typeForm.substring(1)}
					className="w-full px-4 uppercase py-2 tracking-wide 
									text-white transition-colors duration-200 transform bg-blue-600 
										rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-600"
				/>
			</div>
		</form>
	);
};

export default AuthForm;
