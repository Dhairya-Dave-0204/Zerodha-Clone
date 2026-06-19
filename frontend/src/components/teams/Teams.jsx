import { motion } from "framer-motion";
import { nithinKamath } from "../../assets/assets";

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

function Teams() {
  return (
    <div className="px-4 py-12 mt-16 sm:px-6 md:px-10 lg:px-16">
      {/* Heading */}
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
          Our Team
        </motion.h1>
      </motion.div>

      {/* Content */}
      <div className="grid items-center grid-cols-1 gap-12 mt-16 sm:mt-20 lg:grid-cols-2 lg:gap-16 lg:max-w-5xl lg:mx-auto">
        {/* Profile */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <img
            src={nithinKamath}
            alt="Nithin Kamath"
            className="w-40 rounded-full sm:w-52 md:w-60 lg:w-64"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-base font-medium sm:text-lg"
            >
              Nithin Kamath
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 sm:text-base"
            >
              Founder, CEO
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="flex flex-col max-w-xl gap-5 mx-auto text-sm leading-relaxed text-center text-gray-500 sm:text-base md:text-lg lg:mx-0 lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p variants={itemVariants}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </motion.p>

          <motion.p variants={itemVariants}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </motion.p>

          <motion.p variants={itemVariants}>
            Playing basketball is his zen.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Teams;
