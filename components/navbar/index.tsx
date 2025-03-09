"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const flexBetween = `flex items-center justify-between`;

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div
        className={`${flexBetween} w-full p-6 list-none bg-amber-100 text-secondary-500 font-sans z-100 top-0 fixed`}
      >
        <div className={`w-5/6 mx-auto ${flexBetween}`}>
          <div className={`${flexBetween} gap-8`}>
            <div className={`gap-8 ${flexBetween}`}>
              <Image src="/logo.png" alt="logo" width={120} height={40} />
              <Link
                href="/"
                className={`transition duration-500 hover:text-primary-400 ${
                  pathname === "/" ? "text-primary-400" : ""
                }`}
              >
                Home
              </Link>
            </div>
            <Link
              href="/about-us"
              className={`transition duration-500 hover:text-primary-400 ${
                pathname === "/about-us" ? "text-primary-400" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              className={`transition duration-500 hover:text-primary-400 ${
                pathname === "/gallery" ? "text-primary-400" : ""
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/our-service"
              className={`transition duration-500 hover:text-primary-400 ${
                pathname === "/our-service" ? "text-primary-400" : ""
              }`}
            >
              Our Service
            </Link>
            <Link
              href="/tours"
              className={`transition duration-500 hover:text-primary-400 ${
                pathname === "/tours" ? "text-primary-400" : ""
              }`}
            >
              Tours
            </Link>
            <Link
              href="/contact-us"
              className={`transition duration-500 hover:text-primary-400 ${
                pathname === "/contact-us" ? "text-primary-400" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
          {/* <div className="flex items-center justify-between gap-4">
            <button>Sign Up</button>
            <button className="bg-primary-400 px-6 py-2 rounded-2xl hover:bg-primary-700 hover:text-white">
              Login
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
