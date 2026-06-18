import { motion } from "framer-motion";

function InvestEverything() {
  return (
    <div className="flex flex-col items-center gap-4 mt-16">
      <motion.h1
        className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: "easeOut",
        }}
      >
        Invest in Everything
      </motion.h1>

      <motion.p
        className="max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: 0.25,
          ease: "easeOut",
        }}
      >
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </motion.p>

      <motion.button
        className="px-8 py-2 mt-2 text-sm font-medium text-white duration-500 rounded-md cursor-pointer sm:px-14 sm:py-3 sm:text-base md:text-lg bg-secondary hover:scale-105 hover:bg-primary"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          delay: 0.35,
          ease: "easeOut",
        }}
      >
        Register Now
      </motion.button>
    </div>
  );
}

export default InvestEverything;
