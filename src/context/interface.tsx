export interface LoginProps {
	email: string;
	password: string;
}

export interface RegisterProps extends LoginProps {
	nickname: string;
}
