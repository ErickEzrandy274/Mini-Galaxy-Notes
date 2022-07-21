export const setColor = (
	type: "Edit" | "Archive" | "Delete" | "Add Notes"
) => {
	let domainColor: string = "red";
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
		default:
			domainColor = "purple";
			break;
    }
    
	return `bg-${domainColor}-600 hover:bg-${domainColor}-700 focus:ring-${domainColor}-500 focus:ring-offset-${domainColor}-200`;
};
