import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "../project-page.css";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Project() {
  let query = useQuery();

  return (
    <motion.main
      className="main__container"
      initial={{ y: -20, opacity: 0, display: "none" }}
      animate={{ y: 0, opacity: 1, display: "block" }}
      transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="project-container">
        <p>This is project number {query.get("p")}</p>
      </div>
    </motion.main>
  );
}
