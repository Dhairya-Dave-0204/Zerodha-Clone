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
      </div>
    </div>
  );
}

export default Hero;