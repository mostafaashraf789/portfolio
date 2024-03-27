import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
export default function Main() {
  const [activeBtn, setactiveBtn] = useState("all");

  const [data, setdata] = useState([
    { title: "React project", img: "./1.jpg", category: "react" },
    { title: "HTML & css project", img: "./2.jpg", category: "css" },
    { title: "Css project", img: "./3.jpg", category: "css" },
    { title: "React project", img: "./4.jpg", category: "react" },
    { title: "Css project", img: "./5.jpg", category: "css" },
    { title: "javaScript project", img: "./6.jpg", category: "js" },
    { title: "css project", img: "./9.jpg", category: "css" },
  ]);

  const [arr, setarr] = useState(data);

  return (
    <main className="flex">
      <section className="left-section flex  ">
        <button
          onClick={() => {
            setactiveBtn("all");
            setarr(data);
          }}
          className={activeBtn === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            setactiveBtn("css");
            const newArr = data.filter((y) => {
              return y.category === "css";
            });

            setarr(newArr);
          }}
          className={activeBtn === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setactiveBtn("java");
            const newArr = data.filter((y) => {
              return y.category === "js";
            });

            setarr(newArr);
          }}
          className={activeBtn === "java" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            setactiveBtn("react");
            const newArr = data.filter((y) => {
              return y.category === "react";
            });

            setarr(newArr);
          }}
          className={activeBtn === "react" ? "active" : null}
        >
          React
        </button>
      </section>

      <section className="right-section   flex ">
        <AnimatePresence>
          {arr.map((x, index) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 100 }}
                key={index}
                className="Card "
              >
                <img className="" src={x.img} alt="" />
                <div className="box">
                  <h4 className="title">{x.title} </h4>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, ab.
                  </p>
                  <div className="flex icons   ">
                    <div className="flex link ">
                      <a href="">
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <a href="">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <a className="more" href="">
                      more <span className="fa-solid fa-arrow-right  "></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
