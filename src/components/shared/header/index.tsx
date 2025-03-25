import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
// import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex flex-star items-end w-min">
            <Image
              src="/images/wine-logo.svg"
              alt={`${APP_NAME} logo`}
              width={130}
              height={100}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-4xl ml-3 mb-1 align-bottom">
              {APP_NAME}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
