import { ToastIcon, Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { toastAnimate } from "./animation";
import { IconCheckmark, IconClose, IconWarning } from "components";

const index = () => {
	const { initial, animate, exit, transition } = toastAnimate;
	return (
		<Toaster
			toastOptions={{
				duration: 3000,
				success: { icon: <IconCheckmark />, duration: 1500 },
				error: { icon: <IconClose />, duration: 3000 },
				blank: { icon: <IconWarning />, duration: 3000 },
			}}
		>
			{(t) => {
				const bgColor =
					t.type === "error"
						? "bg-red-500"
						: t.type === "success"
						? "bg-green-500"
						: "bg-yellow-500";

				return (
					<motion.div
						initial={initial}
						animate={animate}
						exit={exit}
						transition={transition}
						className={`transform -mt-2 p-3 px-5 flex items-center gap-3 rounded-lg shadow-lg md:text-lg text-white font-semibold ${bgColor} tracking-wide`}
					>
						<ToastIcon toast={t} />
						<p>{t.message?.toString()}</p>
					</motion.div>
				);
			}}
		</Toaster>
	);
};

export default index;
