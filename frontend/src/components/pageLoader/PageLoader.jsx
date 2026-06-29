import { motion } from "framer-motion";
import { logo } from "../../assets/assets";

function PageLoader() {
  return (
    <div className="flex items-center justify-center w-full min-h-[80vh] bg-white">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={logo}
          alt="Zerodha"
          className="w-40 select-none"
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.p
          className="mt-5 text-sm tracking-wide text-gray-500"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
        >
          Invest in everything
        </motion.p>

        <div className="relative w-64 h-1 mt-8 overflow-hidden bg-gray-200 rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full rounded-full bg-primary"
            animate={{
              x: ["-100%", "250%"],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{
              width: "35%",
            }}
          />
        </div>

        <motion.p
          className="mt-5 text-sm font-medium tracking-wide text-gray-400"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
          }}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}

export default PageLoader;
