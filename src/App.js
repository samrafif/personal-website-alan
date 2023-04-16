import "./App.css";

import Typewriter from "typewriter-effect";
import Img from "./Group 8.png";
import Logo from "./Group 15.png";

function App() {
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
          <p>GH</p>
          <p>DC</p>
          <p>IG</p>
          <p>DR</p>
        </nav>
        <nav class="nav-bar">
          <ul>
            <li style={{ paddingTop: 0 }}>
              <a href="/" class="nav-item active">
                HOME
              </a>
            </li>
            <li>
              <a href="/projects" class="nav-item">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="/readme" class="nav-item">
                README
              </a>
            </li>
            <li>
              <a href="/contact" class="nav-item">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
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
              I am a amateur fullstack web and discord bot developer and Deep
              learning researcher specialized in NLP based in{" "}
              <b style={{ color: "#FF4A62" }}>Indo</b>nesia. <br />
              <br />I have 3-4 years total of programming experience and 1+
              years of experience with AI. <br />
              <br /> I understand the basic math behind Neural Networks;
              Calculus, Linear Algebra and the like. <br />
              <br /> Potatoes are nice also. Oh yeah and photography.
              <br />
              <br /> Part time furry too, or Full-time?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
