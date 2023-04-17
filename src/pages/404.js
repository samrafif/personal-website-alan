import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99], delay: 0.7 }}
    >
      <div className="container">
        <h1>Where are you going??</h1>
      </div>
    </motion.main>
  );
}

export default NotFound;
