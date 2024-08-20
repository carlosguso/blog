import React, { ReactNode, HTMLAttributes } from "react";

interface CustomH1Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

const CustomH1: React.FC<CustomH1Props> = ({ children, ...props }) => (
  <h1
    className="text-2xl font-semibold text-main-accent-light dark:text-main-accent transition-colors duration-300 ease-in-out"
    {...props}
  >
    {children}
  </h1>
);

export default CustomH1;
