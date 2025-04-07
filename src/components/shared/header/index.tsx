import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import HeaderActions from "./header-actions";

type HeaderProps = {
  showActions?: boolean;
};

const Header = async ({ showActions = false }: HeaderProps) => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex flex-between">
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
        {showActions && <HeaderActions />}
      </div>
    </header>
  );
};

export default Header;
