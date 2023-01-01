import { ToastIcon, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { toastAnimate } from "./animation";
import IconCheckmark from "../Icon/IconCheckmark";
import IconClose from "../Icon/IconClose";

const index = () => {
	const { initial, animate, exit, transition } = toastAnimate;
	return (
		<Toaster
			toastOptions={{
				duration: 4000,
				success: { icon: <IconCheckmark />, duration: 1500 },
				error: { icon: <IconClose />, duration: 3000 },
			}}
		>
			{(t) => (
				<motion.div
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
					className={`transform p-3 px-5 flex items-center gap-3 rounded-lg shadow-lg md:text-lg text-white font-semibold ${
						t.type === "error" ? `bg-red-500` : `bg-green-500`
					} tracking-wide`}
				>
					<ToastIcon toast={t} />
					<p>{t.message?.toString()}</p>
				</motion.div>
			)}
		</Toaster>
	);
};

export default index;
