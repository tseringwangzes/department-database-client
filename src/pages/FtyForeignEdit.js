
import React from "react";
import FtyForeignEditPage from "../components/sign-up/FtyForeignEditPage";
import homeStyles from "./Home.module.css";

const FtyForeignEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyForeignEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyForeignEdit;