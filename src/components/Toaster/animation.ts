export const toastAnimate = {
	initial: { y: "-5vw", opacity: 0, scale: 0.25 },
	animate: { y: 0, opacity: 100, scale: 1 },
	exit: {
		y: "-5vw",
		opacity: 0,
		transition: { duration: 0.3, ease: "easeInOut" },
	},
	transition: {
		type: "spring",
		stiffness: 120,
		duration: 3,
	},
};
