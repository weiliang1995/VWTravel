import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-amber-100 pt-12 ">
      <div className="flex w-5/6 mx-auto ">
        <div className="flex flex-col gap-4 text-secondary-500 basis-1/2 items-center">
          <Image src="/logo.png" alt="logo" width={240} height={60} />
          <h6 className="text-center text-lg font-bold font-sans">
            William / Vanessa
          </h6>
          <div className="flex items-left gap-2 mx-auto font-(family-name:--font-slabo)">
            <SocialIcon
              network="whatsapp"
              bgColor="#3f1b04"
              style={{ width: 18, height: 18 }}
            />
            <p>012-3456789</p>
          </div>
          <div className="flex items-left gap-2 mx-auto font-(family-name:--font-slabo)">
            <EnvelopeIcon width={18} height={18} />
            <p className="">vw.travelnote@gmail.com</p>
          </div>
          <div className="flex items-left gap-2 mx-auto font-(family-name:--font-slabo)">
            <MapPinIcon width={18} height={18} />
            <p>1, Jalan Bukit, Kajang, Selangor.</p>
          </div>
          <div className="flex gap-4">
            <SocialIcon
              network="instagram"
              bgColor="#3f1b04"
              style={{ width: 36, height: 36 }}
              url="https://www.instagram.com/vw.travelnote"
              target="_blank"
            />
            <SocialIcon
              network="facebook"
              bgColor="#3f1b04"
              style={{ width: 36, height: 36 }}
              url="https://www.facebook.com/profile.php?id=61573689456320"
              target="_blank"
            />
            <SocialIcon
              network="threads"
              bgColor="#3f1b04"
              style={{ width: 36, height: 36 }}
            />
            <SocialIcon
              network="x"
              bgColor="#3f1b04"
              style={{ width: 36, height: 36 }}
            />
            <SocialIcon
              network="tiktok"
              bgColor="#3f1b04"
              style={{ width: 36, height: 36 }}
            />
            <SocialIcon
              network="youtube"
              bgColor="#3f1b04"
              style={{ width: 36, height: 36 }}
            />
          </div>
        </div>
        <div className="flex flex-col basis-1/4 items-center">
          <div className="flex flex-col gap-y-2 items-center text-secondary-500 mb-4">
            <h6 className="text-center text-lg font-bold font-sans">
              About Us
            </h6>
            <Link
              href="/about-us"
              className="transition duration-500 hover:text-primary-400"
            >
              Who we are?
            </Link>
            <Link
              href="/event-and-news"
              className="hover:text-primary-400 transition duration-500"
            >
              Event & News
            </Link>
            <Link
              href="/promotions"
              className="hover:text-primary-400 transition duration-500"
            >
              Latest Promotion
            </Link>
          </div>
          <div className="flex flex-col gap-y-2 items-center text-secondary-500 mb-4">
            <h6 className="text-center text-lg font-bold font-sans">Gallery</h6>
            <Link
              href="/gallery"
              className="transition duration-500 hover:text-primary-400"
            >
              View Gallery
            </Link>
          </div>
          <div className="flex flex-col gap-y-2 items-center text-secondary-500 mb-4">
            <h6 className="text-center text-lg font-bold font-sans">
              Our Tours
            </h6>
            <Link
              href="/tours"
              className="transition duration-500 hover:text-primary-400"
            >
              By Series
            </Link>
            <p>By Area </p>
          </div>
        </div>
        <div className="flex flex-col basis-1/4 text-secondary-500 gap-y-2 text-center">
          <div className="flex flex-col gap-y-2 items-center text-secondary-500 mb-4">
            <h6 className="text-center text-lg font-bold font-sans">
              Our Service
            </h6>
            <p>Airport Transfer Service (KLIA 1 & 2) </p>
            <p>VIP Tour Package</p>
            <p>Tour Guide Service</p>
            <p>Trip Planner</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center text-secondary-500 mb-4">
            <h6 className="text-center text-lg font-bold font-sans">
              Thing to ask?
            </h6>
            <Link
              href="/contact-us"
              className="transition duration-500 hover:text-primary-400"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="transition duration-500 hover:text-primary-400"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-2/3 p-4 my-12 gap-4 mx-auto text-center text-secondary-300 font-(family-name:--font-slabo)">
        <p>© 2025 William / Vanessa</p>
        <p>Powered by William & Vanessa</p>
      </div>
    </footer>
  );
}
