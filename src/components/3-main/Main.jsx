import React, { useState } from "react";
import "./Main.css";
import { myProjects } from "./MyProjects";
import { motion, AnimatePresence } from "framer-motion";
const Main = () => {
  const [currentactive, setcurrentactive] = useState("all projects");
  const [filterArray, setfilterArray] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    const newArray = myProjects.filter((item) => {
      const newArray2 = item.category.find((item) => {
        return item == buttonCategory;
      });
      return newArray2 == buttonCategory;
    });
    setfilterArray(newArray);
    setcurrentactive(buttonCategory);
  };
  return (
    <main className="flex">
      <div className="left-section flex">
        <button
          className={currentactive == "all projects" ? "active" : null}
          onClick={() => {
            setcurrentactive("all projects");
            setfilterArray(myProjects);
          }}
        >
          all projects
        </button>
        <button
          className={currentactive == "css" ? "active" : null}
          onClick={() => {
            handleClick("css");
          }}
        >
          HTML & CSS
        </button>
        <button
          className={currentactive == "js" ? "active" : null}
          onClick={() => {
            handleClick("js");
          }}
        >
          javaScript
        </button>
        <button
          className={currentactive == "react" ? "active" : null}
          onClick={() => {
            handleClick("react");
          }}
        >
          react & MUI
        </button>
        <button
          className={currentactive == "node" ? "active" : null}
          onClick={() => {
            handleClick("node");
          }}
        >
          node & express
        </button>
      </div>
      <div className="right-section flex">
        <AnimatePresence>
          {filterArray.map((item) => {
            return (
              <motion.div
                key={item.imgPath}
                className="card"
                layout
                initial={{ transform:'scale(0)' }}
                animate={{ transform:'scale(1)' }}
                transition={{ damping:8, type: "spring", stiffness: 50 }}
              >
                <img
                  style={{ borderRadius: "0.5rem" }}
                  width={200}
                  src={item.imgPath}
                  alt="img"
                />
                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit laborum vero tempore rem iste dolor nobis at fugit!
                  </p>
                  <div className="icons flex">
                    <div className="flex">
                      <div className="icon icon-link" />
                      <div
                        style={{ marginLeft: "0.5rem" }}
                        className="icon icon-github"
                      />
                    </div>
                    <div
                      style={{
                        alignItems: "center",
                        fontSize: "0.8rem",
                        marginRight: "1rem",
                        color: "rgb(93, 188, 258)",
                        cursor: "pointer",
                      }}
                      className="flex"
                    >
                      <span>
                        <a>more</a>
                      </span>
                      <span className="icon-arrow-right" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Main;
