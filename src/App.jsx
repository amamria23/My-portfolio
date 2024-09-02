import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [scrol, setscrol] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (eo) => {
      if (window.scrollY > 300) {
        setscrol(1);
      } else {
        setscrol(0);
      }
    });
  }, []);

  return (
    <div id="up" className="Container">
      <Header />
      <Hero />
      <div className="Divider" />
      <Main />
      <div className="Divider" />
      <Contact />
      <div className="Divider" />
      <Footer />

      <a style={{ opacity: scrol, transition: "0.6s all" }} href="#up">
        <button className="scroll2up icon-keyboard_arrow_up" />
      </a>
    </div>
  );
}

export default App;
