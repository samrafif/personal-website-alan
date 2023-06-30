import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import "yet-another-react-lightbox/styles.css";
import Logo from "./assets/Group 15.png";

import MainHeader from "./components/mainheader";
import NotFound from "./pages/404";
import Projects from "./pages/projects";
import ReadMe from "./pages/readme";
import Gallery from "./pages/gallery";
import Project from "./pages/project";

function App() {
  const location = useLocation();

  // TODO: Maybe this is not the best way to implement this lmao
  const [active, setActive] = useState([
    "nav-item active",
    "nav-item",
    "nav-item",
    "nav-item",
  ]);

  useEffect(() => {
    let activeMapping = {
      "/": [1, 0, 0, 0],
      "/projects": [0, 1, 0, 0],
      "/readme": [0, 0, 1, 0],
      "/gallery": [0, 0, 0, 1],
    };

    let ac = !(activeMapping[location.pathname] === undefined)
      ? activeMapping[location.pathname]
      : [1, 0, 0, 0];

    let newActive = [];
    for (let i = 0; i < 4; i++) {
      newActive[i] = ac[i] === 1 ? "nav-item active" : "nav-item";
    }

    setActive(newActive);
  }, [location]);

  return (
    <div className="App">
      <Typewriter
        className="typewriter"
        options={{
          strings: ["PROGRAMMER", "ARTIST", "PHOTOGRAPHER", "RESEARCHER?"],
          autoStart: true,
          loop: true,
        }}
      />
      <img alt="logo" src={Logo} className="logo"></img>
      <div className="App-header">
        <nav className="socials">
          <a
            href="https://github.com/ThatAlan"
            target="_blank"
            rel="noreferrer"
          >
            GH
          </a>
          <a
            href="https://discord.com/users/782490272813678592"
            target="_blank"
            rel="noreferrer"
          >
            DC
          </a>
          <a
            href="https://instagram.com/alan.ygvf"
            target="_blank"
            rel="noreferrer"
          >
            IG
          </a>
          <a
            href="https://www.reddit.com/user/Mallow_Malo"
            target="_blank"
            rel="noreferrer"
          >
            RD
          </a>
        </nav>
        <nav className="nav-bar">
          <ul>
            <li style={{ paddingTop: 0 }}>
              <Link to="/" className={active[0]}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/projects" className={active[1]}>
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/readme" className={active[2]}>
                README
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={active[3]}>
                GALLERY
              </Link>
            </li>
          </ul>
        </nav>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainHeader />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/readme" element={<ReadMe />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/project" element={<Project />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
