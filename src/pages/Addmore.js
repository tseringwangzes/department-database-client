import React from "react";
import AddmorePage from "../components/sign-up/Addmorep2";
import homeStyles from "./Home.module.css";
import { useLocation } from "react-router-dom";
const Addmore = () => {
  const {state }= useLocation();
  const utype = state.utype;
  console.log(utype)
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <AddmorePage utype={utype}/>
        </div>
      </div>

      </section>
      </body>
  );
};

export default Addmore;