import { motion } from "framer-motion";

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

function SupportHero() {
  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl"
        >
          Support
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto mt-4 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
        >
          Search for answers or browse help topics to resolve your queries
          quickly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            delay: 0.15,
          }}
          className="flex items-center max-w-2xl px-4 py-3 mx-auto mt-8 border border-gray-200 rounded-md sm:mt-10 focus-within:border-primary"
        >
          <i className="mr-3 text-lg text-gray-400 ri-search-line"></i>

          <input
            type="text"
            placeholder="Eg: how do I open an account?"
            className="w-full text-sm outline-none sm:text-base"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mt-8 text-sm sm:mt-10 sm:text-base text-primary"
        >
          <motion.button variants={itemVariants} className="hover:underline">
            Track account opening
          </motion.button>

          <motion.button variants={itemVariants} className="hover:underline">
            Track segment activation
          </motion.button>

          <motion.button variants={itemVariants} className="hover:underline">
            Intraday margins
          </motion.button>

          <motion.button variants={itemVariants} className="hover:underline">
            Kite user manual
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SupportHero;
