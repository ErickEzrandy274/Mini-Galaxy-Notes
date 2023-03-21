import React from "react";
import { toCapitalize } from "utils";
import { Button, InputAuthForm, AuthFormProps } from "components";

const AuthForm: React.FC<AuthFormProps> = ({ typeForm, formik }) => {
	return (
		<form onSubmit={formik.handleSubmit}>
			{typeForm === "register" && (
				<InputAuthForm
					name="nickname"
					handleChange={formik.handleChange}
					value={formik.values.nickname}
					errorMsg={formik.errors.nickname}
				/>
			)}

			<InputAuthForm
				name="email"
				handleChange={formik.handleChange}
				value={formik.values.email}
				errorMsg={formik.errors.email}
			/>

			<InputAuthForm
				name="password"
				handleChange={formik.handleChange}
				value={formik.values.password}
				errorMsg={formik.errors.password}
			/>

			<div className="mt-8">
				<Button
					type="submit"
					buttonName={toCapitalize(typeForm)}
					errors={formik.errors}
					className="w-full px-4 uppercase py-2 tracking-wide rounded-md text-white transition-colors duration-200 transform"
				/>
			</div>
		</form>
	);
};

export default AuthForm;
