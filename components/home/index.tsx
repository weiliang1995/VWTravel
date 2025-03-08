import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="home" className="bg-amber-50 min-h-screen">
      <Image
        src="/great-ocean-road.jpg"
        alt="great-ocean-road"
        fill={true}
        style={{ opacity: 0.5, objectFit: "fill", objectPosition: "bottom" }}
      />
      <h1>Hi</h1>
    </section>
  );
}
