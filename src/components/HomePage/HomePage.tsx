import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { basicAnimate, customTransition } from "../Authentication/constant";

const HomePage = () => {
	const { initial, animate } = basicAnimate;
	const { transition } = customTransition;
	const nav = useNavigate()

	return (
		<div className="bg-indigo-900 relative overflow-hidden h-screen cursor-default">
			<img
				src="https://www.tailwind-kit.com/images/landscape/6.svg"
				className="absolute h-full w-full object-cover"
				alt="cover page"
			/>
			<div className="inset-0 bg-black opacity-25 absolute"></div>
			<div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
				<motion.div
					initial={initial}
					animate={animate}
					exit={initial}
					transition={transition}
					className="w-full flex flex-col items-center relative z-10"
				>
					<motion.h1
						initial={{ x: "-100vw" }}
						animate={{ x: 0 }}
						transition={{
							type: "spring",
							stiffness: 120,
							duration: 4,
							mass: 2,
						}}
						className="font-extrabold text-5xl text-center sm:text-8xl text-white leading-tight mt-4"
					>
						Welcome to Notes Application
					</motion.h1>

					<button
						onClick={() => nav('/list')}
						className="bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold rounded-lg shadow-xl mt-10">
						START NOW
					</button>
				</motion.div>
			</div>
		</div>
	);
};

export default HomePage;
