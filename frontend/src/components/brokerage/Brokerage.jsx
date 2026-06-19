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

function Brokerage() {
  return (
    <div className="px-4 py-12 sm:mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="px-4 pt-12 mb-20 text-center sm:px-6 md:px-10 lg:px-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.h1
              variants={itemVariants}
              className="text-xl font-medium leading-tight md:text-2xl lg:text-3xl"
            >
              Brokerage
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
            >
              Transparent and competitive pricing across all segments.
              Understand the complete breakdown of brokerage, taxes, and charges
              applied on your trades and investments.
            </motion.p>
          </div>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          className="hidden overflow-x-auto lg:block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <table className="w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4"></th>
                <th className="p-4 font-medium">Equity delivery</th>
                <th className="p-4 font-medium">Equity intraday</th>
                <th className="p-4 font-medium">F&O - Futures</th>
                <th className="p-4 font-medium">F&O - Options</th>
              </tr>
            </thead>

            <tbody className="text-gray-600">
              <tr className="border-t">
                <td className="p-4 font-medium">Brokerage</td>
                <td className="p-4">Zero Brokerage</td>
                <td className="p-4">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="p-4">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="p-4">Flat Rs. 20 per executed order</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium">STT/CTT</td>
                <td className="p-4">0.1% on buy & sell</td>
                <td className="p-4">0.025% on the sell side</td>
                <td className="p-4">0.05% on the sell side</td>
                <td className="p-4">
                  • 0.15% of intrinsic value on options that are bought and
                  exercised
                  <br />• 0.15% on sell side (on premium)
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium">Transaction charges</td>
                <td className="p-4">
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>
                <td className="p-4">
                  NSE: 0.00307%
                  <br />
                  BSE: 0.00375%
                </td>
                <td className="p-4">
                  NSE: 0.00183%
                  <br />
                  BSE: 0
                </td>
                <td className="p-4">
                  NSE: 0.03553%
                  <br />
                  BSE: 0.0325%
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium">GST</td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="p-4">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium">SEBI charges</td>
                <td className="p-4">₹10 / crore</td>
                <td className="p-4">₹10 / crore</td>
                <td className="p-4">₹10 / crore</td>
                <td className="p-4">₹10 / crore</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-medium">Stamp charges</td>
                <td className="p-4">0.015% or ₹1500 / crore on buy side</td>
                <td className="p-4">0.003% or ₹300 / crore on buy side</td>
                <td className="p-4">0.002% or ₹200 / crore on buy side</td>
                <td className="p-4">0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <motion.div
          className="flex flex-col gap-6 lg:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              title: "Equity delivery",
              data: [
                ["Brokerage", "Zero Brokerage"],
                ["STT/CTT", "0.1% on buy & sell"],
                ["Transaction", "NSE: 0.00307%, BSE: 0.00375%"],
                ["GST", "18% applicable"],
                ["SEBI", "₹10 / crore"],
                ["Stamp", "0.015% or ₹1500 / crore"],
              ],
            },
            {
              title: "Equity intraday",
              data: [
                ["Brokerage", "0.03% or ₹20/order"],
                ["STT/CTT", "0.025% on sell"],
                ["Transaction", "NSE: 0.00307%, BSE: 0.00375%"],
                ["GST", "18% applicable"],
                ["SEBI", "₹10 / crore"],
                ["Stamp", "0.003% or ₹300 / crore"],
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-5 border border-gray-200 rounded-lg shadow-sm"
            >
              <h3 className="mb-3 text-base font-medium">{item.title}</h3>

              <div className="flex flex-col gap-2 text-sm text-gray-600">
                {item.data.map(([label, value], i) => (
                  <div key={i} className="flex justify-between gap-4">
                    <span className="font-medium">{label}</span>

                    <span className="text-right">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Brokerage;
