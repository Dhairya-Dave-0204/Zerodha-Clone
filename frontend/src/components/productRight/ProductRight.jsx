import { motion } from "framer-motion";
import { coin, kiteconnect } from "../../assets/assets";

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

function ProductRight() {
  return (
    <>
      {/* Coin Section */}
      <motion.div
        className="px-4 py-12 sm:px-6 md:px-10 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:max-w-5xl lg:mx-auto">

          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <img
              src={coin}
              alt="Coin"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col max-w-xl gap-5 mx-auto text-center lg:text-left lg:mx-0"
          >
            <h2 className="text-2xl font-medium sm:text-3xl">
              Coin
            </h2>

            <p className="text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
              Buy direct mutual funds online, commission-free, delivered directly
              to your Demat account. Enjoy a seamless investing experience with
              powerful tracking and portfolio insights.
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Kite Connect Section */}
      <motion.div
        className="px-4 py-12 sm:px-6 md:px-10 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:max-w-5xl lg:mx-auto">

          <motion.div
            variants={itemVariants}
            className="flex flex-col order-2 max-w-xl gap-5 mx-auto text-center lg:text-left lg:mx-0 lg:order-1"
          >
            <h2 className="text-2xl font-medium sm:text-3xl">
              Kite Connect API
            </h2>

            <p className="text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg">
              Build powerful trading platforms and experiences with our simple
              HTTP/JSON APIs. Used by startups, brokerages, and fintech
              companies across India.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center order-1 lg:justify-end lg:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <img
              src={kiteconnect}
              alt="Kite Connect"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
            />
          </motion.div>

        </div>
      </motion.div>
    </>
  );
}

export default ProductRight;
