import React from "react";
import { extendBasicAnimate } from "../Authentication/constant";
import { InputType } from "../Form/interface";
import { motion } from "framer-motion";

const InfoTooltip: React.FC<InputType> = ({ title, content }) => {
	const { initial, animate, transition } = extendBasicAnimate;

	return (
		<motion.div
			initial={initial}
			animate={animate}
			exit={initial}
			transition={{ ...transition, delay: 0.5 }}
			className={`tooltip tooltip-bottom tooltip-info -mt-5 ${
				(!title.length || !content.length) && `tooltip-open`
			}`}
			data-tip="Enter title and content to activate the button!"
		></motion.div>
	);
};

export default InfoTooltip;
