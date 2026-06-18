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

function ProductHero() {
  return (
    <div className="px-4 py-8 mt-16 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        className="mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl"
        >
          Zerodha Products
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl text-gray-600"
        >
          Sleek, modern, and intuitive trading platforms
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-4"
        >
          Check out our{" "}
          <span className="text-blue-700 cursor-pointer hover:underline">
            investment offerings →
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="w-full mx-auto mt-10 border-t border-gray-200 sm:mt-16 2xl:w-7xl"
        />
      </motion.div>
    </div>
  );
}


export default ProductHero;
