
import React from "react";
import FtyPublicationsEditPage from "../components/sign-up/FtyPublicationsEditPage";
import homeStyles from "./Home.module.css";

const FtyPublicationsEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyPublicationsEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyPublicationsEdit;