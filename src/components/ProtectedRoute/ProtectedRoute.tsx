import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { MainLayoutProps } from "../MainLayout/interface";

const ProtectedRoute: React.FC<MainLayoutProps> = ({ children }) => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user, navigate]);

	return <>{user ? children : null}</>;
};

export default ProtectedRoute;