import type React from "react";
import Link from "next/link";

interface ButtonPropsColor {
	type: "button";
	onClick?: () => void;
	color: Colors;

	className?: string;
	id?: string;
}

interface LinkPropsColor {
	type: "link";
	href: string;
	onClick?: () => void;
	target?: string;
	color: Colors;

	className?: string;
	id?: string;
}

type Colors = keyof typeof Colors;
type AllPropsWithColor = ButtonPropsColor | LinkPropsColor;

export type LinkProps = Omit<LinkPropsColor, "color">;
export type ButtonProps = Omit<ButtonPropsColor, "color">;
export type AllProps = LinkProps | ButtonProps;

const Colors = {
	primary: {
		bg: "bg-primary",
		hoverBg: "hover:bg-primary-500"
	},
	secondary: {
		bg: "bg-secondary",
		hoverBg: "hover:bg-secondary-500"
	},
	tertiary: {
		bg: "bg-highlight",
		hoverBg: "hover:bg-highlight-500"
	},
	white: {
		bg: "bg-white-200",
		hoverBg: "hover:bg-white-400"
	},
	transparent: {
		bg: "bg-transparent px-2 py-0",
		hoverBg: "hover:text-white-500"
	},
	danger: {
		bg: "bg-red-600",
		hoverBg: "hover:bg-opacity-50"
	},
	dangerBorder: {
		bg: "border-2 border-red-600",
		hoverBg: "hover:bg-red-500"
	}
};

const Button: React.FC<React.PropsWithChildren<AllPropsWithColor>> = (props) => {
	const El = (props.type === "link" ? Link : (props: any) => <button {...props} />) as React.FC<any>;
	const colors = Colors[props.color];

	return (
		<El
			{...props}
			className={`${props.className ?? ""} ${colors.bg} text-white px-4 py-2 rounded-xl text-base ${colors.hoverBg} transition-colors`}
		/>
	);
};

export default Button;
