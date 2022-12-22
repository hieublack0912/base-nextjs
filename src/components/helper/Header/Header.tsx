import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <section data-testid="header">
      <nav
        className={` items-center justify-between bg-white flex-wrap min-w-[1280px] mx-auto h-14`}
      >
        <div className="flex items-center flex-shrink-0 text-center">
          <Link href={"/"}>hello world</Link>
        </div>
        <button
          className="rounded bg-red-200"
          onClick={() => {
            router.push("/product");
          }}
        >
          back
        </button>
        {/* <div className="flex items-end cursor-pointer pr-20">
          <p className="text-13">hihi</p>
        </div> */}
      </nav>
    </section>
  );
};

export default Header;
