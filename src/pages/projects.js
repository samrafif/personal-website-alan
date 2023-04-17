import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      name: "DIY DL FRAMEWORK",
      year: "2022",
    },
    {
      name: "DISCORD BOT",
      year: "2022",
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
          <div className="project-text">
            <h1>{a.name}</h1>
            <p style={{ paddingTop: "2rem", fontSize: "20px" }}>/{a.year}</p>
          </div>
        ))}
      </div>
    </motion.main>
  );
}

export default Projects;
