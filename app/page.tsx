import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import AboutUs from "@/components/about-us";
import Gallery from "@/components/gallery";
import Tours from "@/components/tours";
import ContactUs from "@/components/contact-us";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Gallery />
      <Tours />
      <ContactUs />
      <Footer />
    </>
  );
}
