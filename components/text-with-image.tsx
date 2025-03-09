import {
  CameraIcon,
  HomeModernIcon,
  MapIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function TextWithImage() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-montserrat font-bold">
          Our Commitments and Guarantee
        </h2>
        <div className="w-full my-8 ">
          <ul className="my-4 py-4 flex items-center justify-between gap-4">
            <li className="flex flex-col items-center gap-y-2">
              <HomeModernIcon width={48} height={48} />
              <p className="text-md font-montserrat">Carefully Chosen Hotels</p>
            </li>
            <li className="flex flex-col items-center gap-y-2">
              <MapIcon width={48} height={48} />
              <p className="text-md font-montserrat">Personalized Schedule</p>
            </li>
            <li className="flex flex-col items-center gap-y-2">
              <CalendarDaysIcon width={48} height={48} />
              <p className="text-md font-montserrat">
                Flexible date and time tailored to your need
              </p>
            </li>
            <li className="flex flex-col items-center gap-y-2">
              <ClockIcon width={48} height={48} />
              <p className="text-md font-montserrat">
                Private moments for self exploration
              </p>
            </li>
            <li className="flex flex-col items-center gap-y-2">
              <CameraIcon width={48} height={48} />
              <p className="text-md font-montserrat">
                Highlight of your journey
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
