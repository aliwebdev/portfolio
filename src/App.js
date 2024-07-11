import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import music from "./assets/audio.mp3";
import Loader from "./components/loader/Loader";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    };

    document.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>;
  }

  return (
    <>
      <Header />

      <div className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
