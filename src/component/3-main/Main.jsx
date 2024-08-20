import { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";
import { projectsData } from "../data/data";
export default function Main() {
  const [activeBtn, setactiveBtn] = useState("all");

  const [data, setdata] = useState(projectsData);

  const [arr, setarr] = useState(data);

  return (
    <main className="flex" id="Project">
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

        {/* <button
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
        </button> */}

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
          React.js
        </button>
        <button
          onClick={() => {
            setactiveBtn("Next");
            const newArr = data.filter((y) => {
              return y.category === "Next";
            });

            setarr(newArr);
          }}
          className={activeBtn === "Next" ? "active" : null}
        >
          Next.js
        </button>

      </section>

      <section className="right-section   flex ">
        <AnimatePresence>
          {arr.map((item, index) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 100 }}
                key={index}
                className="Card "
              >
                <img className="" src={item.img} alt="" />
                <div className="box">
                  <h4 className="title">{item.title} </h4>
                  <p className="subtitle">
                   {item.summary}
                  </p>
                  <div className="flex icons   ">
                    <div className="flex link ">
                     
                      <a target="_blank" href={item.githup} >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                    <a target="_blank" className="more" href={item.Demo}>
                      Demo <span className="fa-solid fa-arrow-right  "></span>
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
