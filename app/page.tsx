import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Timeline } from "@/components/timeline";
import { ParallaxScroll } from "@/components/parallax-scroll";
import { Carousel } from "@/components/carousel";
import { AppleCardsCarousel } from "@/components/apple-card-carousel";
import { images } from "@/data/scrollImage";
import { slideData } from "@/data/slideData";
import { timelineData } from "@/data/data";

export default function Page() {
  return (
    <>
      <Navbar />
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
          <h1 className="text-center text-6xl p-4 rounded-lg z-10 font-(family-name:--font-hanalei) opacity-70">
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
            <p className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-700 hover:text-white">
              Event & News
            </p>
            <p className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-700 hover:text-white">
              Latest Promotion
            </p>
          </div>
        </div>
      </section>
      <section id="about-us" className="bg-amber-50 min-h-screen p-16">
        <h1 className="text-3xl text-secondary-500">About Us</h1>
        <h3 className="text-2xl text-secondary-500">
          Who we are? What we do? Why we do it?
        </h3>
        <p className="text-secondary-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ultricies, nisl quis tincidunt ultrices, justo ipsum aliquam lectus,
          sit amet ultricies dolor quam eu diam.
        </p>
        <Timeline data={timelineData} />
      </section>
      <section id="gallery" className="bg-amber-50 min-h-screen p-16">
        <h1 className="text-3xl text-secondary-500">Gallery</h1>
        <ParallaxScroll images={images} />
        <div className="mt-8 flex items-center justify-center">
          <p className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-700 hover:text-white">
            See more
          </p>
        </div>
      </section>
      <section id="ourservice" className="bg-amber-50 min-h-screen p-16">
        <h1 className="text-3xl text-secondary-500">Our Service</h1>
        <Carousel slides={slideData} />
      </section>
      <section id="tours" className="bg-amber-50 min-h-screen p-16">
        <h1 className="text-3xl text-secondary-500">Tours</h1>
        <AppleCardsCarousel />
      </section>
      <section id="contact-us" className="bg-amber-50 min-h-screen p-16">
        <h1 className="text-3xl text-secondary-500">Contact Us</h1>
        <div className="mt-8 flex flex-col items-center justify-center">
          <h3 className="text-xl">Leave us a message</h3>
          <p className="text-sm text-secondary-300 my-2">
            We will get back to you soon.
          </p>
          <form className="w-1/2 flex flex-col gap-4 text-secondary-500">
            <p>Name</p>
            <input type="text" placeholder="Name" />
            <p>Email</p>
            <input type="email" placeholder="Email" />
            <p>Message</p>
            <textarea placeholder="Message"></textarea>
            <button
              type="submit"
              className="text-xl bg-amber-300 px-4 py-2 rounded-xl hover:bg-amber-700 hover:text-white"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
