
import React from "react";
import ForeignAddPage from "../components/sign-up/ForeignAddPage";
import homeStyles from "./Home.module.css";

const ForeignAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <ForeignAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default ForeignAdd;