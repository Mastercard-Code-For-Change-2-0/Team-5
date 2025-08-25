export default function ContactForm() {
  return (
    <section className="py-16 bg-pink-50 font-sans">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-emerald-700">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          We’d love to hear from you. Fill out the form below and we’ll get back to you soon.
        </p>
      </div>

      <form className="max-w-3xl mx-auto grid gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
