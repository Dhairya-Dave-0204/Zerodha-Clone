import { motion } from "framer-motion";
import { intradayTrades, pricingEquity, pricingMF } from "../../assets/assets";

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

function PricingHero() {
  return (
    <div className="px-4 py-12 sm:mt-16 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-medium leading-tight md:text-3xl lg:text-4xl"
        >
          Charges
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-sm text-gray-600 sm:text-base md:text-lg"
        >
          List of all charges and taxes
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-12 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl lg:mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center max-w-xs gap-4 mx-auto text-center"
        >
          <motion.img
            src={pricingEquity}
            alt="Equity"
            className="object-contain h-28 sm:h-52"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />

          <h3 className="text-base font-medium sm:text-lg">
            Free equity delivery
          </h3>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center max-w-xs gap-4 mx-auto text-center"
        >
          <motion.img
            src={intradayTrades}
            alt="Intraday"
            className="object-contain h-28 sm:h-52"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />

          <h3 className="text-base font-medium sm:text-lg">
            Intraday and F&O trades
          </h3>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center max-w-xs gap-4 mx-auto text-center"
        >
          <motion.img
            src={pricingMF}
            alt="Mutual Fund"
            className="object-contain h-28 sm:h-52"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />

          <h3 className="text-base font-medium sm:text-lg">Free direct MF</h3>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PricingHero;
