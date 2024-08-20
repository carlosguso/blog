import React, { ReactNode, HTMLAttributes } from "react";

interface CustomH2Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

const CustomH2: React.FC<CustomH2Props> = ({ children, ...props }) => (
  <h2
    className="text-2xl font-semibold my-4 text-black dark:text-white"
    {...props}
  >
    {children}
  </h2>
);

export default CustomH2;
