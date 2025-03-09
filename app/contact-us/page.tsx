import Button from "@/components/button";

export default function ContactUs() {
  return (
    <section id="contact-us" className="bg-amber-50 min-h-screen py-24">
      <h1 className="mt-12 text-3xl text-secondary-500 font-montserrat font-bold text-center">
        Contact Us
      </h1>
      <div className="mt-8 flex flex-col items-center justify-center">
        <h3 className="text-xl">Leave us a message</h3>
        <p className="text-sm text-secondary-300 my-4">
          We will get back to you soon.
        </p>
        <form className="w-1/3 flex flex-col gap-4 text-secondary-500 mt-8">
          <p className="text-lg">Name</p>
          <input
            type="text"
            placeholder="Name"
            className="bg-amber-200 p-2 rounded-xl border-amber-300 border-2 hover:bg-amber-400 hover:border-amber-500 focus:bg-amber-400"
          />
          <p className="text-lg">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="bg-amber-200 p-2 rounded-xl border-amber-300 border-2 hover:bg-amber-400 hover:border-amber-500 focus:bg-amber-400"
          />
          <p className="text-lg">Subject</p>
          <input
            type="dropdown"
            placeholder="Subject"
            className="bg-amber-200 p-2 rounded-xl border-amber-300 border-2 hover:bg-amber-400 hover:border-amber-500 focus:bg-amber-400"
          />
          <p className="text-lg">Message</p>
          <textarea
            placeholder="Message"
            rows={5}
            className="bg-amber-200 p-2 rounded-xl border-amber-300 border-2 hover:bg-amber-400 hover:border-amber-500 focus:bg-amber-400"
          ></textarea>
        </form>
        <div className="mt-8">
          <Button>Send</Button>
        </div>
      </div>
    </section>
  );
}
