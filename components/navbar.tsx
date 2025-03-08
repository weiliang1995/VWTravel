import Image from "next/image";
const flexBetween = `flex items-center justify-between`;

export default function Navbar() {
  return (
    <nav>
      <div
        className={`${flexBetween} w-full p-6 gap-4 list-none bg-amber-100 text-secondary-500 font-sans z-100 top-0 fixed`}
      >
        <div className={`w-5/6 mx-auto ${flexBetween}`}>
          <div className={`${flexBetween} gap-8`}>
            <li className={`gap-8 ${flexBetween}`}>
              <Image src="/logo.png" alt="logo" width={120} height={40} />
              <p className="text-primary-500">Home</p>
            </li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Tours</li>
            <li>Contact Us</li>
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
