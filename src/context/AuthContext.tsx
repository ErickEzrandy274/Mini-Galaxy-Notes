import { createContext, useContext, useEffect, useState } from "react";
import {
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase/firebase";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	console.log("user: " + user);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log("props user adalah " + user);
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email,
					token: user.getIdTokenResult,
					displayName: user.displayName,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const register = async (email: string, password: string, displayName: string) => {
		await createUserWithEmailAndPassword(auth, email, password).then(async result => {
			return await updateProfile(result.user, {displayName})
		});
	};

	const login = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = async () => {
		setUser(null);
		await signOut(auth);
	};

	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
