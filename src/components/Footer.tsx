import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative border-t border-gray-200">
      <MaxWidthWrapper>
        <div className="h-full flex flex-col md:flex-row md:items-center justify-center md:justify-between">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Maciej Brzozowski. All rights
              reserved
            </p>
          </div>

          <div className="flex items-center justify-center mt-4 md:mt-0">
            <div className="flex space-x-6 md:space-x-8">
              <Link href="#" passHref className="text-sm text-muted-foreground hover:text-gray-600">
                  Terms
              </Link>
              <Link href="#" passHref className="text-sm text-muted-foreground hover:text-gray-600">
                  Privacy Policy
              </Link>
              <Link href="#" passHref className="text-sm text-muted-foreground hover:text-gray-600">
                  Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
