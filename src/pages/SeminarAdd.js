import React from "react";
import SeminarAddPage from "../components/sign-up/SeminarAddPage";
import homeStyles from "./Home.module.css";

const  SeminarAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <SeminarAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default SeminarAdd;