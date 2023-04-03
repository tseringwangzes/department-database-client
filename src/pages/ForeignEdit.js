import React from "react";
import ForeignEditPage from "../components/sign-up/ForeignEditPage";
import homeStyles from "./Home.module.css";

const ForeignEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <ForeignEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default ForeignEdit;