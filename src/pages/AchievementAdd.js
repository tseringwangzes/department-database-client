
import React from "react";
import AcheivementAddPage from "../components/sign-up/AcheivementAddPage";
import homeStyles from "./Home.module.css";

const AcheivementAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <AcheivementAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default AcheivementAdd;