import { NewLinkProps } from "../NewLink/interface";

export const navs: NewLinkProps[] = [
	{
		to: "/list",
		linkName: "List Notes",
		fromNav: true,
	},
	{
		to: "/create",
		linkName: "Create New Notes",
		fromNav: true,
	},
	{
		to: "/archived",
		linkName: "Archived",
		fromNav: true,
	},
];

export const authNavs: NewLinkProps[] = [
	{
		to: "/login",
		linkName: "Login",
		fromNav: true
	},
	{
		to: "/register",
		linkName: "Register",
		fromNav: true
	}
]