
import React from "react";
import FtyPublicationAddPage from "../components/sign-up/FtyPublicationAddPage";
import homeStyles from "./Home.module.css";

const FtyPublicationAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <FtyPublicationAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default FtyPublicationAdd;