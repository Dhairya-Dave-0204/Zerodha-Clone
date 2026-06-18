import { motion } from "framer-motion";
import { largestBroker, pressLogos } from "../../assets/assets";

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

function Awards() {
  return (
    <div className="px-4 py-12 mt-10 sm:mt-24 sm:px-6 md:px-10 lg:px-16">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="flex justify-center order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <img
            src={largestBroker}
            alt="Awards"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
          />
        </motion.div>

        <motion.div
          className="flex flex-col order-1 gap-5 text-center lg:text-left lg:order-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-semibold sm:text-3xl md:text-4xl"
          >
            Largest stock broker in India
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-600 sm:text-base md:text-lg"
          >
            2+ Million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 sm:text-base"
          >
            <ul className="space-y-2 list-disc list-inside">
              <li>Futures and Options</li>
              <li>Commodity Derivatives</li>
              <li>Currency Derivatives</li>
            </ul>

            <ul className="space-y-2 list-disc list-inside">
              <li>Stocks and IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Government Securities</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-4 lg:justify-start"
          >
            <img
              src={pressLogos}
              alt="Press Logos"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Awards;
