import { homeHero } from "../../assets/assets";
import { motion } from "framer-motion"

function Hero() {
  return (
    <div className="px-4 py-8 mt-20 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto text-center">

        <motion.img
          src={homeHero}
          alt="Hero"
          className="w-full max-w-sm mx-auto mb-8 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        />

        <div className="flex flex-col items-center gap-4">

          <motion.h1
            className="text-2xl font-semibold leading-tight md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
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
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </motion.p>

          <motion.button
            className="px-8 py-2 mt-2 text-sm font-medium text-white duration-500 rounded-md cursor-pointer sm:px-14 sm:py-3 sm:text-base md:text-lg bg-secondary hover:scale-105 hover:bg-primary"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: "easeOut",
            }}
          >
            Register Now
          </motion.button>

        </div>
      </div>
    </div>
  );
}

export default Hero;