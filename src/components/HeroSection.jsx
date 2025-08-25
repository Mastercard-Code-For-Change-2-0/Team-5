import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-24 flex items-center justify-center text-center overflow-hidden">
      {/* Background Overlay Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px]"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Communities,{" "}
          <span className="text-red-500">Transforming Lives</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Together we can make a difference. Join us in our mission to educate,
          heal, and support the underprivileged.
        </p>
      </motion.div>
    </section>
  );
}
