import React from "react";
import PublicationEditPage from "../components/sign-up/PublicationEditPage";
import homeStyles from "./Home.module.css";

const PublicationEdit = () => {
  return (
    <body className={homeStyles.rooted}>
    <section className={homeStyles["home-container"]} height="50%">
      <div className={homeStyles["content-container"]} style={{ width: "auto" }}>
        <header className={homeStyles["content-header"]}>
         
        </header>
        <div className={homeStyles["outlet-container"]}>
          <PublicationEditPage />
        </div>
      </div>

      </section>
      </body>
  );
};

export default PublicationEdit;