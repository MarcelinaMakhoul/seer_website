import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-x-3">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={40}
          height={40}
          className="sm:w-[50px] sm:h-[50px]"
        />
        <div className="flex flex-col leading-tight">
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold">
            SEER
          </h1>
          <span className="text-white text-[10px] sm:text-xs tracking-wide">
            ENTERPRISE
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-4 sm:space-x-6 text-sm sm:text-base">
        <Link href="/services">
          <a className={`text-white hover:underline ${pathname === '/services' ? 'underline' : ''}`}>
            SERVICES
          </a>
        </Link>
        <Link href="/team">
          <a className={`text-white hover:underline ${pathname === '/team' ? 'underline' : ''}`}>
            TEAM
          </a>
        </Link>
        <Link href="/vision">
          <a className={`text-white hover:underline ${pathname === '/vision' ? 'underline' : ''}`}>
            VISION
          </a>
        </Link>
        <Link href="/contact">
          <a className={`text-white hover:underline ${pathname === '/contact' ? 'underline' : ''}`}>
            CONTACT
          </a>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <SideMenu />
      </div>
    </header>
  );
}
