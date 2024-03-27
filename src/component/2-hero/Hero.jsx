import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import developerAnimation from "../../component/Animation - 1699914310426.json";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="left-scetion  ">
        <div className="parent-avatar   flex">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ damping: 8, type: "spring", stiffness: 100 }}
            className="avatar"
            src="74f25ebc-16a3-49f3-921f-954e82d53724-modified.png"
            alt=""
          />
          <div className="fa-solid fa-circle-check"></div>
        </div>
        <div className="title ">
          <h1> Software developer, founder, and beginner actor .</h1>
          <p>
            I'm Mostafa Ashraf, a software designer. seeking a challening career
            to improve my technical skills and learn new subjects.{" "}
          </p>
        </div>
        <div className="icons flex">
          <div>
            <a href="https://wsend.co/201117167340">
            <i class="fa-brands icon fa-whatsapp"></i>
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/moustafa.ashraf.507">
            <i class="fa-brands icon fa-facebook"></i>
            </a>
          </div>
          <div>
            <a href="https://github.com/mostafaashraf789">
              <i className="fa-brands icon fa-github"></i>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/mostafa-ashraf-92249326a/">
              <i className="fa-brands icon fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="right-scetion  animation">
        <Lottie
          className="developerAnimation"
          animationData={developerAnimation}
        />
      </div>
    </section>
  );
}
