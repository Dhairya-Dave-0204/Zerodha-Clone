import { ecosystem } from "../../assets/assets";
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

function Stats() {
  return (
    <div className="px-4 py-12 mt-20 sm:px-6 md:px-10 lg:px-16">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="flex flex-col order-1 gap-8 text-center lg:text-left lg:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-semibold sm:text-3xl md:text-4xl"
          >
            Trust with confidence
          </motion.h1>

          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h2 className="mb-1 text-lg font-medium sm:text-xl">
                Customer-first always
              </h2>

              <p className="text-sm text-gray-600 sm:text-base">
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments, making us India’s largest broker;
                contributing to 15% of daily retail exchange volumes in India.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="mb-1 text-lg font-medium sm:text-xl">
                No spam or gimmicks
              </h2>

              <p className="text-sm text-gray-600 sm:text-base">
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="mb-1 text-lg font-medium sm:text-xl">
                The Zerodha universe
              </h2>

              <p className="text-sm text-gray-600 sm:text-base">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="mb-1 text-lg font-medium sm:text-xl">
                Do better with money
              </h2>

              <p className="text-sm text-gray-600 sm:text-base">
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center order-2 lg:order-2"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <img
            src={ecosystem}
            alt="Ecosystem"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
          />  
        </motion.div>
      </div>
    </div>
  );
}

export default Stats;
