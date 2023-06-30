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
      <div className="readmes-container">
        <div>
          <h2 style={{ marginBottom: "0px" }}>READme</h2>
          <p className="readme-header">
            Development:
            <a className="readme-link" href="https://github.com/ThatAlan">
              Github
            </a>
          </p>
          <p className="readme-text">
            I am a novice fullstack and embedded developer, okayly experienced
            in a few languages i.e Python, Javascript, Typescript, C, C++. I
            have been coding for about 3 years{" "}
          </p>
        </div>

        <div>
          <p className="readme-header">
            Arts:
            <a
              className="readme-link"
              href="https://www.instagram.com/alan.that.draws/"
            >
              Instagram
            </a>
          </p>
          <p className="readme-text">
            I do art, lol. yeah mostly furry art (*cough* <b>the homepage</b>),
            am continuing to learn. art is really hard, drawing humans too.{" "}
          </p>
        </div>

        <div>
          <p className="readme-header">
            Design:
            <a className="readme-link" href="https://github.com/ThatAlan">
              Dribble
            </a>
          </p>
          <p className="readme-text">
            I am learning visual and product design, still working on it. but
            atleast i have basic experience with Figma and...figma prototyping
            stuff, mostly figma really{" "}
          </p>
        </div>

        <div>
          <p className="readme-header">
            Machine Learning shit:
            <a className="readme-link" href="https://github.com/ThatAlan">
              Github
            </a>
          </p>
          <p className="readme-text">
            I am currently learning a bit on Machine Learning, more spesifically
            Deep Learning and even more spesifically NLP, cuz LLMs go brrrrrr.
            Abt 1 yr experience{" "}
          </p>
        </div>
      </div>
    </motion.main>
  );
}

export default ReadMe;
