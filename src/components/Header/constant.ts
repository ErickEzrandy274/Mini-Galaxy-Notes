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
];
