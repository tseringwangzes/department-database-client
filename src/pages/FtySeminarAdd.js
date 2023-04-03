
import React from "react";
import FtySeminarAddPage from "../components/sign-up/FtySeminarAddPage";
import homeStyles from "./Home.module.css";

const FtySeminarAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtySeminarAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtySeminarAdd;