import React from "react";
import FtyProjectAddPage from "../components/sign-up/FtyProjectAddPage";
import homeStyles from "./Home.module.css";

const FtyProjectAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyProjectAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyProjectAdd;