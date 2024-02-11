import React from "react";

interface TemplateProps {
  children: React.ReactNode;
}
const TemplateAuth: React.FC<TemplateProps> = ({ children }) => {
  return <div className="h-screen justify-center px-6 flex">{children}</div>;
};

export default TemplateAuth;
