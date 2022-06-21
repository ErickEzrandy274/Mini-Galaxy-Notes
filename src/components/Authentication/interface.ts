import React from "react";

export interface AuthProps {
    children: React.ReactNode
    title: "Login" | "Register"
}

export interface LoginInputType {
    email: string
	password: string
}

export interface RegisterInputType extends LoginInputType {
    fullName: string
}