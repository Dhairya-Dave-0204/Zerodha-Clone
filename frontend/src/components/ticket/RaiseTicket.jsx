import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const accordionData = [
  {
    title: "How do I open an account?",
    content:
      "You can open an account online by completing the signup process and submitting the required documents. The process is fully digital and usually takes a few minutes.",
  },
  {
    title: "What are the brokerage charges?",
    content:
      "Equity delivery is free. Intraday and F&O trades are charged at ₹20 or 0.03% per order, whichever is lower.",
  },
  {
    title: "Is there any minimum balance required?",
    content:
      "No, there is no minimum balance required to open or maintain your account.",
  },
  {
    title: "How can I contact support?",
    content:
      "You can reach out via the support portal, raise a ticket, or browse FAQs for quick answers.",
  },
];

function RaiseTicket() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto mb-10 text-center sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl font-medium md:text-2xl lg:text-3xl"
          >
            Raise a Ticket
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
          >
            Find answers to common questions or raise a support request.
          </motion.p>
        </motion.div>

        <motion.div
          className="border-t border-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {accordionData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggle(index)}
                className="flex items-center justify-between w-full py-5 text-left"
              >
                <span className="text-sm font-medium sm:text-base md:text-lg">
                  {item.title}
                </span>

                <motion.i
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="text-xl ri-arrow-down-s-line"
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 pr-6">
                      <p className="max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default RaiseTicket;
