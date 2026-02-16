import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./Components/css/main.css";
import "./Components/css/responsive.css";

import ParticlesBackground from "./Components/pages/ParticlesBackground";
import Navbar from "./Components/pages/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Projects from "./Components/pages/Projrects";
import Skills from "./Components/pages/Skills";
import Contact from "./Components/pages/Contact";
import Preloader from "./Components/pages/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: false,
      offset: 70,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    const minimumDisplayTime = 1800;
    const start = Date.now();
    let timerId;

    const finishLoading = () => {
      const elapsed = Date.now() - start;
      const delay = Math.max(minimumDisplayTime - elapsed, 0);

      timerId = setTimeout(() => {
        setIsLoading(false);
      }, delay);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  useEffect(() => {
    let preloaderTimer;

    if (!isLoading) {
      preloaderTimer = setTimeout(() => {
        setShowPreloader(false);
        AOS.refreshHard();
      }, 650);
    }

    return () => {
      if (preloaderTimer) {
        clearTimeout(preloaderTimer);
      }
    };
  }, [isLoading]);

  return (
    <>
      <div className="App">
        <ParticlesBackground />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      {showPreloader ? <Preloader isLeaving={!isLoading} /> : null}
    </>
  );
}
export default App;
