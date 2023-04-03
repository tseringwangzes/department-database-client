
import React from "react";
import PublicationAddPage from "../components/sign-up/PublicationAddPage";
import homeStyles from "./Home.module.css";

const PublicationAdd = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
        </header>
        <div className={homeStyles["outlet-container"]}>
          <PublicationAddPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default PublicationAdd;