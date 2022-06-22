import React from "react";

export interface AuthProps {
    children: React.ReactNode
    title: "Login" | "Register"
    error?: string
}

export interface LoginInputType {
    email: string
	password: string
}