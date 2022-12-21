import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <section data-testid="header">
      <nav
        className={`flex items-center justify-between bg-white flex-wrap min-w-[1280px] mx-auto h-14`}
      >
        <div className="flex items-center flex-shrink-0 text-center">
          <Link href={"/"}>hello world</Link>
        </div>
        <div className="flex items-end cursor-pointer pr-20">
          <p className="text-13">hihi</p>
        </div>
      </nav>
    </section>
  );
};

export default Header;
