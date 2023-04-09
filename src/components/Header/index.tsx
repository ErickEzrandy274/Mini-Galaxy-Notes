import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth, useWindowSize } from "utils";
import { NewLink, NewLinkProps, navs, authNavs, IconGithub } from "components";

const Header = () => {
	const { user, logout } = useAuth();
	const { width } = useWindowSize();
	const navigate = useNavigate();
	const [show, setShow] = useState<boolean>(false);
	const customClassLogOut = `px-2 py-1 hover:font-semibold text-lg bg-red-600 transition-colors duration-200 transform rounded-lg 
		hover:bg-red-700 text-gray-200 hover:text-gray-100 md:mx-2`;

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<header className="shadow bg-gray-800 p-1 sticky top-0 z-10">
			<nav className="container px-6 py-2 mx-auto md:flex">
				<section className="flex items-center justify-between">
					<NewLink
						customClass="text-2xl font-bold transition-colors duration-200 transform hover:text-white lg:text-3xl text-gray-300"
						to="/"
						linkName="Home"
						fromNav
					/>

					<button
						className={`hamburger hamburger--slider md:hidden ${
							show ? `is-active` : ``
						}`}
						onClick={() => setShow(!show)}
					>
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
				</section>

				<section
					className={`${
						width >= 768 ? `flex` : show ? `flex` : `hidden`
					} w-full md:items-center md:justify-between`}
				>
					<section className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
						{navs.map((item: NewLinkProps, index: number) => {
							return <NewLink {...item} key={`navbar-` + index} />;
						})}
					</section>
				</section>

				<section
					className={`${
						width >= 768 ? `flex` : show ? `flex` : `hidden`
					} flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0 md:items-center`}
				>
					{user ? (
						<section className="flex flex-col px-2 md:flex-row text-center gap-3 md:items-center">
							<section className="flex gap-2 md:gap-0 md:flex-col items-start md:items-center font-semibold text-white">
								<p>Hello</p>
								<p>{user.displayName ? user.displayName : user.email}</p>
								<p className="md:hidden">👋👋👋</p>
							</section>

							<button onClick={handleLogout} className={customClassLogOut}>
								Logout
							</button>
						</section>
					) : (
						authNavs.map((item: NewLinkProps, index: number) => {
							return <NewLink {...item} key={`navbar-` + index} />;
						})
					)}

					<a
						href="https://github.com/ErickEzrandy274/Mini-Galaxy-Notes"
						className="flex items-center sm:gap-1 hover:text-white text-gray-300 font-semibold"
						aria-label="Github"
					>
						<p className="w-24 sm:w-24 p-1 px-2 md:px-1 sm:text-right">
							Our Repo
						</p>
						<IconGithub />
					</a>
				</section>
			</nav>
		</header>
	);
};

export default Header;
