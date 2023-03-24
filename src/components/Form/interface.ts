import { BaseSyntheticEvent } from "react";

export interface InputType {
	title: string;
	content: string;
}

interface AttributeInput {
	name: string;
	handleChange: (e: any) => void;
}

interface ValueProps {
	value: string | undefined;
}
export interface TypeForm {
	typeForm: "login" | "register";
}
export interface InputProps extends AttributeInput, ValueProps {
	type?: string;
	placeholder: string;
}

export interface InputAuthProps extends AttributeInput, ValueProps {
	errMsg: string;
	errTouched: boolean;
	handleBlur: (e: BaseSyntheticEvent) => void;
}

export interface AuthFormProps extends TypeForm {
	formik: any;
}
