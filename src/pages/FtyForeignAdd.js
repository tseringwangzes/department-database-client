
import React from "react";
import FtyForeignAddPage from "../components/sign-up/FtyForeignAddPage";
import homeStyles from "./Home.module.css";

const FtyForeignAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyForeignAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyForeignAdd;