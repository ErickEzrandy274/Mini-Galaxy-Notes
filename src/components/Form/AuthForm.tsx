import React, { useMemo } from "react";
import { toCapitalize } from "utils";
import { Button, InputAuthForm, AuthFormProps, authInput } from "components";

const AuthForm: React.FC<AuthFormProps> = ({ typeForm, formik }) => {
	const memoizedAuthInput = useMemo(() => authInput, []);

	return (
		<form onSubmit={formik.handleSubmit}>
			{memoizedAuthInput.map(({ name, type }) => {
				const props = {
					name: name,
					value: formik.values[name],
					errMsg: formik.errors[name],
					errTouched: formik.touched[name],
					handleChange: formik.handleChange,
					handleBlur: formik.handleBlur,
				};

				return type === "all" || type === typeForm ? (
					<InputAuthForm key={name} {...props} />
				) : null;
			})}

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
