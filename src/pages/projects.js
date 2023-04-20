import { motion } from "framer-motion";
import "../Projects.css";

function Projects() {
  const projects = [
    {
      name: "DIY DL FRAMEWORK",
      year: "2022",
      shortdesc: "lorem ipsum dolor sit amet",
      url: "/a",
    },
    {
      name: "DISCORD BOT",
      year: "2022",
      shortdesc: "lorem ipsum sok asik amet lu",
      url: "/b",
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
        {projects.map((a) => (
          <div key={a.name} className="project-text">
            <a href={a.url} style={{ textDecoration: "none", color: "white" }}>
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
