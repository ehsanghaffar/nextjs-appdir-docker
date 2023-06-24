import { ReactNode } from "react";
import { colors } from "./Generic";

export type buttonVariant = "filled" | "outlined" | "gradient" | "text";
export type buttonSize = "sm" | "md" | "lg";
export type buttonType = "submit" | "reset" | undefined;
export type buttonColor = "white" | colors;
export type className = string;
export type children = ReactNode;