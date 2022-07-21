import React from "react";
import { InputType } from "../Form/interface";

const InfoTooltip: React.FC<InputType> = ({ title, content }) => {
	return (
		<div
			className={`tooltip tooltip-bottom tooltip-info -mt-5 ${
				(!title.length || !content.length) && `tooltip-open`
			}`}
			data-tip="Enter title and content to activate the button!"
		></div>
	);
};

export default InfoTooltip;
