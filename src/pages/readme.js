import { motion } from "framer-motion";

import "../readme.css";

function ReadMe() {
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0, display: "none" }}
      animate={{ y: 0, opacity: 1, display: "block" }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="readme-container">
        <h2>READme</h2>
        <p style={{ fontWeight: "500" }}>
          Development
          <a
            style={{
              paddingLeft: "57rem",
              color: "white",
            }}
            href="https://github.com/ThatAlan"
          >
            View Github
          </a>
        </p>
        <p style={{ marginRight: "35rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          lobortis pulvinar augue, sit amet porta felis scelerisque id. Mauris
          consequat, leo sed aliquam euismod, nunc felis dignissim eros, nec
          condimentum urna velit quis odio. Nulla eu tincidunt est, id vehicula
          lorem. Vestibulum{" "}
        </p>
      </div>
    </motion.main>
  );
}

export default ReadMe;
