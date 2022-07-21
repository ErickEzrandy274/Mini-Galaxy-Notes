export const setColor = (
	type: "Edit" | "Archive" | "Delete" | "Add Notes" | "Close Edit"
) => {
	let domainColor: string = "red";
	let domainDarkness: number = 600;
	let domainRing: number = 500;

	switch (type) {
		case "Edit":
			domainColor = "green";
			break;

		case "Archive":
			domainColor = "blue";
			break;

		case "Delete":
			domainColor = "red";
			break;

		case "Close Edit":
			domainColor = "gray";
			domainDarkness = 700;
			domainRing = 800;
			break;

		default:
			domainColor = "purple";
			break;
	}

	return `bg-${domainColor}-${domainDarkness} hover:bg-${domainColor}-${
		domainDarkness + 100
	} focus:ring-${domainColor}-${domainRing} focus:ring-offset-${domainColor}-200`;
};
