import React from "react";
import FtyAwardAddPage from "../components/sign-up/FtyAwardAddPage";
import homeStyles from "./Home.module.css";
import { useLocation } from "react-router-dom";
const FtyAwardAdd = () => {
  const {state }= useLocation();
  const utype = state.utype;
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyAwardAddPage utype={utype}/>
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyAwardAdd;