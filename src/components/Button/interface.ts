import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { InputType } from "components";

interface ButtonProps {
	className: string;
	type: "button" | "submit";
	buttonName: string;
}

export interface IconButtonProps extends ButtonProps {
	iconName: IconDefinition;
	handleClick?: () => void;
	field?: InputType;
}

export interface BasicButtonProps extends ButtonProps {
	errors: Object;
}
