import { ReactNode } from "react";

export interface AuthProps {
	children: ReactNode;
	title: "Login" | "Register";
	error?: string;
}

export interface LoginInputType {
	email: string;
	password: string;
}

export interface RegisterInputType extends LoginInputType {
	nickname: string;
}
