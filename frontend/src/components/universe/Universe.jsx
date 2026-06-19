import { motion } from "framer-motion";
import {
  zerodhaFundhouse,
  sensibullLogo,
  streakLogo,
  smallcaseLogo,
  dittoLogo,
  goldenpiLogo,
} from "../../assets/assets";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Universe() {
  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">

      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl"
        >
          The Zerodha Universe
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm text-gray-600 sm:text-base md:text-lg"
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-12 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={zerodhaFundhouse}
            alt="Fundhouse"
            className="object-contain h-10"
          />

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={sensibullLogo}
            alt="Sensibull"
            className="object-contain h-10"
          />

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII,
            and more.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={goldenpiLogo}
            alt="Golden Pi"
            className="object-contain h-10"
          />

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={streakLogo}
            alt="Streak"
            className="object-contain h-10"
          />

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={smallcaseLogo}
            alt="Smallcase"
            className="object-contain h-10"
          />

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks and ETFs.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <img
            src={dittoLogo}
            alt="Ditto"
            className="object-contain h-10"
          />

          <p className="max-w-xs text-sm leading-relaxed text-gray-500 sm:text-base">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="flex justify-center mt-12 sm:mt-16"
      >
        <button className="px-6 py-3 font-medium text-white duration-500 rounded-md cursor-pointer sm:text-base bg-secondary hover:scale-105 hover:bg-primary">
          Sign up for free
        </button>
      </motion.div>
    </div>
  );
}

export default Universe;
