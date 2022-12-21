import React from "react";
import Contents from "../Contents";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Contents>{children}</Contents>
    </>
  );
};

export default Layout;
