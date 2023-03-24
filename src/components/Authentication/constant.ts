import { object, string } from "yup";

export const basicAnimate = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	transition: { delay: 0.25, stiffness: 100, duration: 1 },
};

export const secondAnimate = {
	initial: { x: "-300" },
	animate: { x: 0 },
	transition: { type: "spring", stiffness: 120, duration: 4, mass: 2 },
};

export const thirdAnimate = {
	initial: { x: "300" },
};

export const customTransition = {
	transition: { delay: 0.5, stiffness: 100, duration: 1.75 },
};

export const extendBasicAnimate = {
	initial: { opacity: 0, scale: 0 },
	animate: { opacity: 1, scale: 1 },
	transition: { stiffness: 120, duration: 1 },
};

export const loginObj = {
	email: "",
	password: "",
};

export const registerObj = {
	...loginObj,
	nickname: "",
};

export const inputObj = {
	title: "",
	content: "",
};

export const authInput = [
	{ name: "nickname", type: "register" },
	{ name: "email", type: "all" },
	{ name: "password", type: "all" },
];

const authValidationSchema = {
	email: string()
		.email()
		.required("Please write your email!")
		.matches(
			/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}\.?)$/,
			"Your email is not valid!"
		),
	password: string()
		.required("Please write your password!")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_+~`\-={}[\]:;"'<>,.?/]{8,}$/,
			"The password must contain minimal 8 characters with one uppercase, one lowercase, one number, and one special character!"
		),
};

export const loginValidationSchema = object({ ...authValidationSchema });

export const registerValidationSchema = object({
	...authValidationSchema,
	nickname: string()
		.required("Please write your nickname!")
		.matches(
			/^[a-zA-Z]{3,}( [a-zA-Z]+)*$/,
			"Your nickname must be at least 3 characters long!"
		),
});
