import Img from "../assets/Group 17.png";

import { motion } from "framer-motion";

function MainHeader() {
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0, display: "none" }}
      animate={{ y: 0, opacity: 1, display: "block" }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="container">
        <div className="text-main-container">
          <h1 className="main-text">
            Hello.
            <br /> I am
            <br /> Alan
          </h1>
          <p className="quote-text">
            “Life is short, why not do something
            <br /> cool in the meanwhile”
            <p>- Idk who or when</p>
          </p>
        </div>
        <div className="image-m">
          <img src={Img} alt="lmao"></img>
        </div>
        <div className="details">
          <p>
            I am a amateur Fullstack web, Discord bot developer and Deep
            learning researcher specialized in NLP based in{" "}
            <b style={{ color: "#FF4A62" }}>Indo</b>nesia. <br />
            <br />I have 3-4 years total of programming experience and 1+ years
            of experience with AI. <br />
            <br /> I understand the basic math behind Neural Networks; Calculus,
            Linear Algebra and the like. <br />
            <br /> Potatoes are nice also. Oh yeah and photography.
            <br />
            <br /> Part time furry too, or Full-time?
          </p>
        </div>
      </div>
    </motion.main>
  );
}

export default MainHeader;
