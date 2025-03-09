import Image from "next/image";
import { Timeline } from "@/components/timeline";
import { timelineData } from "@/data/data";
import Text from "@/components/text";
import TextWithImage from "@/components/text-with-image";

export default function Page() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center">
      <div className="relative w-full" style={{ height: "calc(50vh - 64px)" }}>
        <Image
          src="/great-ocean-road.jpg"
          alt="great-ocean-road"
          fill={true}
          style={{
            opacity: 0.5,
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-hanalei text-9xl z-10">About Us</h1>
        </div>
      </div>
      <Text title="Who we are?" />
      <Timeline data={timelineData} />
      <Text title="Our Mission and Vision" />
      <TextWithImage />
    </div>
  );
}
