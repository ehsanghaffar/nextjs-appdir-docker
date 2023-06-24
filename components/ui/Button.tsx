"use client";
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "primary" | "info" | "danger";
}

export default function Button({
  status,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${status || ""} ${className || ""}`} {...rest}>
      {children}
    </button>
  );
}
