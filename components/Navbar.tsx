"use client";
import Image from "next/image";
import Link from "next/link";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

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
          <h1 className="text-white text-2xl sm:text-3xl font-extrabold">SEER</h1>
          <span className="text-white text-[10px] sm:text-xs tracking-wide">
            ENTERPRISE
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-4 sm:space-x-6 text-sm sm:text-base">
        <Link href="/services" className="text-white hover:underline">SERVICES</Link>
        <Link href="/team" className="text-white hover:underline">TEAM</Link>
        <Link href="/vision" className="text-white hover:underline">VISION</Link>
        <Link href="/contact" className="text-white hover:underline">CONTACT</Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <SideMenu />
      </div>
    </header>
  );
}
