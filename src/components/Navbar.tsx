import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[100] h-14 inset-x-0 w-full bg-white bg-opacity-75 backdrop-blur-lg transition-all border-b border-gray-200 mb-4 md:mb-20">
      <MaxWidthWrapper>
        <div className="flex items-center h-14">
          <Link href="/" className=" font-bold text-lg flex items-center">
              <span className="text-blue-600">calc4</span>everything
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
