export interface InputType {
	title: string;
	content: string;
}

interface AttributeInput {
	name: string;
    handleChange: (e: any) => void;
}
export interface InputProps extends AttributeInput {
	type?: string;
	placeholder: string;
	value: string;
}

export interface InputAuthProps extends AttributeInput { }

export interface AuthFormProps {
    typeForm: "login" | "register"
    handleChange: (e: any) => void
    handleLogin?: (e: any) => void
    handleRegister?: (e: any) => void
}