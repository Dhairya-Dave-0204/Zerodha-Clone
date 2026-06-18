import { education } from "../../assets/assets";
import { motion } from "framer-motion"

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

function Education() {
  return (
    <div className="px-4 py-12 mt-10 sm:mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-328 lg:grid-cols-2 lg:gap-16">

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
            src={education}
            alt="Education"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
          />
        </motion.div>

        <motion.div
          className="flex flex-col order-1 gap-6 text-center lg:text-left lg:order-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >

          <motion.h1
            variants={itemVariants}
            className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl"
          >
            Free and open market education
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl mx-auto text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:mx-0"
          >
            Varsity, the largest online stock market education book in the
            world covering everything from the basics to advanced trading.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium cursor-pointer text-secondary sm:text-base hover:underline"
          >
            Varsity
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="max-w-xl mx-auto text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:mx-0"
          >
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm font-medium cursor-pointer text-secondary sm:text-base hover:underline"
          >
            TradingQ&A
          </motion.p>

        </motion.div>

      </div>
    </div>
  );
}

export default Education;