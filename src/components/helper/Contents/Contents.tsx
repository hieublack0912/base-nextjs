import Header from "@/components/helper/Header";
import React from "react";

interface ContentsProps {
  children?: React.ReactNode;
}

const Contents: React.FC<ContentsProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={`mt-0`}>{children}</main>
    </>
  );
};
export default Contents;
