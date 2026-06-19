import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

function AboutHero() {
  return (
    <>
      <div className="px-4 py-8 mt-16 sm:px-6 md:px-10 lg:px-16">

        {/* Heading */}
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
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </motion.h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="w-full mx-auto mt-10 border-t border-gray-200 lg:mt-16 sm:mt-20 2xl:w-7xl"
        />

        {/* Content */}
        <motion.div
          className="grid grid-cols-1 gap-10 mt-12 sm:mt-20 lg:grid-cols-2 lg:gap-16 lg:max-w-5xl lg:mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.div
            variants={itemVariants}
            className="flex flex-col max-w-xl gap-4 mx-auto text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg lg:mx-0"
          >
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col max-w-xl gap-4 mx-auto text-sm leading-relaxed text-gray-500 sm:text-base md:text-lg lg:mx-0"
          >
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p>
              Rainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>

            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}

export default AboutHero;
