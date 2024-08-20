import { useEffect, useState } from "react";
import Header from "./component/1-header/Header";
import Main from "./component/3-main/Main";
import Hero from "./component/2-hero/Hero";
import Contact from "./component/4-contactUs/Contact";
import Footer from "./component/5-footer/Footer";
export default function App() {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, []);

  return (
    <div id="top" className="Container">
      <Header />

      <Hero />
      <div className="divider"></div>

      <Main />
      <div className="divider"></div>

      <Contact />
      <div className="divider"></div>

      <Footer />

      {show && (
        <a className={show ? "de4a" : null} href="#top">
          <button className="scroll2up fa-solid fa-angle-up "></button>
        </a>
      )}
    </div>
  );
}
