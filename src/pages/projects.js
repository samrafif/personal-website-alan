import { motion } from "framer-motion";
import "../projects.css";

function Projects() {
  const projects = [
    {
      name: "CRAZYLARM WEIRDASS ALARM PROJECT",
      year: "2023",
      shortdesc: "I made an alarm clock, with a siren",
    },
    {
      name: "DISPLAY FUN",
      year: "2023",
      shortdesc: "I had fun with some displays",
    },
    {
      name: "WEESH",
      year: "2022",
      shortdesc: "Just a simple link shortener",
    },
    {
      name: "PPE-DETECT-TELE",
      year: "2022",
      shortdesc:
        "A thing that warns you if with Telegram if someone in your workplace is not wearing appropriate PPE",
    },
    {
      name: "DIY DL FRAMEWORK",
      year: "2022",
      shortdesc:
        "I made a simple and shitty Deep Learning framework similar to the Keras API",
    },
    {
      name: "DISCORD BOT",
      year: "2022",
      shortdesc:
        "This is just a weird multipurpose discord bot from my discord.py ages",
    },
  ];
  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0, display: "none" }}
      animate={{ y: 0, opacity: 1, display: "block" }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div style={{ paddingTop: "10rem" }}>
        {projects.map((a, idx) => (
          <div key={a.name} className="project-text">
            <a
              href={"/project?p=" + idx.toString()}
              style={{ textDecoration: "none", color: "white" }}
            >
              <p className="project-name">{a.name}</p>
              <p className="project-desc">{a.shortdesc}</p>
              <p className="project-year">/{a.year}</p>
            </a>
          </div>
        ))}
      </div>
    </motion.main>
  );
}

export default Projects;
