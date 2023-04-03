
import React from "react";
import FtySeminarsEditPage from "../components/sign-up/FtySeminarsEditPage";
import homeStyles from "./Home.module.css";

const FtySeminarsEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtySeminarsEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtySeminarsEdit;