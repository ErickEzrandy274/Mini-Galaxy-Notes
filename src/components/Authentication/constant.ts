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
