import React, { ReactNode, HTMLAttributes } from "react";

interface CustomParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

const CustomParagraph: React.FC<CustomParagraphProps> = ({
  children,
  ...props
}) => (
  <p className="my-6" {...props}>
    {children}
  </p>
);

export default CustomParagraph;
