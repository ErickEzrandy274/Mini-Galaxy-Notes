import { createContext, useContext, useEffect, useState } from "react";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	setPersistence,
	browserSessionPersistence,
} from "firebase/auth";
import { auth } from "../utils/firebase/firebase";
import { MainLayoutProps } from "../components/MainLayout/interface";
import { extractError } from "../utils/function/function";
import toast from "react-hot-toast";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const [user, setUser] = useState<any>(null);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email,
					displayName: user.displayName,
					token: user.refreshToken,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const register = async (
		email: string,
		password: string,
		displayName: string
	) => {
		await createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(user, { displayName });
				toast.success("Successfully created a new account!");
			})
			.catch((err: any) => {
				setError(extractError(err));
				toast.error(extractError(err));
			});
	};

	const login = async (email: string, password: string) => {
		setPersistence(auth, browserSessionPersistence).then(() => {
			// Existing and future Auth states are now persisted in the current
			// Closing the window would clear any existing state even
			// if a user forgets to sign out.
			// ...
			// New sign-in will be persisted with session persistence.
			signInWithEmailAndPassword(auth, email, password)
				.then(({ user }) => toast.success(`Welcome back ${user.displayName}!`))
				.catch((err: any) => {
					setError(extractError(err));
					toast.error(extractError(err));
				});
		});
	};

	const logout = async () => {
		setUser(null);
		await signOut(auth);
	};

	return (
		<AuthContext.Provider
			value={{ user, login, register, logout, error, setError }}
		>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
