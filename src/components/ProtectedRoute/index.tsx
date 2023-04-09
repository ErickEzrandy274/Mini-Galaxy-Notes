import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { MainLayoutProps } from "components";
import { useAuth } from "utils";

const ProtectedRoute: React.FC<MainLayoutProps> = ({ children }) => {
	const { user } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		!user && navigate("/login");
	}, [user, navigate]);

	return <>{user ? children : null}</>;
};

export default ProtectedRoute;
