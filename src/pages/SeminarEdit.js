import React from "react";
import SeminarEditPage from "../components/sign-up/SeminarEditPage";
import homeStyles from "./Home.module.css";

const SeminarEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <SeminarEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default SeminarEdit;