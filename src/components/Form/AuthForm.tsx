import React from "react";
import { toCapitalize } from "../../utils/function/function";
import { AuthFormProps } from "./interface";
import BasicButton from "../Button/BasicButton";
import InputAuthForm from "./InputAuthForm";

const AuthForm: React.FC<AuthFormProps> = ({
	handleChange,
	handleLogin,
	handleRegister,
	typeForm,
	email,
	password,
	nickname,
}) => {
	return (
		<form onSubmit={typeForm === "login" ? handleLogin : handleRegister}>
			{typeForm === "register" && (
				<InputAuthForm
					name="nickname"
					handleChange={handleChange}
					value={nickname}
					typeForm={typeForm}
				/>
			)}
			<InputAuthForm
				name="email"
				handleChange={handleChange}
				value={email}
				typeForm={typeForm}
			/>
			<InputAuthForm
				name="password"
				handleChange={handleChange}
				value={password}
				typeForm={typeForm}
			/>

			<div className="mt-8">
				<BasicButton
					type="submit"
					email={email}
					password={password}
					nickname={nickname}
					typeForm={typeForm}
					buttonName={toCapitalize(typeForm)}
					className="w-full px-4 uppercase py-2 tracking-wide rounded-md text-white transition-colors duration-200 transform"
				/>
			</div>
		</form>
	);
};

export default AuthForm;
