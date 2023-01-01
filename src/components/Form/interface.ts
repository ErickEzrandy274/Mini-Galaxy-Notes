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

export interface InputAuthProps extends AttributeInput, ValueProps, TypeForm {}

export interface AuthFormProps extends TypeForm {
	email: string;
	password: string;
	nickname?: string;
	handleChange: (e: any) => void;
	handleLogin?: (e: any) => void;
	handleRegister?: (e: any) => void;
}

export const inputObj = {
	title: "",
	content: "",
};
