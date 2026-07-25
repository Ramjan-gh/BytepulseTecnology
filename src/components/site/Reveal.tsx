import React from "react";
import { useReveal } from "./hooks";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
}) => {
  // Completely disabled for 100% performance
  return <div className={className}>{children}</div>;
};