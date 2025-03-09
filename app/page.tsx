import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";
import Text from "@/components/text";
import TextWithImage from "@/components/text-with-image";
import { ParallaxScroll } from "@/components/parallax-scroll";
import { AppleCardsCarousel } from "@/components/apple-card-carousel";
import { images } from "@/data/scrollImage";
import { services } from "@/data/service";
import { AnimatedTestimonials } from "@/components/animated-testimonials";

export default function Page() {
  return (
    <>
      <section
        id="home"
        className="bg-amber-50 min-h-screen relative flex items-center justify-center"
      >
        <Image
          src="/great-ocean-road.jpg"
          alt="great-ocean-road"
          fill={true}
          style={{
            opacity: 0.5,
            objectFit: "cover",
          }}
        />
        <div className="flex flex-col items-center justify-center text-secondary-500 z-10">
          <h1 className="text-center text-8xl p-4 rounded-lg z-10 font-(family-name:--font-hanalei) opacity-70">
            Start your journey here. <br />
            Wander with us, wonder with us.
          </h1>
          <Image
            src="/logo.png"
            alt="logo"
            width={600}
            height={400}
            className="opacity-50"
          />
          <div className="mt-16 w-3/5 flex items-center justify-between gap-8 text-secondary-500">
            <Link
              href="/event-and-news"
              className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-400"
            >
              Event & News
            </Link>
            <Link
              href="/promotions"
              className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-400"
            >
              Latest Promotion
            </Link>
          </div>
        </div>
      </section>
      <section id="about-us" className="bg-amber-50 min-h-screen py-24">
        <Text title="Who we are?" />
        <TextWithImage />
      </section>
      <section id="gallery" className="bg-amber-50 min-h-screen py-24">
        <h1 className="text-3xl text-center font-montserrat font-bold text-secondary-500">
          Gallery
        </h1>
        <ParallaxScroll
          images={images}
          className="mt-8 min-w-screen items-center justify-center"
        />
        <div className="mt-8 flex items-center justify-center">
          <Button>See more</Button>
        </div>
      </section>
      <section id="ourservice" className="bg-amber-50 min-h-screen py-24">
        <h1 className="text-3xl text-center font-montserrat font-bold text-secondary-500">
          Our Service
        </h1>
        <AnimatedTestimonials testimonials={services} />
      </section>
      <section id="tours" className="bg-amber-50 min-h-screen py-24">
        <h1 className="text-3xl text-center font-montserrat font-bold text-secondary-500">
          Tours
        </h1>
        <AppleCardsCarousel />
      </section>
    </>
  );
}
