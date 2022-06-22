import React from "react";
import BasicButton from "../Button/BasicButton";
import InputAuthForm from "./InputAuthForm";
import { AuthFormProps } from "./interface";

const AuthForm: React.FC<AuthFormProps> = ({
	handleChange,
	handleLogin,
	handleRegister,
    typeForm,
    email,
    password
}) => {
	return (
		<form onSubmit={typeForm === "login" ? handleLogin : handleRegister}>
			<InputAuthForm name="email" handleChange={handleChange} value={email} typeForm={typeForm} />
			<InputAuthForm name="password" handleChange={handleChange} value={password} typeForm={typeForm} />

			<div className="mt-8">
				<BasicButton
                    type="submit"
                    email={email}
                    password={password}
					buttonName={typeForm.substring(0,1).toUpperCase() + typeForm.substring(1)}
					className="w-full px-4 uppercase py-2 tracking-wide rounded-lg text-white transition-colors duration-200 transform"
				/>
			</div>
		</form>
	);
};

export default AuthForm;
