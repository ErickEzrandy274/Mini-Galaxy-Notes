import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { basicAnimate, customTransition } from "components";

const HomePage = () => {
	const { initial, animate } = basicAnimate;
	const { transition } = customTransition;
	const nav = useNavigate();

	return (
		<section className="bg-indigo-900 relative overflow-hidden h-screen cursor-default">
			<img
				src="https://www.tailwind-kit.com/images/landscape/6.svg"
				className="absolute h-full w-full object-cover"
				alt="cover page"
			/>
			<div className="inset-0 bg-black opacity-25 absolute"></div>
			<section className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
				<motion.article
					initial={initial}
					animate={animate}
					exit={initial}
					transition={transition}
					className="w-full flex flex-col gap-20 justify-between text-center relative z-10"
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
						className="font-extrabold text-5xl sm:text-8xl text-white leading-tight mt-4"
					>
						Mini Galaxy Notes
					</motion.h1>

					<h2
						onClick={() => nav("/list")}
						className="text-2xl lg:text-4xl tracking-wide text-gray-300 hover:text-white duration-300 font-bold underline cursor-pointer"
					>
						Go to My Account
					</h2>
				</motion.article>
			</section>
		</section>
	);
};

export default HomePage;
